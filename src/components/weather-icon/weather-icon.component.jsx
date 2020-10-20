import React, { useEffect, useState } from 'react';
import './weather-icon.styles.scss';
import { useSelector } from 'react-redux';
import { weatherTypes } from '../../util/weather-icon.data';

import { ReactComponent as DayThunderstorm } from '../../assets/images/day-thunderstorm.svg';
import { ReactComponent as DayClear } from '../../assets/images/day-clear.svg';
import { ReactComponent as DayCloudyFog } from '../../assets/images/day-cloudy-fog.svg';
import { ReactComponent as DayCloudy } from '../../assets/images/day-cloudy.svg';
import { ReactComponent as DayFog } from '../../assets/images/day-fog.svg';
import { ReactComponent as DayPartiallyClearWithRain } from '../../assets/images/day-partially-clear-with-rain.svg';
import { ReactComponent as DaySnowing } from '../../assets/images/day-snowing.svg';
import { ReactComponent as NightThunderstorm } from '../../assets/images/night-thunderstorm.svg';
import { ReactComponent as NightClear } from '../../assets/images/night-clear.svg';
import { ReactComponent as NightCloudyFog } from '../../assets/images/night-cloudy-fog.svg';
import { ReactComponent as NightCloudy } from '../../assets/images/night-cloudy.svg';
import { ReactComponent as NightFog } from '../../assets/images/night-fog.svg';
import { ReactComponent as NightPartiallyClearWithRain } from '../../assets/images/night-partially-clear-with-rain.svg';
import { ReactComponent as NightSnowing } from '../../assets/images/night-snowing.svg';

const WeatherIcon = () => {
  const weatherIcons = {
    day: {
      isThunderstorm: <DayThunderstorm />,
      isClear: <DayClear />,
      isCloudyFog: <DayCloudyFog />,
      isCloudy: <DayCloudy />,
      isFog: <DayFog />,
      isPartiallyClearWithRain: <DayPartiallyClearWithRain />,
      isSnowing: <DaySnowing />,
    },
    night: {
      isThunderstorm: <NightThunderstorm />,
      isClear: <NightClear />,
      isCloudyFog: <NightCloudyFog />,
      isCloudy: <NightCloudy />,
      isFog: <NightFog />,
      isPartiallyClearWithRain: <NightPartiallyClearWithRain />,
      isSnowing: <NightSnowing />,
    },
  };

  const { weatherCode } = useSelector((state) => state.weather.weatherData);

  const [currentWeatherIcon, setCurrentWeatherIcon] = useState('isClear');

  useEffect(() => {
    const weatherCode2Type = (weatherCode) => {
      const [weatherType] =
        Object.entries(weatherTypes).find(([weatherType, weatherCodes]) =>
          weatherCodes.includes(Number(weatherCode))
        ) || [];

      return weatherType;
    };
    const currentWeatherIcon = weatherCode2Type(weatherCode);
    setCurrentWeatherIcon(currentWeatherIcon);
  }, [weatherCode]);

  let taiwanHour = new Date().getUTCHours + 8;
  taiwanHour = taiwanHour > 24 ? taiwanHour - 24 : taiwanHour;
  const moment = taiwanHour >= 18 || taiwanHour < 6 ? 'night' : 'day';

  return (
    <div className="weather-icon">
      {weatherIcons[moment][currentWeatherIcon]}
    </div>
  );
};

export default WeatherIcon;
