import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import TaskCard from './TaskCard';

const Column = ({ column, tasks,handleDeleteTask,columnId,handleEditTask ,handleToggleComplete}) => {
  return (
    <div style={{ width: "300px",
    minWidth: "250px",
    padding: "10px",
    flex: "1" }}>
      <h2 style={{ textAlign: "center" }}>{column.title}</h2>
     <Droppable
  droppableId={column.id}
  

>


        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            style={{
              background: "#f0f0f0",
              padding: "8px",
              minHeight: "100px",
              borderRadius: "6px"
            }}
          >
           {tasks.map((task, index) => (
  <TaskCard
    key={task.id}
    task={task}
    index={index}
    handleDeleteTask={handleDeleteTask}
    handleEditTask={handleEditTask}
    columnId={column.id} 
     handleToggleComplete={handleToggleComplete}
  />
))}

           
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default Column;
