import styles from "./Task.module.css";

import { Trash } from "@phosphor-icons/react";

interface TaskProps {
  text: string;
  completed: boolean;
}

export function Task({ text, completed }: TaskProps) {
  return (
    <li
      className={[styles.task, completed && styles.checkedTask]
        .filter((className) => !!className)
        .join(" ")}
    >
      <label className={styles.checkboxWrapper}>
        <input type="checkbox" checked={completed} />
        <span className={styles.checkmark}></span>
      </label>

      <p>{text}</p>

      <button className={styles.deleteButton}>
        <Trash size={15} />
      </button>
    </li>
  );
}
