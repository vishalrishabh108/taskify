import React, { useState } from 'react';

const AddTask = ({ onAdd,darkMode,setDarkMode }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    onAdd(input.trim());
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", gap: "8px", marginBottom: "20px", justifyContent: "center" }}>
      <input
        type="text"
        placeholder="Enter task"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={{
          padding: "8px",
          fontSize: "16px",
          borderRadius: "4px",
          border: "1px solid lightgray",
          width: "300px"
        }}
      />
      <button
        type="submit"
        style={{
          padding: "8px 16px",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer"
        }}
      >
        Add Task
      </button>
      <button  onClick={() => setDarkMode(!darkMode)}>
  {darkMode ? "Light Mode" : " Dark Mode"}
</button>

    </form>
  );
};

export default AddTask;
