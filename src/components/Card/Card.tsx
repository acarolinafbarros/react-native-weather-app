import React, { FunctionComponent } from 'react';
import { View, Text, Image, Pressable, Animated} from 'react-native';
import { Swipeable } from 'react-native-gesture-handler';
import { Add } from '../Icons/Add';
import { CardProps } from './Card.types';
import styles from './Card.styles';
import { Trash } from '../Icons/Trash';

export const Card: FunctionComponent<CardProps> = ({
  weatherData,
  forecastData,
  isFavorite,
  addFavoriteCb,
  removeFavoriteCb,
}) => {
  const cardStyles = [
    styles.cardContent,
    isFavorite && styles.favoriteBackground,
  ];

  const deleteCard = () => {
    return (
      <>
        {isFavorite && removeFavoriteCb && (
          <Pressable 
            testID="card-trash-icon" 
            style={styles.deleteContainer}
            onPress={() => removeFavoriteCb({ id: weatherData.cityId })}>
            <Trash height={30} />
          </Pressable>  
        )}
      </>   
  )};

  return (
    <Swipeable
      renderRightActions={deleteCard}>
      <View testID="card" style={cardStyles}>
        {!isFavorite && addFavoriteCb && (
          <Pressable
            testID="card-add-icon"
            style={styles.iconContainer}
            onPress={() =>
              addFavoriteCb({
                id: weatherData.cityId,
                weather: weatherData,
                forecast: forecastData,
                isFavorite: true,
              })
            }
          >
            <Add height={20} />
          </Pressable>
        )}
        <View style={styles.weatherContent}>
          <View style={styles.weatherInfoLeft}>
            <View style={styles.weatherInfoLeftFirstLine}>
              <Text testID="card-name" style={styles.city}>
                {weatherData.name} ({weatherData.country})
              </Text>
              <Image
                style={styles.weatherIcon}
                source={{
                  uri: `https://openweathermap.org/img/w/${weatherData.icon}.png`,
                }}
              />
            </View>
            <Text testID="card-date">{weatherData.date}</Text>
            <Text testID="card-description">{weatherData.description}</Text>
          </View>
          <View style={styles.weatherInfoRight}>
            <Text testID="card-temperature" style={styles.temperature}>
              {weatherData.temperature}ºC
            </Text>
            <Text
              testID="card-temperature-max-min"
              style={styles.minMaxTemperature}
            >
              Máx. {weatherData.temperatureMax}ºC Min.{' '}
              {weatherData.temperatureMin}ºC
            </Text>
          </View>
        </View>
      </View>
    </Swipeable>
  );
};
