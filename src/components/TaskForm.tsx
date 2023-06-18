import styles from "./TaskForm.module.css";

import { PlusCircle } from "@phosphor-icons/react";

export function TaskForm() {
  return (
    <form className={styles.taskForm}>
      <input type="text" placeholder="Adicione uma nova tarefa" />

      <button type="submit">
        Criar <PlusCircle size={17} />
      </button>
    </form>
  );
}
