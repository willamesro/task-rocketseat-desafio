import React, { useState } from 'react';

import { Header } from '../components/Header';
import { MyTasksList } from '../components/MyTasksList';
import { TodoInput } from '../components/TodoInput';
import { Alert } from 'react-native'

interface Task {
  id: number;
  title: string;
  done: boolean;
}

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleAddTask(newTaskTitle: string) {
    if (newTaskTitle === '') {
      Alert.alert('Informe uma tarefa', 'A tarefa não pode ser inserida sem uma descrição!')
      return
    }

    const addNewTask = {
      id: new Date().getTime(),
      title: newTaskTitle,
      done: false
    }

    setTasks(oldTasks => [...oldTasks, addNewTask])
  }

  function handleMarkTaskAsDone(id: number) {
    //TODO - mark task as done if exists
    const markMyTask = tasks.map(task =>
      task.id === id ? {
        ...task,
        done: !task.done
      } : task)

    setTasks(markMyTask)

  }

  function handleRemoveTask(id: number) {
    //TODO - remove task from state
    const removeTask = tasks.filter(task => task.id !== id)
    setTasks(removeTask)
  }

  return (
    <>
      <Header />
      <TodoInput addTask={handleAddTask} />
      <MyTasksList
        tasks={tasks}
        onPress={handleMarkTaskAsDone}
        onLongPress={handleRemoveTask}
      />
    </>
  )
}