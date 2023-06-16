import "./global.css";

import { PlusCircle, Trash } from "@phosphor-icons/react";

import toDoLogo from "./assets/todo-logo.svg";
import clipboardIcon from "./assets/clipboard-icon.svg";

export function App() {
  return (
    <div>
      <header>
        <img src={toDoLogo} alt="Logotipo do ToDo" />
      </header>

      <div>
        <form>
          <input type="text" placeholder="Adicione uma nova tarefa" />
          <button type="submit">
            Criar <PlusCircle />
          </button>
        </form>

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
