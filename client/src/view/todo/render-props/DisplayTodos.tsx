import { useId, useState } from 'react';

type displayTodosProps = {
	id: number;
	todo: string;
	completed: boolean;
};

const DisplayTodos = ({ todo, completed }: displayTodosProps) => {
	const [todoCompleted, setTodoCompleted] = useState(completed);
	const checkboxId = useId();

	const completedValue = todoCompleted ? 'true' : 'false';

	const toggleCompletedHandler = () => {
		setTodoCompleted((prevTodo) => !prevTodo);
	};

	return (
		<ul>
			<li>{todo}</li>
			<li>
				<label htmlFor={checkboxId}>{completedValue}</label>
				<input
					type='checkbox'
					value={completedValue}
					onChange={toggleCompletedHandler}
					id={checkboxId}
				/>
			</li>
		</ul>
	);
};

export default DisplayTodos;
