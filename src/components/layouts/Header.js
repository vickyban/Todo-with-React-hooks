import React, { useState } from 'react';
import { FaSun, FaMoon, FaPlusSquare } from 'react-icons/fa';
import { AddTask } from '../AddTask';

export const Header = ({ darkTheme, setDarkTheme }) => {
  const [showQuickAddTask, setShowQuickAddTask] = useState(false);
  return (
    <header className="header"
    >
      <nav className="header-nav">
        <a
          href="!#"
          className="header-nav__item logo"
        >
          <img src="/img/logo.png" alt="logo" />
        </a>

        <ul className="header-nav__item menu">
          <li className="menu__item">
            <button
              data-testid='quick-add-task-btn'
              className="quick-add-task-btn"
              onClick={() => setShowQuickAddTask(!showQuickAddTask)}
            >
              <FaPlusSquare className="fa-icon" />
            </button>
          </li>
          <li className="menu__item">
            <button
              className="dark-mode-btn"
              data-testid=""
              onClick={() => setDarkTheme(!darkTheme)}
            >
              {darkTheme ?
                <FaSun className="fa-icon" /> : <FaMoon className="fa-icon" />}
            </button>
          </li>
        </ul>
      </nav>

      {
        showQuickAddTask && (
          <div className="quick-add-task"
            onClick={(e) => {
              if (e.target.className === "quick-add-task")
                setShowQuickAddTask(false);
            }}
          >
            <AddTask setShowAddTask={setShowQuickAddTask} />
          </div>
        )
      }
    </header>
  );
}