import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const RatingComponent = ({ value, onChange }) => {
  const [rating, setRating] = useState(value);

  const handleRating = (newValue) => {
    setRating(newValue);
    onChange(newValue);
  };

  return (
    <View style={styles.container}>
      {[1, 2, 3, 4, 5].map((star) => (
        <TouchableOpacity key={star} onPress={() => handleRating(star)}>
          <Icon
            name={rating >= star ? 'star' : 'star-o'}
            size={30}
            color={rating >= star ? 'gold' : 'gray'}
          />
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default RatingComponent;
