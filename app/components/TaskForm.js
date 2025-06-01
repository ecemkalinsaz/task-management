"use client";
import { useState } from "react";

export default function TaskForm({ people, onTaskCreate }) {
  const [task, setTask] = useState({
    title: "",
    description: "",
    assignedTo: "",
    dueDate: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onTaskCreate({
      ...task,
      id: Date.now().toString(),
      status: "NOT_STARTED",
    });
    setTask({ title: "", description: "", assignedTo: "", dueDate: "" });
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Create New Task</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <label className="block text-sm font-semibold text-gray-700">
            Title
          </label>
          <input
            type="text"
            value={task.title}
            onChange={(e) => setTask({ ...task, title: e.target.value })}
            className="w-full px-4 py-3 rounded-lg border border-gray-200 
                     focus:ring-2 focus:ring-primary/20 focus:border-primary 
                     transition-all duration-200 bg-gray-50 hover:bg-gray-100/50"
            placeholder="Enter task title"
            required
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-semibold text-gray-700">
            Description
          </label>
          <textarea
            value={task.description}
            onChange={(e) => setTask({ ...task, description: e.target.value })}
            className="w-full px-4 py-3 rounded-lg border border-gray-200 
                     focus:ring-2 focus:ring-primary/20 focus:border-primary 
                     transition-all duration-200 bg-gray-50 hover:bg-gray-100/50"
            rows="4"
            placeholder="Enter task description"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-semibold text-gray-700">
            Assign to
          </label>
          <div className="relative">
            <select
              value={task.assignedTo}
              onChange={(e) => setTask({ ...task, assignedTo: e.target.value })}
              className="w-full px-4 py-3 rounded-lg border border-gray-200 
                       focus:ring-2 focus:ring-primary/20 focus:border-primary 
                       transition-all duration-200 bg-gray-50 hover:bg-gray-100/50
                       appearance-none cursor-pointer"
              required
            >
              <option value="">Select team member</option>
              {people.map((person) => (
                <option key={person.id} value={person.id}>
                  {person.name}
                </option>
              ))}
            </select>
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-semibold text-gray-700">
            Due Date
          </label>
          <input
            type="date"
            value={task.dueDate}
            onChange={(e) => setTask({ ...task, dueDate: e.target.value })}
            className="w-full px-4 py-3 rounded-lg border border-gray-200 
                     focus:ring-2 focus:ring-primary/20 focus:border-primary 
                     transition-all duration-200 bg-gray-50 hover:bg-gray-100/50"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-[rgb(1,115,234)] text-white py-3 px-6 rounded-lg
                   hover:bg-[rgb(1,115,234)]/90 active:scale-[0.98] 
                   transition-all duration-200 font-semibold text-sm
                   shadow-lg shadow-primary/25 mt-4"
        >
          Create Task
        </button>
      </form>
    </div>
  );
}
