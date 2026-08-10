function TaskItem({ task, deleteTask, toggleTask, editTask }) {
  return (
    <div className="task">
      <div>
        <span className={task.completed ? "completed" : ""}>
          {task.text}
        </span>

        <small className={`priority ${task.priority}`}>
          {task.priority}
        </small>

        {task.dueDate && (
          <small className="due-date">
            Due: {task.dueDate}
          </small>
        )}
      </div>

      <div className="task-buttons">
        <button onClick={() => toggleTask(task.id)}>
          {task.completed ? "Undo" : "Complete"}
        </button>

        <button onClick={() => editTask(task.id)}>
          Edit
        </button>

        <button onClick={() => deleteTask(task.id)}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default TaskItem;