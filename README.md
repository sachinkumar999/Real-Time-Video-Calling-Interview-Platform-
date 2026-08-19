# 🎓 TalentIQ - Real-Time Video Calling & Coding Interview Platform

TalentIQ is a premium, full-stack, real-time interview platform designed to streamline remote coding interviews. It brings together live video calling, a collaborative VSCode-style code editor, real-time chat, automated feedback testing, and a comprehensive performance dashboard.

---

## 🚀 Key Features

*   **💻 VSCode-Powered Code Editor**: Collaborative code editor using Monaco Editor supporting multiple programming languages.
*   **🎥 1-on-1 Video Interview Rooms**: High-quality, low-latency video and audio calling with mic/camera toggle, screen sharing, and recording powered by Stream Video SDK.
*   **🔒 Room Locking**: Restricts access so only the designated interviewer and candidate (2 participants maximum) can join the session.
*   **💬 Real-Time Chat**: Live chat messaging channel inside the room for sharing links, text, and extra information.
*   **🎯 Automated Feedback & Code Execution**: Runs code in a secure, isolated sandbox and returns instant feedback/test cases (success vs failure).
*   **🧠 Asynchronous Background Tasks**: Utilizes Inngest for robust background job handling and event-driven workflows.
*   **📊 Live Performance Dashboard**: Clean candidate dashboard displaying interview statistics, feedback history, and upcoming sessions.
*   **🧩 Practice Arena**: A solo practice page loaded with programming problems for developers to hone their skills.
*   **🔐 Secure Authentication**: User management, session security, and role-based routes implemented via Clerk.

---

## 🛠️ Tech Stack

### Frontend
*   **Framework**: React 19 (Vite)
*   **Styling**: Tailwind CSS & DaisyUI (Premium glassmorphism & responsive layouts)
*   **State & Queries**: TanStack Query (React Query)
*   **WebRTC/Chat**: Stream Video SDK & Stream Chat SDK
*   **Code Editor**: `@monaco-editor/react`

### Backend
*   **Runtime**: Node.js
*   **Framework**: Express
*   **Database**: MongoDB & Mongoose ORM
*   **Job Orchestration**: Inngest
*   **Authentication**: Clerk Express Middleware

---

## 📁 Project Structure

```
talent-IQ-master/
├── backend/                  # Node.js + Express Backend
│   ├── src/
│   │   ├── lib/              # DB connections, Env, Inngest config
│   │   ├── routes/           # REST endpoints
│   │   └── server.js         # Entrypoint
│   ├── .env                  # Backend Configuration (Ignored)
│   └── package.json
├── frontend/                 # Vite + React Frontend
│   ├── src/
│   │   ├── components/       # Reusable UI elements (VideoCallUI, etc.)
│   │   ├── pages/            # App routes (Dashboard, Room, Practice)
│   │   └── main.jsx
│   ├── .env                  # Frontend Configuration (Ignored)
│   └── package.json
├── .gitignore                # Global git ignore configurations
├── package.json              # Workspace-wide commands
└── README.md                 # Project documentation
```

---

## ⚙️ Environment Configuration

To run this project locally, you need to configure environment variables for both backend and frontend.

### 1. Backend (`/backend/.env`)
Create a `.env` file in the `backend/` directory and populate it:
```env
PORT=3037
NODE_ENV=development

# MongoDB Connection
DB_URL=mongodb://localhost:27017/interview_db

# Inngest Keys
INNGEST_EVENT_KEY=your_inngest_event_key
INNGEST_SIGNING_KEY=your_inngest_signing_key

# Stream.io API Keys
STREAM_API_KEY=your_stream_api_key
STREAM_API_SECRET=your_stream_api_secret

# Clerk Authentication Keys
CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key

# Frontend Client URL
CLIENT_URL=http://localhost:5173
```

### 2. Frontend (`/frontend/.env`)
Create a `.env` file in the `frontend/` directory and populate it:
```env
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
VITE_API_URL=http://localhost:3037/api
VITE_STREAM_API_KEY=your_stream_api_key
```

---

## 🚀 Setup & Running Locally

### Prerequisites
Make sure you have **Node.js (v18+)** and **MongoDB** installed and running on your local machine.

### Installation
1. Clone this repository to your local machine.
2. Install dependencies for the entire project by running:
   ```bash
   npm run build
   ```
   *(This script will automatically install npm packages in both backend/ and frontend/ folders).*

### Run the Application

#### Backend
In a new terminal shell:
```bash
cd backend
npm run dev
```
The server will start on port `3037`.

#### Frontend
In another terminal shell:
```bash
cd frontend
npm run dev
```
The client will start on [http://localhost:5173/](http://localhost:5173/).

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to open a PR or submit an issue on the repository.

---

## 📄 License

Distributed under the ISC License. See `LICENSE` for more information.
