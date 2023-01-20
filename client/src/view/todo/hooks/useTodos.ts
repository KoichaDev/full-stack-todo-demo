import { fetchTodos, createTodo, updateCompletedTodo } from '../services/todoService';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

export const useFetchTodos = () => {
	return useQuery({ queryKey: ['todos'], queryFn: fetchTodos });
};

export const useMutationCreateTodo = () => {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: createTodo,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['todos'] });
		},
	});
};

export const useUpdateTodos = () => {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: updateCompletedTodo,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['todos'] });
		},
	});
};
