import React, { useState, FunctionComponent, useCallback } from 'react';
import { View, Text, TextInput, Pressable } from 'react-native';
import styles from './SearchBar.styles';
import { SearchBarProps } from './SearchBar.types';

export const SearchBar: FunctionComponent<SearchBarProps> = ({
  searchSubmit,
  inputStatusError,
  inputMessageError,
}) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = useCallback(value => {
    setInputValue(value);
  }, []);

  return (
    <View style={styles.search} testID="search-bar">
      <View style={styles.inputContainer}>
        <TextInput
          testID="search-input"
          style={styles.input}
          value={inputValue}
          onChangeText={handleInputChange}
          placeholder="Search city"
        />
        <Pressable
          style={styles.searchButtonContainer}
          onPress={() => searchSubmit(inputValue)}
        >
          <Text testID="search-button" style={styles.searchButton}>
            Search
          </Text>
        </Pressable>
      </View>
      {inputStatusError && (
        <View style={styles.errorMessageContainer}>
          <Text testID="search-input-error" style={styles.errorMessage}>
            {inputMessageError}
          </Text>
        </View>
      )}
    </View>
  );
};
