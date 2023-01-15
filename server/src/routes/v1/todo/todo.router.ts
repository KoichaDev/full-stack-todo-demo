import express, { Router } from 'express';
import {
	getAllTodo,
	createTodo,
	updateTodo,
	deleteTodo,
} from './todo.controller.js';

const todoRouter: Router = express.Router();

todoRouter.get('/', getAllTodo);
todoRouter.post('/', createTodo);
todoRouter.put('/:id', updateTodo);
todoRouter.delete('/:id', deleteTodo);

export default todoRouter;
