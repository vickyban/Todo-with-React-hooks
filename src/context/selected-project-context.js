import React, { createContext, useState, useContext } from 'react';

export const SelectedProjectContext = createContext();
export const SelectedProjectProvider = ({ children }) => {
  const [selectedProject, setSelectedProject] = useState({ projectId: 'INBOX' });

  return (
    <SelectedProjectContext.Provider value={{ selectedProject, setSelectedProject }}>
      {children}
    </SelectedProjectContext.Provider>
  );
}
export const useSelectedProjectValue = () => useContext(SelectedProjectContext);