import React from 'react';
import { FlatList, View } from 'react-native';
import { Button, List } from 'react-native-paper';

const GroupList = ({ groups, onPress, onDelete }) => {
  // Define how each item in the list should be rendered
  const renderItem = ({ item }) => (
    <List.Item
      title={item.name}
      right={() => (
        <Button
          icon="delete"
          mode="text"
          onPress={() => onDelete(item.id)}
          color="#FF5252" // Set the button color to a modern UI color
          labelStyle={{ fontWeight: 'normal' }}
        >
          Delete
        </Button>
      )}
      onPress={() => onPress(item)} // Handle press on the list item
      style={{
        backgroundColor: '#ECEFF1', // Set the background color to a lighter shade
        marginVertical: 12, // Increase vertical margin for better spacing
        borderRadius: 8,
        paddingVertical: 12, // Increase vertical padding for better spacing
      }}
      titleStyle={{ fontWeight: 'bold', fontSize: 18 }} // Style the title with bold and increased font size
    />
  );

  // Render the list of groups using FlatList
  return (
    <FlatList
      data={groups}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

export default GroupList;
