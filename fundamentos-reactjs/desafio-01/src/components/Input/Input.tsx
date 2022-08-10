
import React from 'react';
import style from "./Input.module.css";

interface InputTodoProps {
  setTask: React.Dispatch<React.SetStateAction<string>>;
}

export function InputTodo({ setTask }: InputTodoProps) {
  return (
    <input
      type="text"
      placeholder='Adicione uma nova tarefa'
      className={ style.inputTask }
      onChange={ (e) => setTask(e.target.value) }

    />
  );
}