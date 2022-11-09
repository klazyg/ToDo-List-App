import React, { useState, useRef } from "react";
import styles from "./Button.module.scss";

function Button() {
  const [name, setName] = useState("");
  const [input, setInput] = useState("");

  const inputRef = useRef(null);
  const nameRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    setInput("");
    setName("");
  };

  return (
    <form onSubmit={handleSubmit} className={styles.taskForm}>
      <>
        <input
          type="name"
          placeholder="Your Name"
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
          className={styles.taskForm__name}
          ref={nameRef}
        />
        <input
          type="text"
          placeholder="Add a new task"
          value={input}
          onChange={(event) => {
            setInput(event.target.value);
          }}
          className={styles.taskForm__task}
          ref={inputRef}
        />
        <button onClick={handleSubmit} className={styles.taskForm__btn}>
          Add Task
        </button>
      </>
    </form>
  );
}

export default Button;
