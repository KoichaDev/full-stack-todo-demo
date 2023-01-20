import { Request, Response } from 'express';

type typeTodo = {
	id: number;
	text: string;
	completed: boolean;
};

let latestTodo = 2;

const todos: typeTodo[] = [
	{
		id: 0,
		text: 'Learn TypeScript',
		completed: false,
	},
	{
		id: 1,
		text: 'Learn Node',
		completed: true,
	},
];

export const getAllTodo = (_, res: Response) => {
	res.status(200).json(todos);
};

export const createTodo = (req: Request, res: Response) => {
	const newTodo = req.body;
	const { id, text, completed } = newTodo;

	if (text === '') {
		return res.status(400).json({
			error: 'Missing entered todo',
		});
	}

	if (!completed) {
		return res.status(400).json({
			error: 'missing todo is completed or not',
		});
	}

	latestTodo = latestTodo + 1;

	todos.push({
		id: latestTodo,
		text,
		completed,
	});

	res.status(201).json(text);
};

export const updateTodo = (req: Request, res: Response) => {
	const id = req.params.id;
	const updateTodo = req.body;

	const findTodo = todos.find((todo) => todo.id === +id);
	if (!!findTodo) {
		const todoIndex = todos.findIndex((todo) => todo.id === +id);

		todos[todoIndex] = updateTodo;

		res.status(200).json({
			status: 'success',
			message: 'Todo updated',
		});
	} else {
		res.status(404).json({
			error: 'Todo not found',
		});
	}
};

export const deleteTodo = (req: Request, res: Response) => {
	const id: number = +req.params.id;

	const findTodo = todos.find((todo) => todo.id === id);

	if (!!findTodo) {
		const todoIndex = todos.findIndex((todo) => todo.id === id);

		todos.splice(todoIndex, 1);

		res.status(200).json({
			status: 'success',
			message: 'Todo deleted',
		});
	} else {
		res.status(404).json({
			error: 'Todo not found',
		});
	}
};
