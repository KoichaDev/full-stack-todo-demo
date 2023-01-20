import React, { useId, useState } from 'react';
import { useMutationCreateTodo } from './hooks/useTodos';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type mutationData = {
	error: any;
	isError: boolean;
	isSuccess: boolean;
	mutate: Function;
};

const CreateTodo = () => {
	const labelId = useId();

	const mutation: mutationData = useMutationCreateTodo();
	const { isSuccess, isError, error } = mutation;

	console.log(isSuccess);

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

	if (isError) {
		toast.error(error.message, {
			position: 'top-center',
		});
	}

	if (isSuccess) {
		toast('success!', { position: 'top-center' });
	}

	return (
		<>
			<ToastContainer />

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
		</>
	);
};

export default CreateTodo;
