// TodoList.js
import React from 'react';
import { View, Text, FlatList,TouchableOpacity } from 'react-native';

const TodoList = ({ todos, onPress }) => (
  <View>
    <FlatList
      data={todos}
      keyExtractor={item => item.id.toString()}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => onPress(item)}>
          <Text>{item.title}</Text>
        </TouchableOpacity>
      )}
    />
  </View>
);

export default TodoList;
