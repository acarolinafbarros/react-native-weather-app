import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  homeContainer: {
    margin: 12,
    alignItems: 'flex-start',
  },

  header: {
    marginVertical: 10,
    color: '#101010',
    fontSize: 24,
    fontWeight: 'bold',
  },

  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  currentLocation: {
    paddingLeft: 5,
    fontWeight: 'bold',
  },
  cardCollection: {
    marginTop: 10,
    width: '100%',
    flexDirection: 'column',
  },

  favoritesCollection: {
    width: '100%',
    marginTop: 20,
  },

  favorites: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
