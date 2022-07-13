import AddTodo from './pages/AddTodo/AddTodo';
import EditTodo from './pages/EditTodo/EditTodo';
import Todos from './pages/Todos/Todos';

export const routes = [
	{ path: '/', Component: Todos },
	{ path: '/add', Component: AddTodo },
	{ path: '/edit/:id', Component: EditTodo },
];
