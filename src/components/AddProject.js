import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import { firebase } from '../firebase';
import { useProjectsValue } from '../context';
import { generatePushId } from '../helpers';

export const AddProject = () => {
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState('');
  const { projects, setProjects } = useProjectsValue();
  // const { selectedProject } = useSelectedProjectValue();

  const addProject = () => {
    const projectId = generatePushId();
    firebase
      .firestore()
      .collection('projects')
      .add({
        projectId,
        userId: '1',
        name: name
      })
      .then(() => {
        setProjects([...projects]);
        setName('');
      })
  }

  return (
    <div className="add-project">
      <button className="add-project__toggle"
        onClick={() => setShowForm(!showForm)}
      >
        <FaPlus className="fa-icon" />
        <span>Add Project</span>
      </button>
      {
        showForm && (
          <div className="add-project__form">
            <input
              className="form__input"
              onChange={e => setName(e.target.value)}
              placeholder="project name..."
            />
            <button
              className="form__btn add"
              onClick={() => {
                addProject();
                setShowForm(false);
              }}
            >Add</button>
            <button
              className="form__btn cancel"
              onClick={() => {
                setShowForm(false);
              }}
            >Cancel</button>
          </div>
        )
      }
    </div>
  );
}