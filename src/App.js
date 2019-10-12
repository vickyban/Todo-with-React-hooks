import React, { useState } from 'react';
import { Header } from './components/layouts/Header';
import { Content } from './components/layouts/Content';
import { Footer } from './components/layouts/Footer';
import { ProjectsProvider, SelectedProjectProvider } from './context';

export const App = ({ isDark = false }) => {
  const [darkTheme, setDarkTheme] = useState(isDark);
  return (
    <ProjectsProvider >
      <SelectedProjectProvider>
        <div className={darkTheme ? 'theme--dark App' : 'theme--default App'}>
          <Header
            darkTheme={darkTheme}
            setDarkTheme={setDarkTheme}
          />
          <Content />
          <Footer />
        </div>
      </SelectedProjectProvider>
    </ProjectsProvider>
  );
}
