
import React from 'react';
import { TaskProps } from '../../App';
import style from "./Input.module.css";

interface InputTodoProps {
  setTask: React.Dispatch<React.SetStateAction<TaskProps>>;
}

export function InputTodo({ setTask }: InputTodoProps) {
  return (
    <input
      type="text"
      placeholder='Adicione uma nova tarefa'
      className={ style.inputTask }
      onChange={ (e) => setTask({ completed: false, description: e.target.value }) }
    />
  );
}