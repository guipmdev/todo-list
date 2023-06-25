import "./global.css";
import styles from "./App.module.css";

import { useEffect, useState } from "react";

import { Header } from "./components/Header";
import { TaskForm } from "./components/TaskForm";
import { EmptyTaskList } from "./components/EmptyTaskList";
import { Task } from "./components/Task";

export interface TaskType {
  id: number;
  completed: boolean;
  content: string;
}

export function App() {
  const [tasks, setTasks] = useState<TaskType[]>([
    {
      id: 1,
      completed: false,
      content:
        "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
    },
    {
      id: 2,
      completed: true,
      content:
        "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
    },
  ]);

  const [completedTasksNumber, setCompleteTasksNumber] = useState(0);

  useEffect(() => {
    setCompleteTasksNumber(
      tasks.reduce((counter, task) => {
        if (task.completed) {
          return counter + 1;
        } else {
          return counter;
        }
      }, 0)
    );
  }, [tasks]);

  function createTask(newTaskContent: string) {
    const newTask = {
      id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
      completed: false,
      content: newTaskContent,
    };

    setTasks(state => [...state, newTask]);
  }

  function updateTaskStatus(taskId: number, newStatus: boolean) {
    setTasks(
      tasks.map(task => {
        if (task.id === taskId) {
          return { ...task, completed: newStatus };
        } else {
          return task;
        }
      })
    );
  }

  function deleteTask(taskId: number) {
    setTasks(
      tasks.filter(task => {
        if (task.id !== taskId) {
          return task;
        }
      })
    );
  }

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
            <div className={styles.completedTasksCounter}>
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
                {tasks.map(task => {
                  return (
                    <Task
                      key={task.id}
                      task={task}
                      onUpdateTaskStatus={updateTaskStatus}
                      onDeleteTask={deleteTask}
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
