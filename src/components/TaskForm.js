import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';

const TaskForm = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  // Function to handle form submission
  const handleSubmit = () => {
    // Call the onSubmit prop with the current title and description values
    onSubmit({ title, description });
    // Clear the title and description inputs after submission
    setTitle('');
    setDescription('');
  };

  return (
    <View>
      {/* Input field for the task title */}
      <TextInput placeholder="Title" value={title} onChangeText={text => setTitle(text)} />
      {/* Input field for the task description */}
      <TextInput placeholder="Description" value={description} onChangeText={text => setDescription(text)} />
      {/* Button to submit the form */}
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

export default TaskForm;
