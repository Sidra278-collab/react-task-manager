import { useEffect, useState } from "react";
import "./App.css";

import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import Filter from "./components/Filter";
import SearchBar from "./components/SearchBar";

function App() {
  const [task, setTask] = useState("");
  const [priority, setPriority] = useState("medium");
  const [dueDate, setDueDate] = useState("");

  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");

    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Add Task
  const addTask = () => {
    if (task.trim() === "") return;

    const newTask = {
      id: Date.now(),
      text: task,
      completed: false,
      priority: priority,
      dueDate: dueDate,
    };

    setTasks([...tasks, newTask]);
    setTask("");
  };

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Complete / Undo Task
  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  // Edit Task
  const editTask = (id) => {
    const newText = prompt("Edit your task:");

    if (newText && newText.trim() !== "") {
      setTasks(
        tasks.map((task) =>
          task.id === id
            ? { ...task, text: newText }
            : task
        )
      );
    }
  };

  // Filter Tasks
  const filteredTasks = tasks.filter((task) => {
    const matchesFilter =
      filter === "all" ||
      (filter === "completed" && task.completed) ||
      (filter === "pending" && !task.completed);

    const matchesSearch = task.text
      .toLowerCase()
      .includes(search.toLowerCase());

    return matchesFilter && matchesSearch;
  });

  return (
    <div className="app">
      <h1>Task Manager</h1>

      <TaskForm
        task={task}
        setTask={setTask}
        priority={priority}
        setPriority={setPriority}
        dueDate={dueDate}
        setDueDate={setDueDate}
        addTask={addTask}
      />

      <SearchBar
        search={search}
        setSearch={setSearch}
      />

      <Filter
        filter={filter}
        setFilter={setFilter}
      />

      <TaskList
        tasks={filteredTasks}
        deleteTask={deleteTask}
        toggleTask={toggleTask}
        editTask={editTask}
      />

      <div className="task-count">
        <p>Total Tasks: {tasks.length}</p>
        <p>
          Completed: {tasks.filter((task) => task.completed).length}
        </p>
        <p>
          Pending: {tasks.filter((task) => !task.completed).length}
        </p>
      </div>
    </div>
  );
}

export default App;