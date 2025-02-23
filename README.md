# 📖 Collaborative Writing Platform

## 📌 Overview

This is a GitHub-style **collaborative writing platform** designed to enable multiple users to contribute to a document in real-time, submit changes as "pull requests," and merge updates seamlessly. Inspired by Notion's block-based editing and GitHub's PR workflow, the platform ensures **conflict-free collaboration** using CRDTs.

### 🌟 Why This Project?

- Traditional document collaboration tools like Google Docs lack structured version control.
- GitHub works well for code but isn't optimized for content writing.
- Notion offers flexibility but lacks a **Git-like workflow** for document edits.
- This platform combines the best of both worlds—**real-time collaboration + versioning & PR-based merging**.

## 🛠 Tech Stack

| Component          | Technology                                 |
| ------------------ | ------------------------------------------ |
| **Frontend**       | React.js + TipTap (ProseMirror)            |
| **Real-time Sync** | Yjs (CRDT-based)                           |
| **Backend**        | Node.js (Express) + WebSockets (Socket.io) |
| **Database**       | PostgreSQL                                 |
| **Versioning**     | Git-style storage (block-based commits)    |
| **Deployment**     | Docker + AWS/GCP                           |


## 📂 Folder Structure

```
collab-writing/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── server.js
│   └── config/
├── frontend/
│   ├── src/
│   ├── components/
│   ├── pages/
│   ├── hooks/
│   ├── styles/
│   └── App.js
└── README.md
```
