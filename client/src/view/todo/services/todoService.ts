import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

import api from '@/api/axiosInstance';

export const getTodos = () => {
	const getTodos = () => api.get('todo');

	return useQuery({ queryKey: ['todos'], queryFn: getTodos });
};
