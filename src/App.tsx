import "./global.css";

import styles from "./App.module.css";

import { Trash } from "@phosphor-icons/react";

import { Header } from "./components/Header";
import { TaskForm } from "./components/TaskForm";
import { EmptyTaskList } from "./components/EmptyTaskList";

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
              <li>
                <input type="checkbox" />

                <p>
                  Integer urna interdum massa libero auctor neque turpis turpis
                  semper. Duis vel sed fames integer.
                </p>

                <button>
                  <Trash />
                </button>
              </li>
              <li>
                <input type="checkbox" />

                <p>
                  Integer urna interdum massa libero auctor neque turpis turpis
                  semper. Duis vel sed fames integer.
                </p>

                <button>
                  <Trash />
                </button>
              </li>
              <li>
                <input type="checkbox" />

                <p>
                  Integer urna interdum massa libero auctor neque turpis turpis
                  semper. Duis vel sed fames integer.
                </p>

                <button>
                  <Trash />
                </button>
              </li>
              <li>
                <input type="checkbox" />

                <p>
                  Integer urna interdum massa libero auctor neque turpis turpis
                  semper. Duis vel sed fames integer.
                </p>

                <button>
                  <Trash />
                </button>
              </li>
              <li>
                <input type="checkbox" />

                <p>
                  Integer urna interdum massa libero auctor neque turpis turpis
                  semper. Duis vel sed fames integer.
                </p>

                <button>
                  <Trash />
                </button>
              </li>
            </ul>
          </div>
        </main>
      </div>
    </div>
  );
}
