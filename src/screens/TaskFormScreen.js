import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, TextInput, Title, Snackbar } from 'react-native-paper';
import TaskForm from '../components/TaskForm';
import { addTodo } from '../utils/database';

// TaskFormScreen component for adding a new task
const TaskFormScreen = ({ route, navigation }) => {
  // Destructure the group from route params
  const { group } = route.params;

  // State variables for task title, description, and Snackbar visibility
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [snackbarVisible, setSnackbarVisible] = useState(false);

  // Function to handle task submission
  const handleTaskSubmit = async () => {
    // Check if title and description are not empty
    if (title.trim() !== '' && description.trim() !== '') {
      // Add a new task to SQLite database for the specified group
      await addTodo(group.id, title, description);

      // Fetch todos again before navigating back to the TodoList screen
      await route.params.refresh();

      setSnackbarVisible(true);

      setTimeout(() => {
        navigation.navigate('TodoList', { group });
      }, 1000);
    }
  };

  return (
    <View style={styles.container}>
      {/**/}
      <Title style={styles.title}>Add a New Task</Title>
      {/* Input fields for task title and description */}
      <View style={styles.inputContainer}>
        <TextInput
          label="Title"
          mode="outlined"
          style={styles.input}
          value={title}
          onChangeText={(text) => setTitle(text)}
        />
        <TextInput
          label="Description"
          mode="outlined"
          multiline
          numberOfLines={3}
          style={styles.input}
          value={description}
          onChangeText={(text) => setDescription(text)}
        />
      </View>
      {/**/}
      <Button mode="contained" onPress={handleTaskSubmit} style={styles.submitButton}>
        Submit
      </Button>
      {/* Snackbar for showing success message */}
      <Snackbar
        visible={snackbarVisible}
        onDismiss={() => setSnackbarVisible(false)}
        duration={2000}
      >
        Task added successfully!
      </Snackbar>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F4F4F4',
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
  inputContainer: {
    marginBottom: 16,
  },
  input: {
    marginBottom: 8,
  },
  submitButton: {
    marginTop: 16,
  },
});

export default TaskFormScreen;
