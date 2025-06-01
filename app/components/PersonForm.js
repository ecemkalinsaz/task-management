"use client";
import { useState } from "react";

export default function PersonForm({ onPersonAdd }) {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim()) {
      onPersonAdd({
        id: Date.now().toString(),
        name: name.trim(),
      });
      setName("");
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-xl font-semibold mb-4">Add New Person</h2>
      <form onSubmit={handleSubmit} className="flex gap-3">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter name"
          className="flex-1 rounded-md border-gray-300 shadow-sm focus:ring-primary focus:border-primary"
          required
        />
        <button
          type="submit"
          className="bg-[rgb(1,115,234)] text-white px-4 py-2 rounded-md hover:bg-[rgb(85,89,223)]/90 transition-colors"
        >
          Add
        </button>
      </form>
    </div>
  );
}
