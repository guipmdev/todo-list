import styles from "./Task.module.css";

import { useState } from "react";

import { Trash } from "@phosphor-icons/react";

import { TaskType } from "../App";

interface TaskProps {
  task: TaskType;
  onUpdateTaskStatus: (taskId: number, newStatus: boolean) => void;
  onDeleteTask: (taskId: number) => void;
}

export function Task({
  task: { id, content, completed },
  onUpdateTaskStatus,
  onDeleteTask,
}: TaskProps) {
  const [taskStatus, setTaskStatus] = useState(completed);

  function handleTaskStatusChange() {
    const newStatus = !taskStatus;

    setTaskStatus(newStatus);
    onUpdateTaskStatus(id, newStatus);
  }

  function handleDeleteTask() {
    onDeleteTask(id);
  }

  return (
    <li
      className={[styles.task, taskStatus && styles.checkedTask]
        .filter(className => !!className)
        .join(" ")}
    >
      <label className={styles.checkboxWrapper}>
        <input
          type="checkbox"
          checked={taskStatus}
          onChange={handleTaskStatusChange}
        />
        <span className={styles.checkmark}></span>
      </label>

      <p>{content}</p>

      <button className={styles.deleteButton} onClick={handleDeleteTask}>
        <Trash size={15} />
      </button>
    </li>
  );
}
