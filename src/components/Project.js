import React, { useState } from 'react';
import { FaRegTrashAlt } from 'react-icons/fa';
import { useProjectsValue, useSelectedProjectValue } from '../context';
import { firebase } from '../firebase';

export const Project = ({ project }) => {
  const { projects, setProjects } = useProjectsValue();
  const [showCofirm, setShowConfirm] = useState(false);
  const { setSelectedProject } = useSelectedProjectValue();

  const deleteProject = (docId) => {
    firebase
      .firestore()
      .collection('projects')
      .doc(docId)
      .delete()
      .then(() => {
        console.log({ delete: project, projects });
        setProjects([...projects]);
        setSelectedProject({ projectId: 'INBOX' });
      })
  }

  return (
    <div className="project"
      onClick={() => setSelectedProject(project)}
    >
      <span className="list-dot"></span>
      <span className="project__name">{project.name}</span>
      <span className="project__delete">
        <button
          data-testid="project-delete"
          className="project-delete__btn"
          onClick={() => setShowConfirm(true)}
        >
          <FaRegTrashAlt />
        </button>
        {
          showCofirm && (
            <div className="project-delete__modal">
              <h4 className="modal__header">Confirmation</h4>
              <p className="modal__text">Are you sure you want to delete this project?</p>
              <button
                className="modal__btn delete"
                onClick={() => {
                  deleteProject(project.docId);
                  setShowConfirm(false);
                }}
              >Delete</button>
              <button
                className="modal__btn cancel"
                onClick={() => {
                  setShowConfirm(false);
                }}
              >Cancel</button>
            </div>
          )
        }
      </span>

    </div>
  );

}