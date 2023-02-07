
import React, { InputHTMLAttributes } from 'react';
import style from "./Input.module.css";

interface InputTodoProps extends InputHTMLAttributes<HTMLInputElement> {
  setTask: React.Dispatch<React.SetStateAction<string>>;
}

export function InputTodo({ setTask, ...rest }: InputTodoProps) {
  return (
    <input
      type="text"
      placeholder='Adicione uma nova tarefa'
      className={ style.inputTask }
      onChange={ (e) => setTask(e.target.value) }
      {...rest}
    />
  );
}