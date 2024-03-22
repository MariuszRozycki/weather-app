import "./Weather.css";

const WeatherItem = (props) => {
  return (
    <div className="weatherItem">
      <h2>{props.weatherItem.stacja}</h2>
      <p>Temp: {props.weatherItem.temperatura}°C. </p>
      <p>
        Pressure:{" "}
        {props.weatherItem.cisnienie
          ? props.weatherItem.cisnienie + " hpa"
          : "No data"}
      </p>
    </div>
  );
};

export default WeatherItem;
