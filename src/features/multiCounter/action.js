import { ADD_COUNTER, INCREMENT, DECREMENT } from "./reducer";

export const addCounter = () => ({ type: ADD_COUNTER });
export const increment = (index) => ({
  type: INCREMENT,
  payload: { index: index },
});
export const decrement = (index) => ({
  type: DECREMENT,
  payload: { index: index },
});
