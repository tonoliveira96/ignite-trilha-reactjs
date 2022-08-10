import { Trash } from "phosphor-react";
import { TaskProps } from '../../App';
import style from './TaskComponent.module.css';

interface TaskComponents extends TaskProps {
  deleteTask: (id: string) => void;
}

export function TaskComponent({ id, description, completed, deleteTask }: TaskComponents) {

  function handleDelete() {
    deleteTask(id);
  }

  return (
    <div className={ style.containerComponent } >
      <input type="checkbox" checked={ completed } />
      <span className={ completed ? style.completed : '' }>{ description }</span>
      <button onClick={ handleDelete }>
        <Trash size={ 24 } />
      </button>
    </div>
  );
}