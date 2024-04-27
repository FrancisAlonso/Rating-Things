// RatingComponent.js
import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Rating } from 'react-native-ratings';

const RatingComponent = () => {
  const [ratings, setRatings] = useState([0, 0, 0, 0, 0]);

  const handleRatingChange = (index, value) => {
    const updatedRatings = [...ratings];
    updatedRatings[index] = value;
    setRatings(updatedRatings);
  };

  return (
    <View>
      {ratings.map((rating, index) => (
        <View key={index}>
          <Text>Element {index + 1}</Text>
          <Rating
            type="star"
            ratingCount={5}
            imageSize={30}
            startingValue={rating}
            onFinishRating={(value) => handleRatingChange(index, value)}
          />
        </View>
      ))}
    </View>
  );
};

export default RatingComponent;
