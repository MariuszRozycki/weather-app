import { useEffect, useState } from "react";
import "./Weather.css";
import axios from "axios";
import { baseApi } from "../services/baseApi";
import WeatherItem from "./WeatherItem";
import SearchWeather from "./SearchWeather";

const Weather = () => {
  const [weatherData, setWeatherData] = useState([]);
  const [weatherDataAfterFilter, setWeatherDataAfterFilter] = useState([]);

  const getWeatherData = () => {
    try {
      axios.get(baseApi).then((res) => {
        setWeatherData(res.data);
        setWeatherDataAfterFilter(res.data);
      });
    } catch (error) {
      console.error(error);
    }
  };

  const filterWeather = (searchValue) => {
    console.log(searchValue);

    const filteredWeatherDate = weatherData.filter((weatherItem) =>
      weatherItem.stacja.toLowerCase().includes(searchValue.toLowerCase())
    );

    setWeatherDataAfterFilter(filteredWeatherDate);
  };

  useEffect(() => {
    getWeatherData();
  }, []);

  return (
    <div className="weather">
      <h1>Weather forecast</h1>
      <SearchWeather filterWeather={filterWeather} />
      <div className="weatherList">
        {weatherDataAfterFilter.map((weatherItem) => {
          return (
            <WeatherItem
              key={weatherItem.id_stacji}
              weatherItem={weatherItem}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Weather;
