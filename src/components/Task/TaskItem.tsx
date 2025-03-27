import styles from "../../style/taskpage.module.css";
import Button from "../Button";

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

interface TaskItemProps {
  task: Task;
  toggleTask: (id: number) => void;
  deleteTask: (id: number) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({
  task,
  toggleTask,
  deleteTask,
}) => {
  return (
    <div className={styles.taskItem}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleTask(task.id)}
      />
      <span className={task.completed ? styles.completed : ""}>
        {task.text}
      </span>
      <Button
        variant="outlined"
        color="error"
        onClick={() => deleteTask(task.id)}
      >
        Hapus
      </Button>
    </div>
  );
};

export default TaskItem;
