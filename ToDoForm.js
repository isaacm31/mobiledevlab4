import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const ToDoForm = ({ addTask }) => {
  const [taskText, setTaskText] = useState('');

  return (
    <View style={styles.form}>
      <TextInput
        style={styles.input}
        placeholder="Add a new task..."
        onChangeText={(text) => setTaskText(text)}
        value={taskText}
      />
      <Button
        title="Add Task"
        onPress={() => {
          addTask(taskText);
          setTaskText(''); // Clear the input field
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  form: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    borderColor: '#000',
    borderWidth: 1,
    padding: 8,
    flex: 1,
    marginRight: 10,
  },
});

export default ToDoForm;

