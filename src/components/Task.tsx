import styles from "./Task.module.css";

import { Trash } from "@phosphor-icons/react";

export function Task() {
  return (
    <li className={styles.task}>
      <label className={styles.checkboxWrapper}>
        <input type="checkbox" />
        <span className={styles.checkmark}></span>
      </label>

      <p>
        Integer urna interdum massa libero auctor neque turpis turpis semper.
        Duis vel sed fames integer.
      </p>

      <button className={styles.deleteButton}>
        <Trash size={15} />
      </button>
    </li>
  );
}
