import React, { useState } from 'react';
import { FaRegListAlt, FaRegCalendarAlt } from 'react-icons/fa';
import { firebase } from '../firebase';
import { useSelectedProjectValue } from '../context';
import { TaskDate } from './TaskDate';
import { ProjectOverlay } from './ProjectOverlay';

export const AddTask = ({
  setShowAddTask,
}) => {
  const { selectedProject } = useSelectedProjectValue();
  const [task, setTask] = useState('');
  const [project, setProject] = useState(selectedProject);
  const [date, setDate] = useState('');
  const [showDate, setShowDate] = useState(false);
  const [showProjects, setShowProjects] = useState(false);

  const hideForm = () => {
    setShowAddTask(false);
  }

  const addTask = () => {
    let projectId = project.projectId;

    firebase
      .firestore()
      .collection('tasks')
      .add({
        projectId,
        archived: false,
        task,
        date: date,
      })
      .then(() => {
        hideForm();
      })
  }

  return (
    <div className="add-task">
      <input
        onChange={e => setTask(e.target.value)}
        placeholder="task detail..."
      />
      <span
        className='form-item-list date'
        onClick={() => { setShowDate(!showDate) }}
      >
        <FaRegCalendarAlt />
        Date
        {showDate && (<TaskDate setShow={setShowDate} setDate={setDate} />)}
      </span>
      <span
        className='form-item-list projects'
        onClick={() => { setShowProjects(!showProjects) }}
      >
        <FaRegListAlt />
        Project
        {showProjects && (<ProjectOverlay setProject={setProject} setShow={setShowProjects} />)}
      </span>
      <button
        className="form__btn add"
        onClick={() => addTask()}
      >Add</button>
      <button
        className="form__btn cancel"
        onClick={() => { hideForm() }}
      >Cancel</button>
    </div>
  );
}