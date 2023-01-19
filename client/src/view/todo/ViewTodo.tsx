import { useFetchTodos } from './hooks/useTodos';
import EditTodo from './EditTodo';
import DisplayTodos from './render-props/DisplayTodos';

type TodoType = {
	id: number;
	todo: string;
	completed: boolean;
};

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
			<EditTodo />

			<h1>Todo List</h1>

			{data?.data.map((todo: TodoType) => {
				return (
					<DisplayTodos
						key={todo.id}
						{...todo}
					/>
				);
			})}
		</>
	);
};

export default ViewTodo;
