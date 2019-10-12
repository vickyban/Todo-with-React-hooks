import React from 'react';
import { Sidebar } from '../Sidebar';
import { Tasks } from '../Tasks';

export const Content = () => {
  return (
    <main className="content">
      <Sidebar />
      <Tasks />
    </main>
  );
}