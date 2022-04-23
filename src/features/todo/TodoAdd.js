import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToDo } from "./action";

function TodoAdd() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  return (
    <div>
      <input
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <button
        onClick={() => {
          dispatch(addToDo(text));
          setText("");
        }}
      >
        Add
      </button>
    </div>
  );
}

export default TodoAdd;
