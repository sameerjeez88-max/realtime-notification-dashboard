/**
 * @project Real-Time Notification & Dashboard System
 * @author Rana Yasir Mahy Ud Din (https://ranayasir.unaux.com/)
 */

const notifications = [
  { id: 1, title: 'System Boot', message: 'Dashboard server initialized successfully.', type: 'info', time: 'Just now' },
  { id: 2, title: 'New User Signup', message: 'Ali Raza registered a new account.', type: 'success', time: '2 mins ago' }
];

const stats = {
  activeUsers: 142,
  serverLoad: '18%',
  pendingTasks: 7
};

module.exports = { notifications, stats };