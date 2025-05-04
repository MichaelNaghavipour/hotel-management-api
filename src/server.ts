import express from 'express';
import roomsRouter from './routes/rooms';
import groupsRouter from './routes/groups';

export function createServer() {
  const app = express();
  app.use(express.json());

  app.get('/health', (req, res) => {
    res.status(200).json({ status: 'ok' });
  });

  app.use('/rooms', roomsRouter);
  app.use('/groups', groupsRouter);

  return app;
}

export function startServer(app: express.Application, port: number = 3000) {
  return app.listen(port, '0.0.0.0', () => {
    console.log(`Server running on port ${port}`);
  });
}
