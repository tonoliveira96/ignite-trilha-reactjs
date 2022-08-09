import { Trash } from "phosphor-react"
import { TaskProps } from '../../App';
import style from './NoTaskComponent.module.css';


export function NoTaskComponent({description, completed}: TaskProps){
  return(
    <div className={style.containerComponent} >
      
    </div>
  )
}