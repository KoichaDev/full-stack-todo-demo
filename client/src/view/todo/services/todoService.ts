import { todosProps } from '../types/todo.types';
import api from '@/api/axiosInstance';

const BASE_URL = {
	fetchTodo: 'todo',
	createTodo: 'todo',
	updateCompletedTodo: (id: string) => `todo/${id}`,
};

export const fetchTodos = () => {
	return api.get(BASE_URL.fetchTodo);
};

export const createTodo = (payload: todosProps) => {
	return api.post(BASE_URL.createTodo, payload);
};

export const updateCompletedTodo = (payload: todosProps) => {
	const { id, completed } = payload;
	const todoId = id.toString();

	return api.put(BASE_URL.updateCompletedTodo(todoId), {
		completed,
	});
};
