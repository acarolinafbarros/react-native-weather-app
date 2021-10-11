import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  search: {
    marginVertical: 5,
    width: '100%',
  },

  inputContainer: {
    flexDirection: 'row',
    height: 35,
    justifyContent: 'space-between',
  },

  input: {
    flex: 1,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'grey',
    borderRadius: 5,
    paddingLeft: 10,
  },

  searchButtonContainer: {
    border: 'none',
    borderRadius: 5,
    backgroundColor: '#334257',
    marginLeft: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },

  searchButton: {
    fontSize: 14,
    color: 'white',
  },

  errorMessageContainer: {
    marginTop: 5,
    borderRadius: 5,
    backgroundColor: '#ffcccc',
    alignItems: 'center',
  },

  errorMessage: {
    padding: 10,
    fontSize: 12,
  },
});
