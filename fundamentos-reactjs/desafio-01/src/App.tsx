import { useState } from 'react';
import { Header } from './components/Header/Header';
import { InputTodo } from './components/Input/Input';

import './global.css';
import style from './App.module.css';
import { ButtonAdd } from './components/ButtonAdd/ButtonAdd';
import { TaskComponent } from './components/TaskComponent/TaskComponent';

function App() {
  return (
    <>
      <Header />
      <div className={ style.app }>
        <div className={ style.containerInput }>
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
          <div className={ style.tasksContainer }>
            <TaskComponent
              completed={true}
              description="Acima de tudo, é fundamental ressaltar que a expansão dos mercados mundiais nos obriga à análise do sistema de"
            />

            <TaskComponent
              completed={false}
              description="Acima de tudo, é fundamental ressaltar que a expansão dos mercados mundiais nos obriga à análise do sistema de"
            />
          </div>
        </div>
      </div>
    </>

  );
}

export default App;
