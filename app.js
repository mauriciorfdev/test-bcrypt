import express from 'express';
import { getUsers } from './controllers/user.controller.js';
import { registerUser, loginUser } from './controllers/auth.controller.js';

const app = express();

app.use(express.json());

app.get('/api/users', getUsers);

app.post('/api/auth/register', registerUser);

app.post('/api/auth/login', loginUser);

export { app };
