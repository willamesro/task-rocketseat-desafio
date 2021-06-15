import React, { useState } from 'react';
import {
  Image,
  Platform,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  TouchableOpacityProps,
  View
} from 'react-native';

import checkIcon from '../assets/icons/Check.png';

interface TodoInputProps extends TouchableOpacityProps {
  addTask: (task: string) => void;
  theme: boolean;
}
let selectedTheme = false
export function TodoInput({ addTask, theme }: TodoInputProps) {
  const [task, setTask] = useState('');

  function handleAddNewTask() {
    //TODO - Call addTask and clean input value
    addTask(task);
    setTask('');
  }

  return (
    <View style={[styles.inputContainer, { backgroundColor: theme ? '#10101e' : '#F5F4F8' }, Platform.OS === 'ios' ? styles.inputIOSShadow : styles.inputAndroidShadow]}>

      <TextInput
        style={[styles.input, theme ? styles.dark : styles.light]}
        placeholder="Adicionar novo todo..."
        placeholderTextColor={'#777'}
        returnKeyType="send"
        value={task}
        onChangeText={setTask}
        onSubmitEditing={handleAddNewTask}
      //TODO - use value, onChangeText and onSubmitEditing props
      />

      <TouchableOpacity
        testID="add-new-task-button"
        activeOpacity={0.7}
        style={[styles.addButton, { backgroundColor: theme ? '#565BFF' : '#3FAD27' }]}
        onPress={handleAddNewTask}
      //TODO - onPress prop
      >
        <Image source={checkIcon} />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  dark: {
    backgroundColor: '#212136',
    color: '#F5F4F8'
  },

  light: {
    backgroundColor: '#F5F4F8',
    color: '#000'
  },

  inputContainer: {
    borderRadius: 5,
    marginTop: -25,
    marginHorizontal: 40,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    paddingLeft: 12,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  inputIOSShadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84
  },
  inputAndroidShadow: {
    elevation: 5
  },
  addButton: {
    height: 50,
    paddingHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
});