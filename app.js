import express from 'express';
import {
  getUsers,
  registerUser,
  loginUser,
} from './controllers/user.controller.js';

const app = express();

app.use(express.json());

app.get('/api/users', getUsers);

app.post('/api/auth/register', registerUser);

app.post('/api/auth/login', loginUser);

export { app };
