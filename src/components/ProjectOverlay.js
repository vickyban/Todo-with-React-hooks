import React from 'react';
import { useProjectsValue } from '../context';

export const ProjectOverlay = ({ setShow, setProject }) => {
  const { projects } = useProjectsValue();

  const select = (project) => {
    setProject(project);
    setShow(false);
  }

  return (
    <ul>
      {(projects.map(project => (
        <li key={project.name}
          onClick={() => select(project)}
        >
          {project.name}
        </li>
      )))}
    </ul>
  );
}