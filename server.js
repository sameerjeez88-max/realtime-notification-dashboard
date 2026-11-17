/**
 * @project Real-Time Notification & Dashboard System
 * @author Rana Yasir Mahy Ud Din
 * @website https://ranayasir.unaux.com/
 * @github https://github.com/Sameerjeez88-max
 * @copyright 2026 Rana Yasir Mahy Ud Din. All Rights Reserved.
 */

require('dotenv').config();
const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');
const path = require('path');
const { notifications, stats } = require('./src/data/store');

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: '*' }
});

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// REST API Endpoints
app.get('/api/stats', (req, res) => {
  res.status(200).json({ success: true, data: stats });
});

app.get('/api/notifications', (req, res) => {
  res.status(200).json({ success: true, data: notifications });
});

// WebSocket Connection Handling
io.on('connection', (socket) => {
  console.log(`Client connected: ${socket.id}`);

  // Simulate broadcasting a random live alert every 10 seconds
  const intervalId = setInterval(() => {
    const alertTypes = ['info', 'success', 'warning'];
    const titles = ['New Order Placed', 'Security Alert', 'Database Backup', 'Traffic Spike'];
    const messages = [
      'Stripe checkout completed for order #9921.',
      'Unauthorized login attempt blocked from IP 192.168.1.10.',
      'Automated nightly backup completed successfully.',
      'Active connections surged past 150 concurrent users.'
    ];

    const randomIndex = Math.floor(Math.random() * titles.length);
    const newAlert = {
      id: Date.now(),
      title: titles[randomIndex],
      message: messages[randomIndex],
      type: alertTypes[Math.floor(Math.random() * alertTypes.length)],
      time: 'Just now'
    };

    notifications.unshift(newAlert);
    if (notifications.length > 10) notifications.pop();

    // Broadcast to all connected clients
    io.emit('live-notification', newAlert);
  }, 10000);

  socket.on('disconnect', () => {
    clearInterval(intervalId);
    console.log(`Client disconnected: ${socket.id}`);
  });
});

const PORT = process.env.PORT || 4000
server.listen(PORT, () => {
  console.log(`========================================================`);
  console.log(`Real-Time Dashboard running on http://localhost:${PORT}`);
  console.log(`Developed by: Rana Yasir Mahy Ud Din`);
  console.log(`========================================================`);
});