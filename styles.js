// styles.js
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
    padding: 10,
  },
  banner: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#2196F3',
    height: 80,
    paddingTop: 30,
    marginBottom: 10,
  },
  bannerButton: {
    fontSize: 16,
    color: '#FFFFFF',
    fontFamily: 'Roboto',
  },
  selectedBannerButton: {
    fontSize: 16,
    color: '#FF5722',
    fontFamily: 'Roboto',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    fontFamily: 'Roboto',
  },
  topTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    fontFamily: 'Roboto',
  },
  itemContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    marginBottom: 10,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  details: {
    flex: 1,
  },
  totalRatings: {
    marginBottom: 5,
    fontFamily: 'Roboto',
  },
  averageRating: {
    fontFamily: 'Roboto',
  },
  topItem: {
    backgroundColor: '#F0F0F0',
    padding: 10,
    marginBottom: 5,
    borderRadius: 5,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
});
