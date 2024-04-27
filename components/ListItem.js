import React from 'react';
import { View, Text, Image } from 'react-native';

const ListItem = ({ item }) => {
  return (
    <View>
      <Text>{item.name}</Text>
      <Text>{item.description}</Text>
      <Image source={{ uri: item.photo }} style={{ width: 100, height: 100 }} />
    </View>
  );
};

export default ListItem;
