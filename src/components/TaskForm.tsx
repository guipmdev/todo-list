import styles from "./TaskForm.module.css";

import { useState, FormEvent, ChangeEvent, InvalidEvent } from "react";

import { PlusCircle } from "@phosphor-icons/react";

interface TaskFormProps {
  onCreateNewTask: (newTaskText: string) => void;
}

export function TaskForm({ onCreateNewTask }: TaskFormProps) {
  const [newTaskText, setNewTaskText] = useState("");

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();

    onCreateNewTask(newTaskText);

    setNewTaskText("");
  }

  function handleNewTaskTextChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity("");

    setNewTaskText(event.target.value);
  }

  function handleTaskTextInvalid(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity("Esse campo é necessário!");
  }

  return (
    <form onSubmit={handleCreateNewTask} className={styles.taskForm}>
      <input
        type="text"
        placeholder="Adicione uma nova tarefa"
        value={newTaskText}
        onChange={handleNewTaskTextChange}
        onInvalid={handleTaskTextInvalid}
        required
      />

      <button type="submit">
        Criar <PlusCircle size={17} />
      </button>
    </form>
  );
}
