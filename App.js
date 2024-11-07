import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ToDoList from './ToDoList';
import ToDoForm from './ToDoForm';

const App = () => {
  const [tasks, setTasks] = useState(['Do laundry', 'Go to gym', 'Walk dog']);

  const addTask = (taskText) => {
    if (taskText.trim() !== '' && !tasks.includes(taskText)) {
      setTasks([...tasks, taskText]);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Incredible ToDo List</Text>
      <ToDoList tasks={tasks} />
      <ToDoForm addTask={addTask} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default App;
