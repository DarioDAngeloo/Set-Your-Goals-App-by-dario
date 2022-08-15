import "../stylesheets/Form.css";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Form = (props: any) => {
  const [input, setInput] = useState("");

  const change = (e: any) => {
    setInput(e.target.value);
  };

  const send = (e: any) => {
    e.preventDefault();

    const newTask = {
      id: uuidv4(),
      text: input,
      complete: false,
    };

    props.onSubmit(newTask);
  };

  return (
    <form className="task-form" onSubmit={send}>
      <label>
        <input
          type="text"
          className="task-input"
          placeholder="Add/write a note.."
          name="text"
          onChange={change}
        />
      </label>
      <button className="task-btn">Add task</button>
    </form>
  );
};

export default Form;
