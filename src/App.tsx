import "./global.css";

import styles from "./App.module.css";

import { Header } from "./components/Header";
import { TaskForm } from "./components/TaskForm";
import { EmptyTaskList } from "./components/EmptyTaskList";
import { Task } from "./components/Task";

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <TaskForm />

        <main>
          <header>
            <div className={styles.createdTasksCounter}>
              Tarefas criadas<span className={styles.pillCounter}>5</span>
            </div>
            <div className={styles.finishedTasksCounter}>
              Concluídas<span className={styles.pillCounter}>2 de 5</span>
            </div>
          </header>

          <div className={styles.taskList}>
            <EmptyTaskList />

            <ul>
              <Task />
            </ul>
          </div>
        </main>
      </div>
    </div>
  );
}
