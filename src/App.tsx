import "./global.css";

import styles from "./App.module.css";

import { Trash } from "@phosphor-icons/react";

import { Header } from "./components/Header";
import { TaskForm } from "./components/TaskForm";

import clipboardIcon from "./assets/clipboard-icon.svg";

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <TaskForm />

        <main>
          <header>
            <div>
              Tarefas criadas <span>5</span>
            </div>
            <div>
              Concluídas <span>2 de 5</span>
            </div>
          </header>

          <main>
            <div>
              <img src={clipboardIcon} alt="ícone de prancheta" />

              <div>
                <p>
                  <strong>Você ainda não tem tarefas cadastradas</strong>
                </p>
                <p>Crie tarefas e organize seus itens a fazer</p>
              </div>
            </div>
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
          </main>
        </main>
      </div>
    </div>
  );
}
