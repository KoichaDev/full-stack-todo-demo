import { useMutation, useQueryClient } from '@tanstack/react-query';

import api from '@/api/axiosInstance';

export const fetchTodos = () => {
	return api.get('todo');
};

export const createTodo = (postTodo: any) => {
	const queryClient = useQueryClient();

	const mutation = useMutation({
		mutationFn: postTodo,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['todos'] });
		},
	});
};
