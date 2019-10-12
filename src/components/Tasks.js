import React, { useState } from 'react';
import { useSelectedProjectValue } from '../context';
import { useTasks } from '../hooks/useTasks';
import { collatedTasks } from '../constants';
import { AddTask } from './AddTask';
import { FaPlus } from 'react-icons/fa';

export const Tasks = () => {
  const { selectedProject } = useSelectedProjectValue();
  const { tasks } = useTasks(selectedProject);
  const [showAddTask, setShowAddTask] = useState(false);

  let projectName = collatedTasks[selectedProject.projectId] != null ? selectedProject.projectId : selectedProject.name;

  return (
    <div className="tasks">
      <h2 className="tasks__title">{projectName}</h2>
      <ul className="tasks__list">
        {
          tasks.map(task => (
            <li key={task.docId}>
              {task.task}
            </li>
          ))
        }
      </ul>
      <button className="add-task__toggle"
        onClick={() => setShowAddTask(!showAddTask)}
      >
        <FaPlus />
        <span>Add Task</span>
      </button>
      {
        showAddTask && (<AddTask setShowAddTask={setShowAddTask} />)
      }
    </div>
  );
}