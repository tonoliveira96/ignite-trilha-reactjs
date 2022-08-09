import { Plus } from 'phosphor-react';
import style from './ButtonAdd.module.css';

export function ButtonAdd(){
  return (
    <button className={style.addBtn}>
      Criar
      <Plus size={16}/>
    </button>
  )
}