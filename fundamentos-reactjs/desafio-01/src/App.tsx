import { useState } from 'react';
import { Header } from './components/Header/Header';
import { InputTodo } from './components/Input/Input';

import './global.css';
import style from './App.module.css';
import { ButtonAdd } from './components/ButtonAdd/ButtonAdd';

function App() {
  return (
    <>
      <Header />
      <div className={ style.app }>
        <div className={ style.container }>
          <InputTodo />
          <ButtonAdd />
        </div>

        <div className={ style.tasks }>
          <header className={ style.taskHeader }>
            <div className={ style.created }>
              Tarefas criadas
              <span>0</span>
            </div>
            <div className={ style.done }>
              Concluídas
              <span>0</span>
            </div>
          </header>
        </div>
      </div>
    </>

  );
}

export default App;
