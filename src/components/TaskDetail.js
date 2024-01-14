import React from 'react';
import { View, Text } from 'react-native';

const TaskDetail = ({ task }) => (
  <View>
    {/* Display the title of the task */}
    <Text>Title: {task.title}</Text>
    {/* Display the description of the task */}
    <Text>Description: {task.description}</Text>
    {/* Additional details can be added as needed */}
  </View>
);

export default TaskDetail;
