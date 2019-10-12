import { useState, useEffect } from 'react';
import { firebase } from '../firebase';
import { collatedTasks } from '../constants';
import moment from 'moment';

export const useTasks = selectedProject => {
  const [tasks, setTasks] = useState([]);

  useEffect(
    () => {
      let projectId = selectedProject.projectId;
      let unsubscribe = firebase
        .firestore()
        .collection('tasks');

      if (collatedTasks[projectId] != null) {
        if (projectId === 'TODAY')
          unsubscribe = unsubscribe.where('date', '==', moment().format('DD/MM/YYYY'));
      } else {
        unsubscribe = unsubscribe.where('projectId', '==', projectId);
      }

      unsubscribe.onSnapshot(snapshot => {
        const newTasks = snapshot.docs.map(doc => ({
          docId: doc.id,
          ...doc.data()
        }))

        setTasks(
          projectId === 'NEXT_7'
            ? newTasks.filter(
              task =>
                moment(task.date, 'DD-MM-YYYY').diff(moment(), 'days') <= 7 &&
                task.archived !== true
            )
            : newTasks.filter(task => task.archived !== true)
        );
      })
    }
    , [selectedProject]);



  return { tasks, setTasks };
}