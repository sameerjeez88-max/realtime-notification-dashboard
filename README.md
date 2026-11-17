# ⚡ Real-Time Notification & Analytics Command Center

[![Node.js](https://img.shields.io/badge/Node.js-v18%2B-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-v4.21-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![Socket.io](https://img.shields.io/badge/Socket.io-v4.8-010101?style=for-the-badge&logo=socket.io&logoColor=white)](https://socket.io/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-v3.4-38BDF8?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

An enterprise-grade **Real-Time Notification & Analytics Dashboard** powered by Node.js, Express, and **Socket.io** web sockets for live event streaming, backed by a responsive, modern dark-mode user interface designed with **Tailwind CSS**.

---

## 📋 Table of Contents
1. [Core Features & Highlights](#-core-features--highlights)
2. [Tech Stack & Architecture](#-tech-stack--architecture)
3. [Project Folder Structure](#-project-folder-structure)
4. [API & WebSocket Events Reference](#-api--websocket-events-reference)
5. [Local Installation & Setup](#-local-installation--setup)
6. [Testing the Application](#-testing-the-application)
7. [Author & Developer](#-author--developer)

---

## 🌟 Core Features & Highlights

* **Live WebSocket Broadcasting:** Real-time event simulation streaming alerts instantly to all connected client browsers without page refreshes.
* **Dynamic Analytics Stats:** REST endpoints providing active user counts, server load percentages, and pending operational tasks.
* **Interactive Notification Feed:** Auto-updating notification stream categorized by severity levels (Success, Warning, Info).
* **Modern Tailwind UI:** A sleek dark-mode command center layout optimized for real-time monitoring and enterprise ops.
* **Clean Code Architecture:** Modular structure built for scalability, performance, and clean separation of concerns.

---

## 🛠️ Tech Stack & Architecture

| Layer | Technology | Purpose |
| :--- | :--- | :--- |
| **Frontend UI** | HTML5 & Tailwind CSS | Responsive dark-mode dashboard grid & live stream feed |
| **Backend Runtime** | Node.js & Express.js | REST routing, static asset serving, and HTTP server |
| **WebSocket Engine** | Socket.io SDK (`v4.8`) | Bidirectional real-time event broadcasting |

---

## 📂 Project Folder Structure

```text
realtime-notification-dashboard/
├── public/
│   └── index.html             # Tailwind CSS modern command center UI
├── src/
│   └── data/
│       └── store.js           # In-memory mock database store (stats & alerts)
├── server.js                  # Main entry point, Express app & Socket.io bindings
├── package.json               # Dependencies and scripts manifest
├── .env                       # Environment variables configuration
├── .gitignore                 # Git ignore exclusions
└── README.md                  # Comprehensive technical documentation
