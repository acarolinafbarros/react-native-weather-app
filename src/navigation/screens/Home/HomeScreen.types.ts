import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../App';

export type WeatherState = {
  cityId: number;
  country: string;
  date: string;
  description: string;
  icon: string;
  name: string;
  temperature: string;
  temperatureMax: string;
  temperatureMin: string;
};

export type ForecastState = {
  date: string;
  id: number;
  temperature: string;
};

export type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;
