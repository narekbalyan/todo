import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import todoSlice, { generateDescription } from '../../store/todo/reducers';
import { useForm } from 'react-hook-form';

function EditTodo() {
	const { generatedDescs } = useSelector((state) => state);
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { id } = useParams();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	async function genDesc() {
		dispatch(generateDescription());
	}

	function save(description) {
		dispatch(todoSlice.actions.editTodo({ ...description, id: id }));
		navigate('/');
	}

	return (
		<>
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
			<button className='btn btn-danger generateDesc' onClick={genDesc}>
				Generate description
			</button>
			{generatedDescs.status === 'loading' ? (
				<p>Loading</p>
			) : (
				generatedDescs.descs.map((desc, i) => {
					return <p key={i}>{desc}</p>;
				})
			)}
		</>
	);
}

export default EditTodo;
