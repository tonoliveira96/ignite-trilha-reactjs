import style from "./Input.module.css";

export function InputTodo() {
  return (
    <input type="text" placeholder='Adicione uma nova tarefa'  className={style.inputTask}/>

  );
}