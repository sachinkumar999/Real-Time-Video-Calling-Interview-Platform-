import express from 'express';
import path from 'path';
import { ENV } from './lib/env.js';
import { connect } from 'http2';
import { connectDB } from './lib/db.js';

const app = express();
const __dirname = path.resolve();


app.get("/health", (req, res) => {
    res.status(200).json({ message: "api is running and up" });       
    
});     



app.get("/books", (req, res) => {
    res.status(200).json({ message: "this is books endpoint" });       
    
});     



// make our app ready for production
if(ENV.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname, "../frontend/dist")));

    app.get("/{*any}", (req, res) => {
        res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
    });
}

app.listen(ENV.PORT, () => {
    console.log("Server is running on port: ", ENV.PORT );
    connectDB();
});

const startServer = async () => {
    try {
        await connectDB();
        app.listen(ENV.PORT, () => {
            console.log("Server is running on port: ", ENV.PORT );
        });
    } catch (error) {
        console.error("Failed to connect to the database:", error);
        process.exit(1);
    }    

};

startServer();
