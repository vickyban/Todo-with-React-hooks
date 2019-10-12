import React from 'react';
import { FaSpaceShuttle, FaSun, FaRegPaperPlane } from 'react-icons/fa';
import moment from 'moment';

export const TaskDate = ({ setDate, setShow }) => {
  const select = (date) => {
    setDate(date);
    setShow(false);
  }

  return (
    <ul className="add-task__dates">
      <li
        onClick={() => select(moment().format('DD/MM/YYYY'))}
      >
        <span><FaSpaceShuttle /></span>
        <span>Today</span>
      </li>
      <li
        onClick={() => select(moment().add(1, 'day').format('DD/MM/YYYY'))}
      >
        <span><FaSun /></span>
        <span>Tomorrow</span>
      </li>
      <li
        onClick={() => select(moment().add(7, 'days').format('DD/MM/YYYY'))}
      >
        <span><FaRegPaperPlane /></span>
        <span>Next week</span>
      </li>
    </ul>
  );
}