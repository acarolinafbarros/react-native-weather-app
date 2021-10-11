import React, { ReactElement, useCallback, useEffect, useState } from 'react';
import { View, Text, ScrollView, Pressable } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import GetLocation from 'react-native-get-location';
import { addFavorite, removeFavorite } from '../../../redux/actions';
import {
  getWeather,
  getForecast,
  getCityWeather,
  getCityForecast,
} from '../../../data/requests';
import {
  INVALID_INPUT,
  FETCH_ERROR,
  SERVICE_TIMEOUT,
  AUTHORIZATION_DENIED,
  SERVICE_UNAVAILABLE,
} from '../../../utils/messagesKeys';
import { SearchBar } from '../../../components/SearchBar/SearchBar';
import { Card } from '../../../components/Card/Card';
import styles from './HomeScreen.styles';
import { Location } from '../../../components/Icons/Location';
import { ForecastState, HomeProps, WeatherState } from './HomeScreen.types';
import { RootState } from '../../../redux/types';

function HomeScreen({ navigation }: HomeProps): ReactElement {
  const [lat, setLat] = useState<number>();
  const [long, setLong] = useState<number>();
  const [weatherData, setWeatherData] = useState<WeatherState>();
  const [forecastData, setForecast] = useState<ForecastState[]>();

  const [firstLoading, setFirstLoading] = useState<boolean>(true);
  const [inputStatusError, setInputStatusError] = useState<boolean>(false);
  const [inputMessageError, setInputMessageError] = useState('');

  const favorites = useSelector((state: RootState) => {
    return state.favorites;
  });
  const dispatch = useDispatch();

  useEffect(() => {
    if (!lat && !long) {
      GetLocation.getCurrentPosition({
        enableHighAccuracy: true,
        timeout: 15000,
      })
        .then(location => {
          setLat(location.latitude);
          setLong(location.longitude);
        })
        .catch(error => {
          const { code } = error;
          setInputStatusError(true);

          if (code === 'UNAVAILABLE') {
            setInputMessageError(SERVICE_UNAVAILABLE);
          }
          if (code === 'TIMEOUT') {
            setInputMessageError(SERVICE_TIMEOUT);
          }
          if (code === 'UNAUTHORIZED') {
            setInputMessageError(AUTHORIZATION_DENIED);
          }

          // Default location Lisbon (PT)
          setLat(38.71667);
          setLong(-9.13333);
        });
    }

    if (lat && long) {
      getWeather(lat, long)
        .then(weather => {
          setWeatherData(weather);
          setFirstLoading(false);
        })
        .catch(() => {
          setInputStatusError(true);
          setInputMessageError(FETCH_ERROR);
        });

      getForecast(lat, long)
        .then(data => {
          setForecast(data);
        })
        .catch(() => {
          setInputStatusError(true);
          setInputMessageError(FETCH_ERROR);
        });
    }
  }, [lat, long]);

  const searchSubmit = useCallback((searchValue: string) => {
    if (!searchValue) {
      setInputStatusError(true);
      setInputMessageError(INVALID_INPUT);
    } else {
      getCityWeather(searchValue)
        .then(data => {
          setFirstLoading(true);
          setInputStatusError(false);
          setWeatherData(data);
        })
        .catch(() => {
          setInputStatusError(true);
          setInputMessageError(FETCH_ERROR);
        });

      getCityForecast(searchValue)
        .then(data => {
          setInputStatusError(false);
          setForecast(data);
        })
        .catch(() => {
          setInputStatusError(true);
          setInputMessageError(FETCH_ERROR);
        });
    }
  }, []);

  const addFavoriteCb = useCallback(
    card => {
      dispatch(addFavorite(card));
    },
    [dispatch],
  );

  const removeFavoriteCb = useCallback(
    id => {
      dispatch(removeFavorite(id));
    },
    [dispatch],
  );

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.homeContainer}>
        <Text style={styles.header}>Weather App</Text>
        <SearchBar
          searchSubmit={searchSubmit}
          inputStatusError={inputStatusError}
          inputMessageError={inputMessageError}
        />
        {firstLoading && !weatherData && (
          <Text>Searching current location ...</Text>
        )}
        {!firstLoading && weatherData && (
          <View style={styles.locationContainer}>
            <Location />
            <Text style={styles.currentLocation}>{weatherData.name}</Text>
          </View>
        )}
        {weatherData && forecastData && (
          <View style={styles.cardCollection}>
            <Pressable
              onPress={() =>
                navigation.navigate('Details', { weatherData, forecastData })
              }
            >
              <Card
                weatherData={weatherData}
                forecastData={forecastData}
                addFavoriteCb={addFavoriteCb}
                isFavorite={false}
              />
            </Pressable>
          </View>
        )}
        {favorites.length > 0 && (
          <View style={styles.favoritesCollection}>
            <Text style={styles.favorites}>My favorites</Text>
            <View>
              {favorites.map(fav => (
                <Pressable
                  key={fav.id}
                  onPress={() =>
                    navigation.navigate('Details', {
                      weatherData: fav.weather,
                      forecastData: fav.forecast,
                    })
                  }
                >
                  <Card
                    key={fav.id}
                    weatherData={fav.weather}
                    forecastData={fav.forecast}
                    isFavorite={fav.isFavorite}
                    removeFavoriteCb={removeFavoriteCb}
                  />
                </Pressable>
              ))}
            </View>
          </View>
        )}
      </View>
    </ScrollView>
  );
}

export default HomeScreen;
