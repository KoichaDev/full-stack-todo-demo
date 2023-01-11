import express, { Request, Response } from 'express';

const todoRouter = express.Router();

todoRouter.get('/', (req: Request, res: Response): void => {
	console.log(req);
	res.json({ message: 'Hello World!' });
});

export default todoRouter;
