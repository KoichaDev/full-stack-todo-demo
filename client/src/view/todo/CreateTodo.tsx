import React, { useId, useState } from 'react';
import { useMutationCreateTodo } from './hooks/useTodos';

const CreateTodo = () => {
	const labelId = useId();

	const mutation = useMutationCreateTodo();
	const { isSuccess } = mutation;

	const [enteredTodo, setEnteredTodo] = useState('');

	const onSubmitHandler = (e: React.FormEvent) => {
		e.preventDefault();

		mutation.mutate({
			text: enteredTodo,
			completed: true,
		});

		setEnteredTodo('');
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

export default CreateTodo;
