// src/data.js

export const initialData = {
  tasks: {
    'task-1': { id: 'task-1', content: 'Learn React' },
    'task-2': { id: 'task-2', content: 'Read a Book' },
    'task-3': { id: "task-3", content: 'Do Homework' },
  },
  columns: {
    'todo': {
      id: 'todo',
      title: 'To Do',
      taskIds: ['task-1', 'task-2'],
    },
    'in-progress': {
      id: 'in-progress',
      title: 'In Progress',
      taskIds: ['task-3'],
    },
    'done': {
      id: 'done',
      title: 'Done',
      taskIds: [],
    }
  },
  columnOrder: ['todo', 'in-progress', 'done'],
};
