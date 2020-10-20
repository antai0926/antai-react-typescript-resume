import { ThunkAction } from 'redux-thunk';
import { RootState } from '../store';
import {
  WeatherAction,
  City,
  FETCH_WEATHER,
  CurrentWeather,
  Hours36Weather,
  SET_CITY,
} from '../types';
import { getFetchCurrentUrl, getFetch36hoursUrl } from '../../util/weatherUtil';

const fetchCurrentWeatherAsync = async (
  city: City
): Promise<CurrentWeather> => {
  const res = await fetch(getFetchCurrentUrl(city));
  const data = await res.json();
  const locationData = data.records.location[0];
  if (!locationData) {
    alert('喔不~現在所選縣市之觀測站目前無資訊!(CurrentWeather)');
    return {
      observationTime: new Date(),
      locationName: '',
      temperature: 0,
      windSpeed: 0,
      humid: 0,
    };
  }
  const weatherElements = locationData.weatherElement.reduce(
    (neededElements: any, item: any) => {
      if (['WDSD', 'TEMP', 'HUMD'].includes(item.elementName)) {
        neededElements[item.elementName] = item.elementValue;
      }
      return neededElements;
    },
    {}
  );
  const weatherData = {
    observationTime: locationData.time.obsTime,
    locationName: locationData.parameter[0].parameterValue,
    temperature: weatherElements.TEMP,
    windSpeed: weatherElements.WDSD,
    humid: weatherElements.HUMD,
  };
  return weatherData;
};

const fetch36HoursWeather = async (city: City): Promise<Hours36Weather> => {
  const res = await fetch(getFetch36hoursUrl(city));
  const data = await res.json();
  const locationData = data.records.location[0];
  if (!locationData) {
    alert('喔不~現在所選縣市之觀測站目前無資訊!(36Hours)');
    return {
      description: '',
      weatherCode: 0,
      rainPossibility: 0,
      comfortability: '',
    };
  }
  const weatherElements = locationData.weatherElement.reduce(
    (neededElements: any, item: any) => {
      if (['Wx', 'PoP', 'CI'].includes(item.elementName)) {
        neededElements[item.elementName] = item.time[0].parameter;
      }
      return neededElements;
    },
    {}
  );
  const weatherData = {
    description: weatherElements.Wx.parameterName,
    weatherCode: weatherElements.Wx.parameterValue,
    rainPossibility: weatherElements.PoP.parameterName,
    comfortability: weatherElements.CI.parameterName,
  };
  return weatherData;
};

export const fetchWeather = (
  city: City
): ThunkAction<void, RootState, null, WeatherAction> => {
  return async (dispatch) => {
    const [currentData, Hours36Data] = await Promise.all([
      fetchCurrentWeatherAsync(city),
      fetch36HoursWeather(city),
    ]);
    dispatch({
      type: FETCH_WEATHER,
      payload: { ...currentData, ...Hours36Data },
    });
  };
};

export const setCity = (
  city: City
): ThunkAction<void, RootState, null, WeatherAction> => {
  return (dispatch) => {
    dispatch({
      type: SET_CITY,
      payload: city,
    });
  };
};
