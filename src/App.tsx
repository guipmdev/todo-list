import "./global.css";

import styles from "./App.module.css";

import { Header } from "./components/Header";
import { TaskForm } from "./components/TaskForm";
import { EmptyTaskList } from "./components/EmptyTaskList";
import { Task } from "./components/Task";
import { useState } from "react";

interface Task {
  id: number;
  completed: boolean;
  text: string;
}

export function App() {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: 1,
      completed: false,
      text: "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
    },
    {
      id: 2,
      completed: true,
      text: "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
    },
  ]);

  function createTask(newTaskText: string) {
    const newTask = {
      id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
      completed: false,
      text: newTaskText,
    };

    setTasks([...tasks, newTask]);
  }

  const completedTasksNumber = tasks.reduce((counter, task) => {
    if (task.completed) {
      return counter + 1;
    } else {
      return counter;
    }
  }, 0);

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <TaskForm onCreateNewTask={createTask} />

        <main>
          <header>
            <div className={styles.createdTasksCounter}>
              Tarefas criadas
              <span className={styles.pillCounter}>{tasks.length}</span>
            </div>
            <div className={styles.finishedTasksCounter}>
              Concluídas
              <span className={styles.pillCounter}>
                {!!tasks.length && completedTasksNumber + " de "}
                {tasks.length}
              </span>
            </div>
          </header>

          <div className={styles.taskList}>
            {!tasks.length ? (
              <EmptyTaskList />
            ) : (
              <ul>
                {tasks.map((task) => {
                  return (
                    <Task
                      key={task.id}
                      text={task.text}
                      completed={task.completed}
                    />
                  );
                })}
              </ul>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
