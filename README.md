# Todo App

Welcome to the Todo App! This React Native mobile app is here to simplify your task management to enhances your productivity seamlessly. The app provides a sleek and user-friendly design, prioritizing ease of use and making task management a breeze. It also presents a visually appealing and modern design. Using Material UI elements, the app ensures an aesthetically pleasing and contemporary user experience. One standout feature of the Todo App is its sectioned approach to task management, neatly categorizing tasks into "Completed" and "Pending" sections. 

| <img src="https://github.com/ketan952/Todo-App-for-Go-Grab/assets/108462957/79079917-ae1e-41f2-86a9-b48f4e2a33c9" width="300"/> | <img src="https://github.com/ketan952/Todo-App-for-Go-Grab/assets/108462957/e0e013c0-67fb-4377-8c24-4b5eed037d3b" width="300"/> |
| --- | --- |
| <img src="https://github.com/ketan952/Todo-App-for-Go-Grab/assets/108462957/b1e0ece7-a057-4c37-bdb4-799f3e1a347b" width="300"/> | <img src="https://github.com/ketan952/Todo-App-for-Go-Grab/assets/108462957/3133af52-00f2-4f1b-8a80-9cdb89a761cb" width="300"/> |

## Video Tutorial

[Watch the Video Tutorial](https://drive.google.com/file/d/1p2UENkZMLCdGiSGJRrkibZ13LYX6CDdq/view?usp=sharing)


## Key Features

1. Effortlessly categorize tasks into groups for a structured and systematic approach to task management.
2. Quickly add new tasks with detailed titles and descriptions, ensuring clarity and specificity.
3. Keep track of task status with the ability to mark tasks as completed or pending, providing a clear overview of your progress.
4. Edit task titles and descriptions flexibly, adapting to the dynamic nature of your work.


## Challenges Faced

#### 1. Database Initialization Challenge:
   - **Issue:** I faced difficulties integrating the SQLite database into my application. Specifically, determining when to create the necessary tables and initialize the database was a challenge.
   - **Solution:** I resolved this issue by deciding to create tables that would be initially empty when the application is uploaded. This approach successfully addressed the initialization problem.

#### 2. Real-time Task Addition Challenge:
   - **Issue:** After adding a new task to a group, the task wasn't immediately appearing on the TodoList screen. Navigating back to the Home screen and then returning to the TodoList screen was required to see the newly added task.
   - **Solution:** To overcome this, I experimented with different approaches and found success by passing functions as parameters to the `navigation.navigate` function. This ensured that the task appeared on the TodoList screen instantly upon addition.

#### 3. Group Deletion and Task Removal Challenge:
   - **Issue:** When deleting a group, only the group's data was removed from the group table, leaving the tasks associated with that group intact.
   - **Solution:** I addressed this challenge by implementing functionality to delete all tasks associated with a particular group when deleting the group itself. This ensured a complete removal of both the group and its associated tasks.

#### 4. Styling and Design Challenges:
   - **Issue:** Styling and designing various screens of the todo app posed challenges. Determining suitable layouts for each screen and achieving an aesthetically pleasing design were significant hurdles.
   - **Solution:** To tackle this, I dedicated time to exploring different design options and layouts. Seeking inspiration from user-friendly interfaces, I eventually settled on a design that was both visually appealing and provided a seamless user experience.


## Getting Started

Follow these steps to set up and install the Todo App on your local environment.

### Prerequisites

Before you begin, ensure you have the following dependencies installed:

- **Node.js:** Install Node.js from [https://nodejs.org/](https://nodejs.org/).
- **Expo CLI:** Install the Expo CLI globally by running the following command in your terminal:
  ```bash
  npm install -g expo-cli
  ```
- **Expo Go App:** Install Expo Go on your mobile device from the App Store (iOS) or Google Play Store (Android).

### Setup Instructions

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/ketan952/Todo-App-for-Go-Grab
   ```
   Navigate to the project directory:
   ```bash
   cd Todo-App-for-Go-Grab
   ```

2. **Install Dependencies:**
   ```bash
   npm install @react-navigation/native @react-navigation/stack react-native-reanimated react-native-gesture-handler
   npm install expo-sqlite react-native-elements
   ```

3. **Run the App:**
   ```bash
   expo start
   ```
   This will open the Expo DevTools in your default web browser. Use your device's Expo Go app to scan the QR code displayed on the Expo DevTools page.

4. **Explore the Todo App:**
   Once the app is successfully loaded on your device, explore the features of the Todo App, including group creation, task management, and intuitive navigation.

Now you have successfully set up and installed the Todo App on your local environment.

## Project Structure

Below is an overview of the project structure, highlighting key folders and files along with their purposes.

```
/TodoApp
  /src
    /components
      GroupList.js
      TodoList.js
      TaskItem.js
      TaskDetail.js
      TaskForm.js
    /screens
      HomeScreen.js
      TodoListScreen.js
      TaskDetailScreen.js
      TaskFormScreen.js
    /utils
      database.js
  App.js
  package.json
  README.md
```

### Key Files and Their Purposes

#### Components
- **GroupList.js:** Renders a list of groups and handles group-related actions.
- **TaskForm.js:** Provides a form for adding or editing tasks.
- **TodoList.js:** Displays a list of tasks and handles task-related actions.

#### Screens
- **HomeScreen.js:** Main screen displaying the list of groups and allowing group management.
- **TaskDetailScreen.js:** Screen for viewing and editing details of a specific task.
- **TaskFormScreen.js:** Screen for adding a new task to a group.
- **TodoListScreen.js:** Screen for displaying and managing tasks within a group.

#### Utils
- **database.js:** Contains utility functions for interacting with the SQLite database, including CRUD operations for groups and tasks.

### App Configuration
- **App.js:** Main entry point for the Expo app, where the navigation is wrapped with necessary providers.

### Configuration Files
- **.gitignore:** Specifies files and directories that should be ignored by Git.
- **app.json:** Expo configuration file.
- **babel.config.js:** Babel configuration for transpiling JavaScript code.
- **package.json:** Node.js project configuration file with dependencies and scripts.
- **README.md:** Documentation file containing essential information about the project.

## Dependencies

The Todo App project relies on several key dependencies to enhance its functionality and appearance. Below is a list of major dependencies used in the project, along with their respective version numbers.

### Production Dependencies

- **@expo/webpack-config:** ^19.0.0
  - Expo-specific webpack configuration for the project.
- **@react-navigation/native:** ^6.1.9
  - Core library for navigation in React Native applications.
- **@react-navigation/stack:** ^6.3.20
  - Stack navigator for handling navigation transitions between screens.
- **expo:** ~49.0.15
  - Expo SDK for building React Native projects.
- **expo-sqlite:** ~11.3.3
  - SQLite database package for Expo applications.
- **expo-status-bar:** ~1.6.0
  - Expo's component for configuring the status bar appearance.
- **react:** 18.2.0
  - Core library for building user interfaces in React.
- **react-dom:** 18.2.0
  - Entry point for working with React in web applications.
- **react-native:** 0.72.6
  - Framework for building native applications using React.
- **react-native-elements:** ^3.4.3
  - UI toolkit for React Native applications.
- **react-native-gesture-handler:** ~2.12.0
  - Declarative API for handling gestures in React Native applications.
- **react-native-modal:** ^13.0.1
  - Modal component for React Native applications.
- **react-native-paper:** ^5.12.1
  - Material Design components for React Native.
- **react-native-reanimated:** ~3.3.0
  - React Native library for building smooth and interactive animations.
- **react-native-web:** ~0.19.6
  - Allows running React Native components and APIs on the web.

### Development Dependency

- **@babel/core:** ^7.20.0
  - Core Babel functionality required for transforming JavaScript code.

## Configuration

The SQLite database used by the application is configured in the `database.js` file within the utils folder. This file contains functions to create, read, update, and delete groups and tasks in the database.

Navigation within the app is set

 up in the `App.js` file using the `@react-navigation/native` and `@react-navigation/stack` libraries. Screens are defined, and navigation options are configured to provide a seamless user experience.

Styles for components are defined within the respective component files using stylesheets or inline styles. The styles object within each component allows customization of the visual appearance.

Expo-specific configurations, such as app name and version, are specified in the `app.json` file. This file is crucial for Expo to understand how to build and package the application.

The `babel.config.js` file enables the use of modern JavaScript features by configuring Babel. It ensures that the code written is compatible with the specified versions of React and React Native.

## Additional Notes

- It's essential to follow the project's folder structure to maintain organization and readability.
- Make sure to check and update dependencies regularly for the latest features and security updates.

## Usage

The Todo App is designed to help users organize tasks efficiently. Below are instructions on how to use the app, along with explanations of its main functionalities.

### Home Screen

- **Groups List:** The home screen displays a list of groups, each representing a category or project.
- **Create New Group:** Enter a group name in the text input at the bottom, then press the "Add" button to create a new group.
- **Navigate to Todo List:** Tap on a group to view and manage tasks within that group.

### Todo List Screen

- **Task Sections:** Tasks are organized into two sections: "Completed" and "Pending."
- **Checkbox:** Toggle the checkbox next to a task to mark it as completed or pending.
- **Task Actions:** Each task has options to view/edit details and delete the task.
- **Add New Task:** Press the "+" button at the bottom right to add a new task to the current group.

### Task Detail Screen

- **Edit Task:** Change the title and description of the task. Press the "Update Task" button to save changes.
- **Delete Task:** Remove the task from the group by pressing the "Delete Task" button.
- **Mark Completed/Pending:** Toggle the task's completion status by pressing the corresponding button.

### Add Task Screen

- **Title and Description:** Enter a title and description for the new task.
- **Submit:** Press the "Submit" button to add the task to the current group.
- **Success Message:** A success message appears at the bottom upon successful task addition.

### Navigation

- **Back:** Use the back button on the top-left corner of the screen or the device's back button to navigate to the previous screen.
- **Home:** Press the home button on the bottom navigation bar to return to the home screen.

Feel free to explore and customize the app further to suit your needs. If you encounter any issues or have suggestions for improvements, please check the GitHub repository for support and updates.
