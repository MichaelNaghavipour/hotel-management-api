import express from 'express';
import roomsRouter from './api/rooms';
import groupsRouter from './api/groups';

const app = express();
app.use(express.json());

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

app.use('/rooms', roomsRouter);
app.use('/groups', groupsRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 