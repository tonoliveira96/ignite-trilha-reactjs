import { useEffect, useState } from 'react';
import { Header } from './components/Header/Header';
import { InputTodo } from './components/Input/Input';

import './global.css';
import style from './App.module.css';
import { ButtonAdd } from './components/ButtonAdd/ButtonAdd';
import { TaskComponent } from './components/TaskComponent/TaskComponent';

export interface TaskProps {
  completed: boolean;
  description: string;
}

function App() {

  const [tasksList, setTasksList] = useState<TaskProps[]>([
    {
      completed: true,
      description: 'Tomar café'
    },
    {
      completed: true,
      description: 'Academia'
    },
    {
      completed: true,
      description: 'Trabalhar'
    },
    {
      completed: false,
      description: 'Almoçar'
    },
    {
      completed: true,
      description: 'Trabalhar'
    },
    {
      completed: false,
      description: 'Tomar banho'
    },
    {
      completed: false,
      description: 'Dormir'
    }
  ]);

  const [task, setTask] = useState<TaskProps>({} as TaskProps);

  function handleCreate() {
    setTasksList([...tasksList, task]);
  }

  useEffect(() => {

  }, []);

  return (
    <>
      <Header />
      <div className={ style.app }>
        <div className={ style.containerInput }>
          <InputTodo setTask={ setTask } />
          <ButtonAdd onClick={ handleCreate } />
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
            { tasksList.map((data, index) => (
              <TaskComponent
                key={ index.toString() }
                completed={ data.completed }
                description={ data.description }
              />
            )) }

          </div>
        </div>
      </div>
    </>

  );
}

export default App;
