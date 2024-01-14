import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';
import { updateTodo, deleteTodo } from '../utils/database';
import { MaterialIcons } from '@expo/vector-icons';

// TaskDetailScreen component displays and allows editing of task details
const TaskDetailScreen = ({ route, navigation }) => {
  // Destructure task details and refresh function from route params
  const { todo, refresh } = route.params;

  // State variables to manage edited task title and description
  const [editedTitle, setEditedTitle] = useState(todo.title);
  const [editedDescription, setEditedDescription] = useState(todo.description);

  // Function to handle updating a task
  const handleEditTask = async () => {
    if (editedTitle !== todo.title || editedDescription !== todo.description) {
      await updateTodo(todo.id, {
        title: editedTitle,
        description: editedDescription,
      });
      // Refresh the todo list
      refresh();
      // Navigate back to the previous screen
      navigation.goBack();
    } else {
      // If no changes, navigate back without updating
      navigation.goBack();
    }
  };

  // Function to handle deleting a task
  const handleDeleteTask = async () => {
    // Delete the task from the database
    await deleteTodo(todo.id);
    // Refresh the todo list
    refresh();
    // Navigate back to the previous screen
    navigation.goBack();
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Input field for editing task title */}
      <View style={styles.inputContainer}>
        <Text style={[styles.label, styles.bold]}>Title:</Text>
        <TextInput
          style={styles.input}
          value={editedTitle}
          onChangeText={(text) => setEditedTitle(text)}
          placeholder="Enter title"
        />
      </View>
      {/* */}
      <View style={styles.inputContainer}>
        <Text style={[styles.label, styles.bold]}>Description:</Text>
        <TextInput
          style={styles.input}
          value={editedDescription}
          multiline
          numberOfLines={3}
          onChangeText={(text) => setEditedDescription(text)}
          placeholder="Enter description"
        />
      </View>
      {/*  */}
      <View style={styles.buttonContainer}>
        <Button
          title="Update Task"
          onPress={handleEditTask}
          icon={<MaterialIcons name="done" size={24} color="#fff" />}
          buttonStyle={styles.updateButton}
        />
        <Button
          title="Delete Task"
          onPress={handleDeleteTask}
          icon={<MaterialIcons name="delete" size={24} color="#fff" />}
          buttonStyle={styles.deleteButton}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#F4F4F4',
  },
  inputContainer: {
    marginBottom: 24,
  },
  label: {
    fontSize: 16,
    marginBottom: 4,
    color: '#616161',
  },
  input: {
    fontSize: 16,
    padding: 8,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 8,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  updateButton: {
    backgroundColor: '#3498db',
    borderRadius: 8,
  },
  deleteButton: {
    backgroundColor: '#e74c3c',
    borderRadius: 8,
  },
  bold: {
    fontWeight: 'bold',
  },
});

export default TaskDetailScreen;
