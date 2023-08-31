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
    removeTodo: (state, action: PayloadAction<string>) => {
      const idToRemove = action.payload;
      return state.filter((todo) => todo.id !== idToRemove);
    },
  },
});

export const { addTodo ,removeTodo} = todoSlice.actions;
export default todoSlice.reducer;
