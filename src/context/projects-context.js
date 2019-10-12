import React, { useContext, createContext } from 'react';
import { useProjects } from '../hooks/useProjects';

export const ProjectsContext = createContext();  // return { Provider, Consumer }
export const ProjectsProvider = ({ children }) => {
  const [projects, setProjects] = useProjects();
  return (
    <ProjectsContext.Provider value={{ projects, setProjects }}>
      {children}
    </ProjectsContext.Provider>
  );
}

export const useProjectsValue = () => useContext(ProjectsContext);
