import styles from "./TaskForm.module.css";

import { useState, FormEvent, ChangeEvent, InvalidEvent } from "react";

import { PlusCircle } from "@phosphor-icons/react";

interface TaskFormProps {
  onCreateNewTask: (newTaskContent: string) => void;
}

export function TaskForm({ onCreateNewTask }: TaskFormProps) {
  const [newTaskContent, setNewTaskContent] = useState("");

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();

    onCreateNewTask(newTaskContent);

    setNewTaskContent("");
  }

  function handleNewTaskContentChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity("");

    setNewTaskContent(event.target.value);
  }

  function handleTaskContentInvalid(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity("Esse campo é necessário!");
  }

  return (
    <form onSubmit={handleCreateNewTask} className={styles.taskForm}>
      <input
        type="text"
        placeholder="Adicione uma nova tarefa"
        value={newTaskContent}
        onChange={handleNewTaskContentChange}
        onInvalid={handleTaskContentInvalid}
        required
      />

      <button type="submit">
        Criar <PlusCircle size={17} />
      </button>
    </form>
  );
}
