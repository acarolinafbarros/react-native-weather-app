import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  cardContent: {
    backgroundColor: '#F9F3DF',
    borderRadius: 20,
    padding: 10,
    marginBottom: 10,
  },

  deleteContainer: {
    flexDirection: 'column',
    backgroundColor: '#d73b3e',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    width: 70,
    marginBottom: 10,
    marginLeft: 5,
  },

  favoriteBackground: {
    backgroundColor: '#F4D19B',
  },

  iconContainer: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
  },

  weatherContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  weatherInfoLeft: {
    paddingRight: 15,
    width: '50%',
  },

  weatherInfoLeftFirstLine: {
    flexDirection: 'row',
    marginBottom: 10,
  },

  city: {
    fontWeight: 'bold',
    fontSize: 15,
  },

  weatherIcon: {
    maxWidth: 30,
    maxHeight: 30,
    flex: 1,
  },

  weatherInfoRight: {
    alignSelf: 'flex-end',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },

  temperature: {
    fontSize: 22,
    paddingBottom: 5,
  },

  minMaxTemperature: {
    fontSize: 12,
  },
});
