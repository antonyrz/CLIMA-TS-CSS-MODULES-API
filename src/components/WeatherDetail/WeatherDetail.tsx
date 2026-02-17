import type {Weather} from "../../hooks/useWeather"
import { formatTemperature } from "../../utils"
import styles from "./WeatherDetail.module.css";

type WeatherDetailtProps = {
  weather: Weather,
}

export default function WeatherDetail({weather} : WeatherDetailtProps) {



  return (
    <div className={styles.container}>
      <h2>Clima de: {weather.name} </h2>
      <p className={styles.current}>Temperatura: {formatTemperature(weather.main.temp)}°C</p>
      <div className={styles.temperatures}>
          <p>Min: <span>{formatTemperature(weather.main.temp_min)}°C</span></p>
          <p>Max: <span>{formatTemperature(weather.main.temp_max)}°C</span></p>
      </div>
    </div>
  )
}
