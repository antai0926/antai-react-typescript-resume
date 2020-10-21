import React, { FC } from 'react';
import './WeatherCard.scss';
import WeatherIcon from '../weather-icon/weather-icon.component';
import { ReactComponent as AirFlowIcon } from '../../assets/images/airFlow.svg';
import { ReactComponent as RainIcon } from '../../assets/images/rain.svg';
import { ReactComponent as RefreshIcon } from '../../assets/images/refresh.svg';
import { useSelector, useDispatch } from 'react-redux';
import { fetchWeather } from '../../redux/actions/weatherAction';
import { RootState } from '../../redux/store';
const WeatherCard: FC = () => {
  const { weatherData, city } = useSelector(
    (state: RootState) => state.weather
  );
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(fetchWeather(city));
  };

  return (
    <div className="weather-card">
      <div className="location">{weatherData.locationName}</div>
      <div className="description">
        {weatherData.description}&nbsp;&nbsp;&nbsp;
        {weatherData.comfortability}
      </div>
      <div className="currentWeather">
        <div className="temperature">
          {Math.round(weatherData.temperature)}
          <div className="celsius">°C</div>
        </div>
        <WeatherIcon />
      </div>
      <div className="airflow">
        <AirFlowIcon />
        {weatherData.windSpeed} m/h
      </div>
      <div className="rain">
        <RainIcon />
        {Math.round(weatherData.rainPossibility)} %
      </div>
      <div className="refresh">
        最後觀測時間：
        {new Intl.DateTimeFormat('zh-TW', {
          hour: 'numeric',
          minute: 'numeric',
        }).format(new Date(weatherData.observationTime))}{' '}
        <RefreshIcon onClick={handleClick} />
      </div>
    </div>
  );
};

export default WeatherCard;
