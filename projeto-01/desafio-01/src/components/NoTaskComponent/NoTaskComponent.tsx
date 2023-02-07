import style from './NoTaskComponent.module.css';

import image from '../../assets/Clipboard.png';

export function NoTaskComponent() {
  return (
    <div className={ style.containerComponent } >
      <img src={ image } alt="" />
      <span>Você ainda não tem tarefas cadastradas</span>
      <p>Crie tarefas e organize seus itens a fazer</p>
    </div>
  );
}