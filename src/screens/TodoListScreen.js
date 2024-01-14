import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SectionList } from 'react-native';
import { Checkbox, IconButton } from 'react-native-paper';
import TodoList from '../components/TodoList';
import { getTodos, updateTodo, deleteTodo } from '../utils/database';

// TodoListScreen component for displaying and managing tasks
const TodoListScreen = ({ route, navigation }) => {
  // Destructure the group from route params
  const { group } = route.params;

  // State variables for todos, error message, and refresh flag
  const [todos, setTodos] = useState([]);
  const [error, setError] = useState(null);

  // Function to fetch todos for the specified group
  const fetchTodos = async () => {
    try {
      const fetchedTodos = await getTodos(group.id);
      setTodos(fetchedTodos);
      setError(null);
    } catch (error) {
      console.error('Error fetching todos:', error);
      setError('Error fetching todos');
    }
  };

  // Effect to fetch todos when the group changes
  useEffect(() => {
    fetchTodos();
  }, [group]);

  // Function to handle task press and navigate to TaskDetailScreen
  const handleTodoPress = (todo) => {
    navigation.navigate('TaskDetail', { todo, refresh: fetchTodos });
  };

  // Function to handle adding a new task
  const handleAddTask = () => {
    navigation.navigate('AddTask', {
      group,
      refresh: fetchTodos,
    });
  };

  // Function to handle checkbox toggle for task completion
  const handleCheckboxToggle = async (todo) => {
    await updateTodo(todo.id, { isCompleted: todo.isCompleted === 1 ? 0 : 1 });
    fetchTodos();
  };

  // Function to handle task deletion
  const handleDeleteTask = async (todoId) => {
    await deleteTodo(todoId);
    fetchTodos();
  };

  // Render function for section headers
  const renderSectionHeader = ({ section: { title, data } }) => (
    <View>
      {data.length > 0 && (
        <Text style={title === 'Completed' ? styles.completedHeader : styles.pendingHeader}>
          {title}
        </Text>
      )}
    </View>
  );

  // Render function for individual task items
  const renderTaskItem = ({ item }) => (
    <View style={styles.taskItem}>
      <Checkbox.Android
        status={item.isCompleted ? 'checked' : 'unchecked'}
        onPress={() => handleCheckboxToggle(item)}
        color={item.isCompleted ? '#2ECC71' : '#3498DB'}
      />
      <TouchableOpacity
        onPress={() => handleTodoPress(item)}
        style={[
          styles.taskTextContainer,
          { backgroundColor: item.isCompleted ? '#ECF0F1' : 'transparent' },
        ]}
      >
        <Text style={styles.taskText}>{item.title}</Text>
      </TouchableOpacity>
      <IconButton
        icon="delete"
        size={20}
        color="#E74C3C"
        onPress={() => handleDeleteTask(item.id)}
      />
    </View>
  );

  // Data structure for SectionList
  const sections = [
    { title: 'Completed', data: todos.filter((todo) => todo.isCompleted === 1) },
    { title: 'Pending', data: todos.filter((todo) => todo.isCompleted === 0) },
  ];

  return (
    <View style={styles.container}>
      {/* Display error message if there's an error */}
      {error && <Text style={styles.errorText}>{error}</Text>}
      {/* SectionList for displaying tasks */}
      <SectionList
        sections={sections}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderTaskItem}
        renderSectionHeader={renderSectionHeader}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        ListFooterComponent={<View style={styles.footer} />}
      />
      {/* Button to add a new task */}
      <TouchableOpacity style={styles.addButton} onPress={handleAddTask}>
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F8F8F8',
  },
  errorText: {
    color: '#E74C3C',
    textAlign: 'center',
    marginTop: 16,
  },
  completedHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2ECC71',
    marginBottom: 8,
  },
  pendingHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#3498DB',
    marginBottom: 8,
  },
  taskItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
  },
  taskTextContainer: {
    flex: 1,
    marginLeft: 8,
    borderRadius: 8,
    padding: 8,
  },
  taskText: {
    fontSize: 16,
    color: '#34495E',
  },
  separator: {
    height: 1,
    backgroundColor: '#E0E0E0',
    marginVertical: 4,
  },
  footer: {
    height: 70, // Adjust the height based on the button size
  },
  addButton: {
    position: 'absolute',
    bottom: 16,
    right: 16,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#3498DB',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  addButtonText: {
    fontSize: 24,
    color: '#ECF0F1',
  },
});

export default TodoListScreen;
