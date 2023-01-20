import { useFetchTodos } from './hooks/useTodos';
import { todosProps } from './types/todo.types';
import CreateTodo from './CreateTodo';
import EditTodo from './EditTodo';

const ViewTodo = () => {
	const { data, isLoading, isError } = useFetchTodos();

	if (isLoading) {
		return <p>Loading...</p>;
	}

	if (isError) {
		return <p>Something went wrong...</p>;
	}

	return (
		<>
			<CreateTodo />

			<h1>Todo List</h1>

			{data?.data.map((todo: todosProps) => {
				return (
					<EditTodo
						key={todo.id}
						{...todo}
					/>
				);
			})}
		</>
	);
};

export default ViewTodo;
