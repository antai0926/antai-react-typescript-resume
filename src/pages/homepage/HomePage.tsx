import React, { FC, useEffect } from 'react';
import './HomePage.scss';
import { useSelector, useDispatch } from 'react-redux';
import { fetchWeather } from '../../redux/actions/weatherAction';
import NavBar from '../../components/navbar/NavBar';
import WeatherCard from '../../components/weather-card/WeatherCard';
import { RootState } from '../../redux/store';
import { City } from '../../redux/types';

const HomePage: FC = () => {
  const dispatch = useDispatch();
  const city: City = useSelector((state: RootState) => state.weather.city);

  useEffect(() => {
    const getWeather = (city: City): void => {
      dispatch(fetchWeather(city));
    };
    getWeather(city);
  }, [city, dispatch]);
  return (
    <div className="homepage">
      <NavBar />
      <div className="container">
        <WeatherCard />
      </div>
    </div>
  );
};

export default HomePage;
