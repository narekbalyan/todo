import { v4 as uuidv4 } from 'uuid';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { todoState } from './state';
import { generateDesc } from '../../helpers/generateDesc';

export const generateDescription = createAsyncThunk(
	'generateDesc',
	async () => {
		const res = await generateDesc();
		return res;
	}
);

const todoSlice = createSlice({
	name: 'todo',
	initialState: todoState,
	reducers: {
		addTodo: ({ todos }, { payload }) => {
			todos.push({ ...payload, id: uuidv4(), completed: false });
		},
		deleteTodo: (state, { payload }) => {
			const todos = state.todos.filter((todo) => todo.id !== payload.id);

			state.todos = todos;
		},
		changeStatus: (state, { payload }) => {
			state.todos = state.todos.map((e) => {
				if (e.id === payload.id) {
					return { ...e, completed: !e.completed };
				}
				return e;
			});
		},
		editTodo: (state, { payload }) => {
			state.todos = state.todos.map((e) => {
				if (e.id === payload.id) {
					return { ...e, description: payload.description };
				}
				return e;
			});
		},
	},
	extraReducers: (builder) => {
		builder.addCase(generateDescription.fulfilled, (state, action) => {
			state.generatedDescs.status = 'success';
			state.generatedDescs.descs.push(action.payload);
		});
		builder.addCase(generateDescription.pending, (state, action) => {
			state.generatedDescs.status = 'loading';
		});
	},
});

export default todoSlice;
