import React, { ReactElement } from 'react';
import { View, Text, Image } from 'react-native';
import { Forecast } from '../../../components/Card/Card.types';
import { DetailsProps } from './Details.types';
import styles from './DetailsScreen.styles';

function DetailsScreen({ route }: DetailsProps): ReactElement {
  const { weatherData, forecastData } = route.params;

  return (
    <View style={styles.detailsContainer}>
      <View style={styles.weatherContent}>
        <Image
          style={styles.weatherIcon}
          source={{
            uri: `https://openweathermap.org/img/w/${weatherData.icon}.png`,
          }}
        />
        <Text style={styles.city}>{weatherData.name}</Text>
        <Text style={styles.temperature}>{weatherData.temperature} ºC</Text>
        <Text>{weatherData.description}</Text>
        <Text>
          Máx. {weatherData.temperatureMax}ºC Min. {weatherData.temperatureMin}
          ºC
        </Text>
      </View>

      <View style={styles.forecastContent}>
        <Text style={styles.forecast}>Forecast (5 days)</Text>
        {forecastData.map((forecast: Forecast) => (
          <View style={styles.forecastItem} key={forecast.id}>
            <Text style={styles.forecastItemDate}>{forecast.date}</Text>
            <Text style={styles.forecastItemTemperature}>
              {forecast.temperature} ºC
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
}

export default DetailsScreen;
