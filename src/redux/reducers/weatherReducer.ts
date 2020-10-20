import {
  WeatherData,
  City,
  FETCH_WEATHER,
  SET_CITY,
  WeatherAction,
} from '../types';

interface WeatherState {
  weatherData: WeatherData;
  city: City;
}

const initialState: WeatherState = {
  weatherData: {
    observationTime: new Date(),
    locationName: '',
    humid: 0,
    temperature: 0,
    windSpeed: 0,
    description: '',
    weatherCode: 0,
    rainPossibility: 0,
    comfortability: '',
  },
  city: {
    currentUsed: '桃園',
    hour36Used: '桃園市',
  },
};

export default (state = initialState, action: WeatherAction): WeatherState => {
  switch (action.type) {
    case FETCH_WEATHER:
      return {
        ...state,
        weatherData: action.payload,
      };
    case SET_CITY:
      return {
        ...state,
        city: action.payload,
      };
    default:
      return state;
  }
};
