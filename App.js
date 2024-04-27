import React, { useState, useCallback } from 'react';
import { View, Text, Pressable, FlatList, Image } from 'react-native';
import { Rating } from 'react-native-ratings';
import ListItem from './components/ListItem';
import RatingComponent from './components/RatingComponent';
import { futbolistas, frutas, peliculas, bandas } from './data';
import { styles } from './styles'; // Importar los estilos

const App = () => {
  const [ratings, setRatings] = useState({
    futbolistas: futbolistas.map(item => ({ ...item, totalRatings: 0, totalRating: 0, averageRating: 0 })),
    frutas: frutas.map(item => ({ ...item, totalRatings: 0, totalRating: 0, averageRating: 0 })),
    peliculas: peliculas.map(item => ({ ...item, totalRatings: 0, totalRating: 0, averageRating: 0 })),
    bandas: bandas.map(item => ({ ...item, totalRatings: 0, totalRating: 0, averageRating: 0 })),
  });
  const [selectedList, setSelectedList] = useState('futbolistas');

  const handleRatingChange = useCallback((list, index, value) => {
    setRatings(prevRatings => {
      const updatedRatings = { ...prevRatings };
      const item = updatedRatings[list][index];
      item.totalRatings += 1;
      item.totalRating += value;
      item.averageRating = item.totalRatings > 0 ? item.totalRating / item.totalRatings : 0;
      return updatedRatings;
    });
  }, []);

  const renderList = useCallback(() => {
    return ratings[selectedList];
  }, [ratings, selectedList]);

  const renderTopRatings = useCallback(() => {
    const sortedList = ratings[selectedList].filter(item => item.averageRating > 4).sort((a, b) => b.averageRating - a.averageRating);
    return sortedList.slice(0, 3).map((item, index) => (
      <View key={index} style={styles.topItem}>
        <Text>{index + 1}. {item.name}</Text>
        <Text>Average Rating: {item.averageRating.toFixed(2)}</Text>
      </View>
    ));
  }, [ratings, selectedList]);

  return (
    <View style={styles.container}>
      <View style={styles.banner}>
        {Object.keys(ratings).map(list => (
          <Pressable key={list} onPress={() => setSelectedList(list)}>
            <Text style={selectedList === list ? styles.selectedBannerButton : styles.bannerButton}>
              {list.charAt(0).toUpperCase() + list.slice(1)}
            </Text>
          </Pressable>
        ))}
      </View>
      <Text style={styles.title}>Calificación de {selectedList}</Text>
      <Rating type="custom" ratingCount={5} imageSize={30} startingValue={0} readonly />
      <Text style={styles.topTitle}>Top Ratings</Text>
      {renderTopRatings()}
      <FlatList
        data={renderList()}
        keyExtractor={(item, index) => index.toString()} // Assuming there's an 'id' field in your data
        renderItem={({ item, index }) => (
          <View style={styles.itemContainer}>
            <View style={styles.item}>
              <Image source={{ uri: item.photo }} style={styles.image} /> {/* Importa la imagen dinámicamente */}
              <View style={styles.details}>
                <ListItem item={item} />
                <RatingComponent
                  value={item}
                  onChange={rating => handleRatingChange(selectedList, index, rating)}
                />
                <Text style={styles.totalRatings}>Total Ratings: {item.totalRatings}</Text>
                <Text style={styles.averageRating}>Average Rating: {item.averageRating.toFixed(2)}</Text>
              </View>
            </View>
          </View>
        )}
        extraData={selectedList}
      />
    </View>
  );
};

export default App;
