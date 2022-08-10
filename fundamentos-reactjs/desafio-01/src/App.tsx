import { useEffect, useState } from 'react';
import { Header } from './components/Header/Header';
import { InputTodo } from './components/Input/Input';
import { v4 as uuidv4 } from 'uuid';

import './global.css';
import style from './App.module.css';
import { ButtonAdd } from './components/ButtonAdd/ButtonAdd';
import { TaskComponent } from './components/TaskComponent/TaskComponent';

export interface TaskProps {
  id: string;
  completed: boolean;
  description: string;
}

function App() {

  const [tasksList, setTasksList] = useState<TaskProps[]>([]);

  const [task, setTask] = useState('');

  function handleCreate() {
    const newTask = {
      id: uuidv4(),
      completed: false,
      description: task
    };
    setTasksList([...tasksList, newTask]);
    localStorage.setItem("@viteTodoList", JSON.stringify([...tasksList, task]));
  }

  function deleteTask(id: string) {
    console.log(id);
    const newTaskList = tasksList.filter(item => item.id !== id);
    setTasksList(newTaskList);
    localStorage.setItem("@viteTodoList", JSON.stringify(newTaskList));
  }

  useEffect(() => {
    const localTask = localStorage.getItem("@viteTodoList");

    if (localTask) {
      setTasksList(JSON.parse(localTask));
    }
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
              <span>{ tasksList.length }</span>
            </div>
            <div className={ style.done }>
              Concluídas
              <span>0</span>
            </div>
          </header>
          <div className={ style.tasksContainer }>
            { tasksList.map((data) => (
              <TaskComponent
                key={ data.id }
                id={ data.id }
                completed={ data.completed }
                description={ data.description }
                deleteTask={ deleteTask }
              />
            )) }

          </div>
        </div>
      </div>
    </>

  );
}

export default App;
