import React, { ReactElement } from 'react';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore, Store } from 'redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore, persistReducer } from 'redux-persist';
import { reducers } from './src/redux/reducers';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import thunk from 'redux-thunk';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/navigation/screens/Home/HomeScreen';
import DetailsScreen from './src/navigation/screens/Details/DetailsScreen';
import { CardAction, DispatchType, FavoriteState } from './src/redux/types';
import { PersistPartial } from 'redux-persist/es/persistReducer';
import {
  ForecastState,
  WeatherState,
} from './src/navigation/screens/Home/HomeScreen.types';

export type RootStackParamList = {
  Home: undefined;
  Details: {
    weatherData: WeatherState;
    forecastData: ForecastState[];
  };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function App(): ReactElement {
  // configure persist store
  const reduxPersistConfig = {
    key: 'root',
    storage: AsyncStorage,
  };

  const reducer = persistReducer(reduxPersistConfig, reducers);
  const store: Store<
    { favorites: FavoriteState[] } & PersistPartial,
    CardAction
  > & { dispatch: DispatchType } = createStore(reducer, applyMiddleware(thunk));
  const persistor = persistStore(store);

  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: 'white',
    },
  };

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaProvider>
          <NavigationContainer theme={theme}>
            <Stack.Navigator initialRouteName="Home">
              <Stack.Screen name="Home" component={HomeScreen} />
              <Stack.Screen name="Details" component={DetailsScreen} />
            </Stack.Navigator>
          </NavigationContainer>
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
