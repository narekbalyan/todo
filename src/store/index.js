import { configureStore } from '@reduxjs/toolkit';
import todoSlice from './todo/reducers';

export const store = configureStore({
	reducer: todoSlice.reducer,
});
