import { getTodos } from './services/todoService';

const ViewTodo = () => {
	const { data, isLoading, isError } = getTodos();

	return <div></div>;
};

export default ViewTodo;
