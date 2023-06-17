import styles from "./EmptyTaskList.module.css";

import clipboardIcon from "../assets/clipboard-icon.svg";

export function EmptyTaskList() {
  return (
    <div className={styles.emptyTaskList}>
      <img src={clipboardIcon} alt="ícone de prancheta" />

      <div className={styles.textInformation}>
        <p>
          <strong>Você ainda não tem tarefas cadastradas</strong>
        </p>
        <p>Crie tarefas e organize seus itens a fazer</p>
      </div>
    </div>
  );
}
