import { createServer, startServer } from './server';

const app = createServer();
const PORT = process.env.PORT || 3000;
startServer(app, Number(PORT)); 