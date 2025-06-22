import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';
import cors from 'cors';

const app = express();
const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"]
  }
});

const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.get('/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

app.get('/api/tasks', (req, res) => {
  res.json({ tasks: [] });
});

io.on('connection', (socket) => {
  console.log('User connected:', socket.id);
  
  socket.on('disconnect', () => {
    console.log('User disconnected:', socket.id);
  });
  
  socket.on('task:create', (data) => {
    console.log('Task created:', data);
    io.emit('task:created', data);
  });
  
  socket.on('task:update', (data) => {
    console.log('Task updated:', data);
    io.emit('task:updated', data);
  });
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});