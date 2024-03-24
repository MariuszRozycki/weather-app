import "./Weather.css";
import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { baseApi } from "../services/baseApi";
import WeatherItem from "./WeatherItem";
import SearchWeather from "./SearchWeather";
import WeatherItemDetails from "./WeatherItemDetails";

const Weather = () => {
  const [weatherData, setWeatherData] = useState([]);
  const [weatherDataAfterFilter, setWeatherDataAfterFilter] = useState([]);
  const [activeWeatherItem, setActiveWeatherItem] = useState(null);
  const modalRef = useRef();
  const buttonRef = useRef();

  const getWeatherData = async () => {
    try {
      const res = await axios.get(baseApi);
      setWeatherData(res.data);
      setWeatherDataAfterFilter(res.data);
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

  const showDetails = (item) => {
    setActiveWeatherItem(item);
  };

  const closeDetails = (e) => {
    e.preventDefault();
    console.log(e.target);
    if (e.target === modalRef.current) {
      setActiveWeatherItem(null);
    } else if (e.target === buttonRef.current) {
      setActiveWeatherItem(null);
    }
  };

  useEffect(() => {
    getWeatherData();
  }, []);

  return (
    <div className="weather">
      <h1>Weather forecast for Poland</h1>
      <SearchWeather filterWeather={filterWeather} />
      <div className="weatherList">
        {weatherDataAfterFilter.map((weatherItem) => {
          return (
            <WeatherItem
              key={weatherItem.id_stacji}
              weatherItem={weatherItem}
              onClick={() => showDetails(weatherItem)}
            />
          );
        })}
        {activeWeatherItem && (
          <WeatherItemDetails
            item={activeWeatherItem}
            modalRef={modalRef}
            buttonRef={buttonRef}
            onClose={closeDetails}
          />
        )}
      </div>
    </div>
  );
};

export default Weather;
