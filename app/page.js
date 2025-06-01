"use client";
import { useState, useEffect } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import TaskForm from "./components/TaskForm";
import PersonForm from "./components/PersonForm";
import TaskList from "./components/TaskList";

export default function Home() {
  const [tasks, setTasks] = useState([]);
  const [people, setPeople] = useState([]);

  // Load data from localStorage on initial render
  useEffect(() => {
    const savedPeople = localStorage.getItem("people");
    const savedTasks = localStorage.getItem("tasks");

    if (savedPeople) setPeople(JSON.parse(savedPeople));
    if (savedTasks) setTasks(JSON.parse(savedTasks));
  }, []);

  // Save tasks to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Save people to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("people", JSON.stringify(people));
  }, [people]);

  const handleStatusChange = (taskId, newStatus) => {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === taskId ? { ...task, status: newStatus } : task
      )
    );
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="min-h-screen bg-[rgb(242,248,255)] p-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-800 mb-8">
            Task Management
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Left Panel */}
            <div className="space-y-6">
              <TaskForm
                people={people}
                onTaskCreate={(task) => setTasks((prev) => [...prev, task])}
              />
              <PersonForm
                onPersonAdd={(person) => setPeople((prev) => [...prev, person])}
              />
            </div>

            {/* Right Panel - Task Lists */}
            <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-6">
              <TaskList
                title="To Do"
                tasks={tasks.filter((task) => task.status === "NOT_STARTED")}
                people={people}
                onStatusChange={handleStatusChange}
              />
              <TaskList
                title="In Progress"
                tasks={tasks.filter((task) => task.status === "IN_PROGRESS")}
                people={people}
                onStatusChange={handleStatusChange}
              />
              <TaskList
                title="Completed"
                tasks={tasks.filter((task) => task.status === "COMPLETED")}
                people={people}
                onStatusChange={handleStatusChange}
              />
            </div>
          </div>
        </div>
      </div>
    </DndProvider>
  );
}
