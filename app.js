import express from 'express';
import userRoutes from './routes/user.routes.js';
import authRoutes from './routes/auth.routes.js';
import { notFound } from './middleware/notFound.js';

const app = express();

app.use(express.json());

app.use('/api/users', userRoutes);

app.use('/api/auth', authRoutes);

app.use(notFound);

export { app };
