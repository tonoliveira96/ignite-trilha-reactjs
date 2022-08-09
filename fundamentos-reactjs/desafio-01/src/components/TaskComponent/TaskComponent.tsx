import { Trash } from "phosphor-react"
import style from './TaskComponent.module.css';

interface TaskProps {
  completed: boolean;
  description: string;
}

export function TaskComponent({description, completed}: TaskProps){
  return(
    <div className={style.containerComponent} >
      <input type="checkbox" checked={completed}/>
      <span className={ completed ? style.completed : '' }>{description}</span>
      <button>
        <Trash size={24}/>
      </button>
    </div>
  )
}