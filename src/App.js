import "./App.css";
import AppContainer from "./UI/AppContainer";
import ToDoList from "./components/ToDoList";
import NewToDo from "./components/NewToDo";
import { useState, useEffect } from "react";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks)); // Parse and set the saved tasks
    }
  }, []);

  const saveToLocalStorage = (tasks) => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };

  const saveTaskHandler = (userInput) => {
    setTasks((prevTasks) => {
      const updatedTasks = [...prevTasks, userInput];
      saveToLocalStorage(updatedTasks); // Save tasks to local storage
      return updatedTasks;
    });
  };

  const deleteTaskHandler = (key) => {
    const taskToDelete = tasks.findIndex((task) => task.key === key);

    if (taskToDelete !== -1) {
      const updatedTasks = [...tasks];
      updatedTasks.splice(taskToDelete, 1);
      setTasks(updatedTasks);
      saveToLocalStorage(updatedTasks);
    }
  };

  const checkboxChangeHandler = (taskId, isChecked) => {
    const updatedTasks = tasks.map((task) => {
      if (task.key === taskId) {
        return { ...task, isChecked };
      }
      return task;
    });
    setTasks(updatedTasks);
    saveToLocalStorage(updatedTasks); // Update and save tasks to local storage
  };

  return (
    <AppContainer>
      <NewToDo onSave={saveTaskHandler} />
      <ToDoList
        listItems={tasks}
        onDelete={deleteTaskHandler}
        onCheck={checkboxChangeHandler}
      />
    </AppContainer>
  );
}

export default App;
