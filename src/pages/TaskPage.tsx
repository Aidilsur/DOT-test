import { useCallback, useMemo, useState } from "react";
import Style from "../style/taskpage.module.css";
import TaskList from "../components/Task/TaskList";
import Button from "../components/Button";

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

const TaskPage = () => {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, text: "tugas 1", completed: false },
    { id: 2, text: "tugas 2", completed: true },
  ]);
  const [newTask, setNewTask] = useState("");
  const [error, setError] = useState("");

  const addTask = () => {
    if (newTask.trim() === "") {
      setError("Harap masukkan tugas sebelum menambahkannya!");
      return;
    }
    setError("");
    const newTaskObj = { id: Date.now(), text: newTask, completed: false };
    setTasks([...tasks, newTaskObj]);
    setNewTask("");
  };

  const toggleTask = useCallback((id: number) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }, []);

  const deleteTask = useCallback((id: number) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  }, []);

  const completedTasks = useMemo(() => {
    return tasks.filter((task) => task.completed).length;
  }, [tasks]);

  return (
    <div className={Style.container}>
      <h1>Task Management</h1>
      <div className={Style.stats}>
        <p>Total Tasks: {tasks.length}</p>
        <p>Jumlah tugas selesai:: {completedTasks}</p>
      </div>
      <div className={Style.inputContainer}>
        <input
          type="text"
          value={newTask}
          onChange={(e) => {
            setNewTask(e.target.value);
            setError("");
          }}
          placeholder="Tambahkan tugas baru..."
          className={error ? Style.inputError : ""}
        />
        {error && <div className={Style.errorMessage}>{error}</div>}
        <Button variant="contained" color="primary" onClick={addTask}>
          Tambah
        </Button>
      </div>
      <TaskList tasks={tasks} toggleTask={toggleTask} deleteTask={deleteTask} />
    </div>
  );
};

export default TaskPage;
