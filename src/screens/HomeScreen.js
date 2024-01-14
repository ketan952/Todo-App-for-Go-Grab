import React, { useState, useEffect } from 'react';
import { View, TextInput } from 'react-native';
import { Button } from 'react-native-paper';
import GroupList from '../components/GroupList';
import { getGroups, addGroup, deleteGroup } from '../utils/database';

const HomeScreen = ({ navigation }) => {
  // State variables to manage the list of groups and the new group name input
  const [groups, setGroups] = useState([]);
  const [newGroupName, setNewGroupName] = useState('');

  // Fetch groups from the database when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      const fetchedGroups = await getGroups();
      setGroups(fetchedGroups);
    };

    fetchData();
  }, []);

  // Function to handle group press, navigates to the TodoList screen with the selected group
  const handleGroupPress = (group) => {
    navigation.navigate('TodoList', { group });
  };

  // Function to handle adding a new group
  const handleAddGroup = async () => {
    // Check if the new group name is not empty
    if (newGroupName.trim() !== '') {
      // Add the new group to the database and update the groups state
      const newGroupId = await addGroup(newGroupName);
      setGroups([...groups, { id: newGroupId, name: newGroupName }]);
      // Clear the new group name input
      setNewGroupName('');
    }
  };

  // Function to handle deleting a group
  const handleDeleteGroup = async (groupId) => {
    // Delete the group from the database and update the groups state
    const isDeleted = await deleteGroup(groupId);

    if (isDeleted) {
      setGroups(groups.filter((group) => group.id !== groupId));
    }
  };

  return (
    <View style={{ flex: 1, padding: 16, backgroundColor: '#ffffff' }}>
      {/* Display the list of groups using the GroupList component */}
      <GroupList groups={groups} onPress={handleGroupPress} onDelete={handleDeleteGroup} />
      <View style={{ marginTop: 16 }}>
        {/* Input field for entering the new group name */}
        <TextInput
          style={{
            borderWidth: 1,
            borderColor: '#B0BEC5', 
            borderRadius: 8,
            padding: 8,
            marginBottom: 16, 
          }}
          placeholder="Enter Group Name"
          value={newGroupName}
          onChangeText={(text) => setNewGroupName(text)}
        />
        {/* Button to add a new group */}
        <Button
          mode="contained"
          onPress={handleAddGroup}
          style={{ borderRadius: 8, backgroundColor: '#FFA726' }} 
        >
          Add
        </Button>
      </View>
    </View>
  );
};

export default HomeScreen;
