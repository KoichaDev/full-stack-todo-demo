import React, { useId, useState } from 'react';

const EditTodo = () => {
	const labelId = useId();

	const [enteredTodo, setEnteredTodo] = useState('');

	const onSubmitHandler = (e: React.FormEvent) => {
		e.preventDefault();
	};

	const enteredTodoHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		const enteredText = e.target.value;
		setEnteredTodo(enteredText);
	};

	return (
		<form onSubmit={onSubmitHandler}>
			<label htmlFor={`enter todo ${labelId}`}></label>

			<input
				type='text'
				id={`enter todo ${labelId}`}
				value={enteredTodo}
				onChange={enteredTodoHandler}
			/>

			<button>Submit</button>
		</form>
	);
};

export default EditTodo;
