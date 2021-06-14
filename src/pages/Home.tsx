import React, { useState } from 'react';
import { StyleSheet } from 'react-native'

import { Switch } from 'react-native-paper'

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
  const [theme, setTheme] = useState(false)

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

      <Switch
        value={theme}
        onValueChange={() => setTheme(!theme)}
        style={styles.toggleButton}
      />

      <MyTasksList
        tasks={tasks}
        onPress={handleMarkTaskAsDone}
        onLongPress={handleRemoveTask}
      />
    </>
  )
}
const styles = StyleSheet.create({

  toggleButton: {
    position: 'absolute',
    top: 48,
    left: 40,
  }
})