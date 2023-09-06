import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

export interface Todo {
  id: string;
  title: string;
  todo: string;
  completed:boolean;
}

const initialTodos: Todo[] = [
  { id: nanoid(), title: 'Task 1', todo: 'some task' ,completed:true},
  { id: nanoid(), title: 'Task 2', todo: 'another task' ,completed:false},
];

// const initialState: Todo[] = [];

const todoSlice = createSlice({
  name: 'todos',
  initialState:initialTodos,
  reducers: {
    addTodo: (state, action: PayloadAction<{ title: string; todo: string ,completed:boolean}>) => {
      const { title, todo } = action.payload;
      state.push({ id: nanoid(), title, todo ,completed:false});
    },
    removeTodo: (state, action: PayloadAction<string>) => {
      const idToRemove = action.payload;
      return state.filter((todo) => todo.id !== idToRemove);
    },
    completeTodo:(state,action:PayloadAction<{id:string,completed:boolean}>)=>{
      const {id,completed} = action.payload
      return state.map((todo) => 
      todo.id === id ? { ...todo, completed }:todo
      );
    },
    updateTodo:(state,action:PayloadAction<{id:string,title: string; todo: string}>)=>{
      const {id,title,todo} = action.payload
      return state.map((todos) => 
      todos.id === id ? { ...todos, title,todo }:todos
      );
    },
  },
});

export const { addTodo ,removeTodo,completeTodo,updateTodo} = todoSlice.actions;
export default todoSlice.reducer;
