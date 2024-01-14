// App.js
import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import TodoListScreen from './src/screens/TodoListScreen';
import TaskDetailScreen from './src/screens/TaskDetailScreen';
import TaskFormScreen from './src/screens/TaskFormScreen';
import * as Database from './src/utils/database'; // Import your database functions

const Stack = createStackNavigator();

const App = () => {
  useEffect(() => {
    // Ensure the database tables are created when the app starts
    Database; // Importing the database.js file will execute its code
  }, []);

  // Return the main navigation container
  return (
    <NavigationContainer>
      {/* Set up the stack navigator with initial route "Home" */}
      <Stack.Navigator initialRouteName="Home">
        {/* Define screens for different parts of the app */}
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="TodoList" component={TodoListScreen} />
        <Stack.Screen name="TaskDetail" component={TaskDetailScreen} />
        <Stack.Screen name="AddTask" component={TaskFormScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
