import { useId, useState } from 'react';
import { todosProps } from './types/todo.types';

const EditTodo = ({ text, completed }: todosProps) => {
	const [todoCompleted, setTodoCompleted] = useState(completed);
	const checkboxId = useId();

	const completedValue = todoCompleted ? 'true' : 'false';

	const toggleCompletedHandler = () => {
		setTodoCompleted((prevTodo) => !prevTodo);
	};

	return (
		<ul>
			<li>{text}</li>
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

export default EditTodo;
