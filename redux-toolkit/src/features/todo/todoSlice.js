import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  todos: [{ id: nanoid(), text: 'Hello world' }], // Initialize with a sample todo
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(), // Generate a unique ID
        text: action.payload.text, // Get text from the payload
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addTodo, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;
