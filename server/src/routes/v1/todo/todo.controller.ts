import { Request, Response } from 'express';

type typeTodo = {
	id: number;
	todo: string;
	complete: boolean;
};

const todo: typeTodo[] = [
	{
		id: 0,
		todo: 'Learn TypeScript',
		complete: false,
	},
	{
		id: 1,
		todo: 'Learn Node',
		complete: true,
	},
];

export const getAllTodo = (_, res: Response) => {
	res.status(200).json(todo);
};

export const createTodo = (req: Request, res: Response) => {
	const newTodo = req.body;

	todo.push(newTodo);

	res.status(201).json(todo);
};

export const updateTodo = (req: Request, res: Response) => {
	const id = req.params.id;
	const updateTodo = req.body;

	const findTodo = todo.find((todo) => todo.id === +id);
	if (!!findTodo) {
		const todoIndex = todo.findIndex((todo) => todo.id === +id);

		todo[todoIndex] = updateTodo;

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

	const findTodo = todo.find((todo) => todo.id === id);

	if (!!findTodo) {
		const todoIndex = todo.findIndex((todo) => todo.id === id);

		todo.splice(todoIndex, 1);

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
