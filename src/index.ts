console.log('Starting index.js');

process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection:', reason);
  process.exit(1);
});
process.on('uncaughtException', (err) => {
  console.error('Uncaught Exception:', err);
  process.exit(1);
});

import { createServer, startServer } from './server';

const app = createServer();
const PORT = process.env.PORT || 3000;
startServer(app, Number(PORT)); 