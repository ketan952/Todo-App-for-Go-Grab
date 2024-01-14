// TaskItem.js
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const TaskItem = ({ task, onPress }) => (
  <TouchableOpacity onPress={() => onPress(task)}>
    <View>
      <Text>Title: {task.title}</Text>
      <Text>Description: {task.description}</Text>
      {/* more details can be added if needed */}
    </View>
  </TouchableOpacity>
);

export default TaskItem;