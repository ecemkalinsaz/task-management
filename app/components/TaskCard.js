"use client";
import { useDrag } from 'react-dnd';
import { formatDistanceToNow } from "date-fns";

export default function TaskCard({ task, onStatusChange, people }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'TASK',
    item: { id: task.id },
    collect: (monitor) => ({
      isDragging: monitor.isDragging()
    })
  }));

  const getDueStatus = () => {
    const today = new Date();
    const dueDate = new Date(task.dueDate);

    if (dueDate < today) return "overdue";
    if (dueDate.toDateString() === today.toDateString()) return "due today";
    return `due in: ${formatDistanceToNow(dueDate)}`;
  };

  // Assigned kişinin ismini bul
  const assignedPerson = people?.find(person => person.id === task.assignedTo)?.name || 'Unassigned';

  return (
    <div
      ref={drag}
      className={`bg-white rounded-xl p-6 shadow-md hover:shadow-lg 
                  transition-shadow duration-300 border border-gray-100
                  ${isDragging ? 'opacity-50' : 'opacity-100'}
                  cursor-move`}
    >
      {/* Title Area */}
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{task.title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed">{task.description}</p>
      </div>

      {/* Meta Information */}
      <div className="space-y-3 mb-4">
        <div className="flex items-center space-x-2">
          <span className="text-gray-500 text-sm">👤</span>
          <p className="text-sm text-gray-600">
            Assigned to: <span className="font-medium">{assignedPerson}</span>
          </p>
        </div>
        
        <div className="flex items-center space-x-2">
          <span className="text-gray-500 text-sm">⏰</span>
          <p className={`text-sm ${
            task.dueDate < new Date() 
              ? "text-red-500 font-medium" 
              : "text-gray-600"
          }`}>
            {getDueStatus()}
          </p>
        </div>
      </div>

      {/* Status Dropdown */}
      <div className="relative">
        <select
          value={task.status}
          onChange={(e) => onStatusChange(task.id, e.target.value)}
          className="w-full px-4 py-2 text-sm rounded-lg bg-gray-50 border border-gray-200 
                     text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary/20 
                     focus:border-primary transition-all cursor-pointer appearance-none"
        >
          <option value="NOT_STARTED">⭕ Not Started</option>
          <option value="IN_PROGRESS">⏳ In Progress</option>
          <option value="COMPLETED">✅ Completed</option>
        </select>
        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
          <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </div>
  );
}
