import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import todoSlice from '../../store/todo/reducers';

function AddTodo() {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const save = (description) => {
		dispatch(todoSlice.actions.addTodo(description));
		navigate('/');
	};

	return (
		<form className='form-group' onSubmit={handleSubmit(save)}>
			<div>
				<label htmlFor=''>Description</label>
				<input
					type='text'
					{...register('description', { required: true })}
					className='form-control'
				/>
				{errors.description && (
					<p style={{ color: 'red' }}>Description field required</p>
				)}
			</div>

			<button className='btn btn-danger'>Save</button>
		</form>
	);
}

export default AddTodo;
