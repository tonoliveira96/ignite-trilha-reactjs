import { Trash } from "phosphor-react"
import { TaskProps } from '../../App';
import style from './TaskComponent.module.css';


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