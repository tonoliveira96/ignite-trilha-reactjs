import { useEffect, useState } from 'react';
import { Header } from './components/Header/Header';
import { InputTodo } from './components/Input/Input';
import { v4 as uuidv4 } from 'uuid';

import './global.css';
import style from './App.module.css';
import { ButtonAdd } from './components/ButtonAdd/ButtonAdd';
import { TaskComponent } from './components/TaskComponent/TaskComponent';
import { NoTaskComponent } from './components/NoTaskComponent/NoTaskComponent';

export interface TaskProps {
  id: string;
  completed: boolean;
  description: string;
}

function App() {

  const [tasksList, setTasksList] = useState<TaskProps[]>([]);

  const [task, setTask] = useState('');
  const [taskCount, setTaskCount] = useState(0);

  function handleCreate() {
    const newTask = {
      id: uuidv4(),
      completed: false,
      description: task
    };
    setTasksList([...tasksList, newTask]);
    localStorage.setItem("@viteTodoList", JSON.stringify([...tasksList, task]));
    setTask('');
  }

  function deleteTask(id: string) {
    const newTaskList = tasksList.filter(item => item.id !== id);
    setTasksList(newTaskList);
    localStorage.setItem("@viteTodoList", JSON.stringify(newTaskList));
  }

  function completeTask(id: string) {
    const newTaskList = tasksList.map(item => {
      if (item.id === id) {
        item.completed = !item.completed;
        return item;
      }
      return item;
    });
    setTasksList(newTaskList);
    localStorage.setItem("@viteTodoList", JSON.stringify(newTaskList));
  }

  useEffect(() => {
    const localTask = localStorage.getItem("@viteTodoList");

    if (localTask) {
      setTasksList(JSON.parse(localTask));
    }
  }, []);

  useEffect(() => {
    let amount = tasksList.filter(item => item.completed === true);
    setTaskCount(amount.length);
  }, [tasksList]);

  const taskComponent = tasksList.length > 0 ? tasksList.map((data) => (
    <TaskComponent
      key={ data.id }
      id={ data.id }
      completed={ data.completed }
      description={ data.description }
      deleteTask={ deleteTask }
      completeTask={ completeTask }
    />
  )) : (<NoTaskComponent />);

  return (
    <>
      <Header />
      <div className={ style.app }>
        <div className={ style.containerInput }>
          <InputTodo setTask={ setTask } value={ task } />
          <ButtonAdd onClick={ handleCreate } disabled={ task.length < 3 } />
        </div>

        <div className={ style.tasks }>
          <header className={ style.taskHeader }>
            <div className={ style.created }>
              Tarefas criadas
              <span>{ tasksList.length }</span>
            </div>
            <div className={ style.done }>
              Concluídas
              <span>{ `${taskCount} de ${tasksList.length}` }</span>
            </div>
          </header>
          <div className={ style.tasksContainer }>
            { taskComponent }

          </div>
        </div>
      </div>
    </>

  );
}

export default App;
