import "./WeatherItemDetails.css";

const WeatherItemDetails = (props) => {
  console.log(props);
  if (!props.item) return null;

  return (
    <div onClick={props.onClose} ref={props.modalRef} className="modal">
      <div className="modal-content">
        <button
          className="closeModal-btn"
          ref={props.buttonRef}
          onClick={(e) => props.onClose}
        >
          X
        </button>
        <div className="modal-content--data">
          <h2>{props.item.stacja}</h2>
          <p>Pressure: {props.item.cisnienie} hpa</p>
          <p>Measure date: {props.item.data_pomiaru} </p>
          <p>Time of measure: {props.item.godzina_pomiaru}:00 hour</p>
          <p>Wind direction: {props.item.kierunek_wiatru}° </p>
          <p>Wind speed: {props.item.predkosc_wiatru} m/s </p>
          <p>Total rainfall: {props.item.suma_opadu} mm </p>
          <p>Temperature: {props.item.temperatura}°C </p>
          <p>Relative humidity: {props.item.wilgotnosc_wzgledna}% </p>
        </div>
      </div>
    </div>
  );
};

export default WeatherItemDetails;
