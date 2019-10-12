import React from 'react';
import { useProjectsValue } from '../context';
import { Project } from './Project';


export const Projects = () => {
  const { projects } = useProjectsValue();

  return (
    <>
      {
        projects.length > 0 && (projects.map(project => (
          <li key={project.docId}>
            <Project project={project} />
          </li>)
        ))
      }
    </>
  );
}