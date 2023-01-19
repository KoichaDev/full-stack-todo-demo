import { fetchTodos } from '../services/todoService';
import { useQuery } from '@tanstack/react-query';

export const useFetchTodos = () => {
	return useQuery({ queryKey: ['todos'], queryFn: fetchTodos });
};
