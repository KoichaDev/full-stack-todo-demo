import express from 'express';
import todoRouter from './todo/todo.router.js';

const api = express.Router();

api.use('/todo', todoRouter);

export default api;
