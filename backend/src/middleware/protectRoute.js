import { requireAuth } from "@clerk/express";
import User from "../models/User.js";
import { ENV } from "../lib/env.js";

export const protectRoute = [
  requireAuth(),
  async (req, res, next) => {
    try {
      const clerkId = req.auth().userId;

      if (!clerkId) return res.status(401).json({ message: "Unauthorized - invalid token" });

      // find user in db by clerk ID
      let user = await User.findOne({ clerkId });

      if (!user) {
        if (!ENV.CLERK_API_KEY) {
          return res.status(404).json({ message: "User not found" });
        }

        const clerkResponse = await fetch(`https://api.clerk.com/v1/users/${clerkId}`, {
          headers: {
            Authorization: `Bearer ${ENV.CLERK_API_KEY}`,
            "Content-Type": "application/json",
          },
        });

        if (!clerkResponse.ok) {
          console.error("Clerk fetch failed:", clerkResponse.status, await clerkResponse.text());
          return res.status(404).json({ message: "User not found" });
        }

        const clerkUser = await clerkResponse.json();
        const newUserData = {
          clerkId,
          email: clerkUser.email_addresses?.[0]?.email_address,
          name: `${clerkUser.first_name || ""} ${clerkUser.last_name || ""}`.trim() || clerkUser.first_name || clerkUser.last_name || "Unknown",
          profileImage: clerkUser.image_url || "",
        };

        user = await User.create(newUserData);
      }

      // attach user to req
      req.user = user;

      next();
    } catch (error) {
      console.error("Error in protectRoute middleware", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  },
];

