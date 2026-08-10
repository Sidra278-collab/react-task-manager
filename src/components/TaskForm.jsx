function TaskForm({
  task,
  setTask,
  priority,
  setPriority,
  dueDate,
  setDueDate,
  addTask,
}) {
  return (
    <div className="task-input">
      <input
        type="text"
        placeholder="Enter your task..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />

      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
      >
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>

      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />

      <button onClick={addTask}>Add</button>
    </div>
  );
}

export default TaskForm;