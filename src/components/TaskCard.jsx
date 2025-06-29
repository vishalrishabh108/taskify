// src/components/TaskCard.jsx

import React,{useState} from 'react';
import { Draggable } from 'react-beautiful-dnd';

const TaskCard = ({ task, index, handleDeleteTask,  handleEditTask,columnId,darkMode,setDarkMode,handleToggleComplete}) => {
  console.log("Rendering TaskCard",task)
  const isCompleted = task?.isCompleted;
  const [isEditing, setIsEditing] = useState(false);
  const [editedContent, setEditedContent] = useState(task.content);

  console.log("Rendering TaskCard:", task);

  if (!task || !task.id) {
    console.warn("❗ Task missing or invalid:", task);
    return null;
  }
  console.log(" Rendering TaskCard for:", task.id);

  console.log(" Mounting Draggable for:", task.id);

  return (
    <Draggable draggableId={String(task.id)} index={index}>
      {(provided) => (
        
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          style={{
            userSelect: "none",
            padding: 16,
            margin: "0 0 8px 0",
            minHeight: "50px",
            backgroundColor: "#fff",
            color: "#333",
            border: "1px solid lightgray",
            borderRadius: "4px",
            fontSize: "16px",
            ...provided.draggableProps.style // ye line sabse important hai

          }}
          
        >
          {task.content}

          
            <button
        style={{
          marginTop: "8px",
          padding: "4px 8px",
          backgroundColor: "red",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
        onClick={() => handleDeleteTask(task.id,columnId)} // ✅ This will be passed from props
      >
        Delete
      </button>
           
          {isEditing ? (
            <>
              <input
                type="text"
                value={editedContent}
                onChange={(e) => setEditedContent(e.target.value)}
                style={{ width: "100%", marginBottom: "8px" }}
              />
              <button onClick={() => {
                handleEditTask(task.id, editedContent);
                setIsEditing(false);
              }}>Save</button>
            </>
          ) : (
            <>
              <div>{task.content}</div>
              <div style={{ marginTop: "8px" }}>
                <button onClick={() => setIsEditing(true)}>Edit</button>
                {/* <button onClick={() => handleDeleteTask(task.id)} style={{ marginLeft: "8px" }}>Delete</button> */}
              </div>
            </>
          )}

   <button onClick={() => setDarkMode(!darkMode)}>
  {darkMode ? "Light Mode" : "Dark Mode"}
</button>

<input
            type="checkbox"
            checked={isCompleted}
            onChange={() => handleToggleComplete(task.id)}
          />
      
        </div>
      )}
         
      </Draggable>
  );
};

export default TaskCard;
