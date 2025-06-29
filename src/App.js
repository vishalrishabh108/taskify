// 📦 This component renders a task card with drag-drop and edit/delete functionality

import React, {useState,useEffect} from 'react';
import './App.css';
import Column from './components/Column'; // Import
import AddTask from './components/AddTask';



import { DragDropContext } from "react-beautiful-dnd";
import { initialData } from "./Data";
function App() {
  const [data, setData] = useState(initialData);
  const [darkMode, setDarkMode] = useState(false);
useEffect(() => {
  document.body.classList.toggle("dark-mode", darkMode);
}, [darkMode]);

  useEffect(() => {
  const savedData = localStorage.getItem('taskify-data');
  if (savedData) {
    setData(JSON.parse(savedData));
  }
}, []);
useEffect(() => {
  localStorage.setItem('taskify-data', JSON.stringify(data));
}, [data]);

  const handleToggleComplete = (taskId) => {
  setData(prev => ({
    ...prev,
    tasks: {
      ...prev.tasks,
      [taskId]: {
        ...prev.tasks[taskId],
        completed: !prev.tasks[taskId].completed
      }
    }
  }));
};


  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    if (!destination) return;
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const start = data.columns[source.droppableId];
    const finish = data.columns[destination.droppableId];

    if (start === finish) {
      const newTaskIds = Array.from(start.taskIds);
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...start,
        taskIds: newTaskIds,
      };

      const newState = {
        ...data,
        columns: {
          ...data.columns,
          [newColumn.id]: newColumn,
        },
      };

      setData(newState);
      return;
    }



    
    const startTaskIds = Array.from(start.taskIds);
    startTaskIds.splice(source.index, 1);
    const newStart = {
      ...start,
      taskIds: startTaskIds,
    };

    const finishTaskIds = Array.from(finish.taskIds);
    finishTaskIds.splice(destination.index, 0, draggableId);
    const newFinish = {
      ...finish,
      taskIds: finishTaskIds,
    };

    const newState = {
      ...data,
      columns: {
        ...data.columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish,
      },
    };

    setData(newState);
  };
  const handleAddTask = () => {
  const newTaskId = `task-${Date.now()}`;
  const newTask = {
    id: newTaskId,
    content: prompt("Enter task content:"), // 👈 user se content le raha
  };

  if (!newTask.content) return; // agar blank chhod diya toh kuchh mat karo

  const newState = {
    ...data,
    tasks: {
      ...data.tasks,
      [newTaskId]: newTask,
    },
    columns: {
      ...data.columns,
      todo: {
        ...data.columns['todo'],
        taskIds: [...data.columns['todo'].taskIds, newTaskId],
      }
    }
  };

  setData(newState); 
};

const handleDeleteTask = (taskIdToDelete, columnId) => {
  // Get the column from which to delete
  const column = data.columns[columnId];
  if (!column) {
    console.warn("Column not found for ID:", columnId);
    return;
  }

  // Filter out the task from the column
  const newTaskIds = column.taskIds.filter(taskId => taskId !== taskIdToDelete);

  const newColumn = {
    ...column,
    taskIds: newTaskIds,
  };

  const newTasks = { ...data.tasks };
  delete newTasks[taskIdToDelete];

  const newState = {
    ...data,
    tasks: newTasks,
    columns: {
      ...data.columns,
      [columnId]: newColumn,
    },
  };

  setData(newState);
};
const handleEditTask = (taskId, newContent) => {
  setData((prevData) => ({
    ...prevData,
    tasks: {
      ...prevData.tasks,
      [taskId]: {
        ...prevData.tasks[taskId],
        content: newContent,
      },
    },
  }));
};




  return (
   <div className={darkMode ? "dark-mode" : ""}>
      <h1 style={{ textAlign: "center", margin: "20px" }}>📝 Taskify</h1>
      <DragDropContext onDragEnd={onDragEnd}>
        {/* Columns will be rendered here in next step */}
        <div style={{ ddisplay: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
    gap: "20px",
    padding: "10px"}}>
  {data.columnOrder.map((columnId) => {
    const column = data.columns[columnId];
   const tasks = column.taskIds
  .map(taskId => data.tasks[taskId])
  .filter(Boolean);
  console.log(" Column:", column.title, "→ taskIds:", column.taskIds);
console.log(" Mapped tasks:", tasks);



    return  (
  <Column
    key={column.id}
    column={column}
    tasks={tasks}
    handleDeleteTask={handleDeleteTask} 
    handleEditTask={handleEditTask}
    darkMode={darkMode}
     handleToggleComplete={handleToggleComplete}
  />
);
 
  })}
</div>

      </DragDropContext>
<AddTask onAdd={handleAddTask} darkMode={darkMode} setDarkMode={setDarkMode} />
    </div>
  );



 
}

export default App;
