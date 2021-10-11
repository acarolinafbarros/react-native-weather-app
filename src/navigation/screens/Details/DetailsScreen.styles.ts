import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  detailsContainer: {
    marginHorizontal: 30,
    marginVertical: 40,
    alignItems: 'center',
  },

  weatherContent: {
    marginBottom: 40,
    alignItems: 'center',
  },

  weatherIcon: {
    width: 50,
    height: 50,
  },

  city: {
    fontSize: 24,
    fontWeight: 'bold',
  },

  temperature: {
    fontSize: 30,
    marginTop: 20,
    marginBottom: 10,
  },

  forecastContent: {
    width: '100%',
    paddingVertical: 20,
    paddingHorizontal: 50,
    borderRadius: 10,
    backgroundColor: '#334257',
  },

  favoriteBackground: {
    backgroundColor: '#F4D19B',
  },

  forecast: {
    fontSize: 18,
    paddingBottom: 20,
    color: 'white',
    fontWeight: 'bold',
  },

  forecastItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 5,
  },

  forecastItemDate: {
    fontSize: 14,
    color: 'white',
  },

  forecastItemTemperature: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'white',
  },
});
