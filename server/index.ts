import express from 'express';
import cors from 'cors';
import authRoutes from './routes/auth.js';

const app = express();
const PORT = 3001;

// CORS middleware
app.use(cors());

app.use(express.json());

// Auth routes
app.use('/api/auth', authRoutes);

// Health check
app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok' });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
