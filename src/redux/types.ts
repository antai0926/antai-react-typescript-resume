export const FETCH_WEATHER = 'FETCH_WEATHER';
export const SET_CITY = 'SET_CITY';

export interface CurrentWeather {
  observationTime: Date;
  locationName: string;
  temperature: number;
  windSpeed: number;
  humid: number;
}

export interface Hours36Weather {
  description: string;
  weatherCode: number;
  rainPossibility: number;
  comfortability: string;
}

export type WeatherData = CurrentWeather & Hours36Weather;

export interface City {
  currentUsed: string;
  hour36Used: string;
}

interface FetchWeatherAction {
  type: typeof FETCH_WEATHER;
  payload: WeatherData;
}

interface SetCityAction {
  type: typeof SET_CITY;
  payload: City;
}

export type WeatherAction = FetchWeatherAction | SetCityAction;
