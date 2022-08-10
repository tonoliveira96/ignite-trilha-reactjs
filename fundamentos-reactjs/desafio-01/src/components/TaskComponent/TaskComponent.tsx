import { Trash } from "phosphor-react";
import { useState } from 'react';
import { TaskProps } from '../../App';
import style from './TaskComponent.module.css';

interface TaskComponents extends TaskProps {
  deleteTask: (id: string) => void;
  completeTask: (id: string) => void;
}

export function TaskComponent({ id, description, completed, deleteTask, completeTask }: TaskComponents) {

  const [completedTask, setCompletedTask] = useState(false);

  function handleDelete() {
    deleteTask(id);
  }

  function handleComplete() {
    completeTask(id);
  }

  return (
    <div className={ style.containerComponent } >
      <input type="checkbox" checked={ completed } onChange={ handleComplete } />
      <span className={ completed ? style.completed : '' }>{ description }</span>
      <button onClick={ handleDelete }>
        <Trash size={ 24 } />
      </button>
    </div>
  );
}