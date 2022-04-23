import { ADD_TODO, TOGGLE_TODO, SET_FILTER } from "./reducer";
let nextTodoId = 0;

export const addToDo = (text) => ({
  type: ADD_TODO,
  payload: {
    id: nextTodoId++,
    text,
  },
});

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  payload: { id },
});

export const setFilter = (filter) => ({
  type: SET_FILTER,
  payload: { filter },
});
