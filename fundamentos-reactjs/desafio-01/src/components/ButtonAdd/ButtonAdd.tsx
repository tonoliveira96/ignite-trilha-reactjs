import { PlusCircle } from 'phosphor-react';
import { ButtonHTMLAttributes } from 'react';
import style from './ButtonAdd.module.css';

interface ButtonsAddProps {
  onClick: () => void;
}

export function ButtonAdd({ onClick, ...rest }: ButtonsAddProps) {
  return (
    <button className={ style.addBtn } onClick={ onClick } { ...rest }>
      Criar
      <PlusCircle size={ 20 } />
    </button>
  );
}