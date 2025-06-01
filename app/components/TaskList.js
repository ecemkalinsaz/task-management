"use client";
import { useDrop } from "react-dnd";
import TaskCard from "./TaskCard";

export default function TaskList({ title, tasks, onStatusChange, people }) {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "TASK",
    drop: (item) => {
      const newStatus = getStatus(title);
      onStatusChange(item.id, newStatus);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }));

  const getStatus = (title) => {
    switch (title) {
      case "To Do":
        return "NOT_STARTED";
      case "In Progress":
        return "IN_PROGRESS";
      case "Completed":
        return "COMPLETED";
      default:
        return "NOT_STARTED";
    }
  };

  const getHeaderColor = (title) => {
    switch (title) {
      case "To Do":
        return "bg-[rgb(160,160,160)]";
      case "In Progress":
        return "bg-[rgb(253,171,61)]";
      case "Completed":
        return "bg-[rgb(0,200,117)]";
      default:
        return "bg-gray-100";
    }
  };

  const getContentColor = (title) => {
    switch (title) {
      case "To Do":
        return "bg-[rgb(239,239,239)]";
      case "In Progress":
        return "bg-[rgb(255,237,207)]";
      case "Completed":
        return "bg-[rgb(201,236,221)]";
      default:
        return "bg-white";
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <div className={`${getHeaderColor(title)} px-6 py-4`}>
        <h2 className="text-xl font-semibold text-white">{title}</h2>
      </div>
      <div
        ref={drop}
        className={`p-6 ${getContentColor(title)} h-full
                    ${isOver ? "bg-opacity-70" : ""} transition-colors`}
      >
        <div className="space-y-4">
          {tasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              people={people}
              onStatusChange={onStatusChange}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
