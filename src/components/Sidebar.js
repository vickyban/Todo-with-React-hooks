import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp, FaInbox, FaRegCalendarAlt, FaRegCalendar } from 'react-icons/fa';
import { Projects } from './Projects';
import { AddProject } from './AddProject';
import { useSelectedProjectValue } from '../context';

export const Sidebar = () => {
  const { setSelectedProject } = useSelectedProjectValue();
  const [activeTask, setActiveTask] = useState('INBOX');
  const [showProjects, setShowProjects] = useState(true);

  const setActive = name => {
    setSelectedProject({ projectId: name });
    setActiveTask(name);
  }

  return (
    <div className="sidebar">
      <ul className="sidebar__collated-tasks">
        <li
          data-testid="inbox"
          className={activeTask === 'INBOX' ? 'inbox active' : 'inbox'}
          onClick={() => { setActive('INBOX') }}
        >
          <FaInbox /> <span>Inbox</span>
        </li>
        <li
          data-testid="today"
          className={activeTask === 'TODAY' ? 'today active' : 'today'}
          onClick={() => setActive('TODAY')}
        >
          <FaRegCalendar /> <span>Today</span>
        </li>
        <li
          data-testid="next_7"
          className={activeTask === 'NEXT_7' ? 'next_7 active' : 'next_7'}
          onClick={() => setActive('NEXT_7')}
        >
          <FaRegCalendarAlt /> <span>Next 7 days</span>
        </li>
      </ul>
      <div className="sidebar__projects">
        <div
          className="projects__header"
          onClick={() => setShowProjects(!showProjects)}
        >
          {showProjects ? <FaChevronDown /> : <FaChevronUp />}
          <span> Projects</span>
        </div>
        {
          showProjects && (
            <>
              <ul className="projects__list">
                <Projects />
              </ul>
              <AddProject />
            </>
          )
        }
      </div>
    </div>
  );
};