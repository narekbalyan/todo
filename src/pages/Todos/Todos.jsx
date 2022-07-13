import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import counterSlice from '../../store/todo/reducers';

function Todos() {
	const navigate = useNavigate();
	const { todos } = useSelector((state) => state);
	const dispatch = useDispatch();
	function editStatus(id) {
		dispatch(counterSlice.actions.changeStatus({ id }));
	}

	function onDelete(id) {
		dispatch(counterSlice.actions.deleteTodo({ id }));
	}

	return (
		<>
			{todos.length ? (
				<table className='table table-info'>
					<thead>
						<tr>
							<th>#</th>
							<th>Description</th>
							<th>Edit</th>
							<th>Delete</th>
							<th>Status</th>
						</tr>
					</thead>
					<tbody>
						{todos.map((todo, todoIndex) => {
							return (
								<tr key={todo.id}>
									<td>{todoIndex + 1}</td>
									<td>{todo.description}</td>
									<td>
										<button onClick={() => navigate(`/edit/${todo.id}`)}>
											Edit
										</button>
									</td>
									<td>
										<button onClick={() => onDelete(todo.id)}>Delete</button>
									</td>
									<td>
										<input
											type='checkbox'
											onClick={() => editStatus(todo.id)}
										/>
									</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			) : null}
			<button className='btn btn-info' onClick={() => navigate('/add')}>
				Create todo
			</button>
		</>
	);
}

export default Todos;
