import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

interface Todo {
  id: string;
  title: string;
  todo: string;
}

const initialTodos: Todo[] = [
  { id: nanoid(), title: 'Task 1', todo: 'some task' },
  { id: nanoid(), title: 'Task 2', todo: 'another task' },
];

// const initialState: Todo[] = [];

const todoSlice = createSlice({
  name: 'todos',
  initialState:initialTodos,
  reducers: {
    addTodo: (state, action: PayloadAction<{ title: string; todo: string }>) => {
      const { title, todo } = action.payload;
      state.push({ id: nanoid(), title, todo });
    },
  },
});

export const { addTodo } = todoSlice.actions;
export default todoSlice.reducer;
