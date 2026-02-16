import type {Weather} from "../../hooks/useWeather"

type WeatherDetailtProps = {
  weather: Weather
}

export default function WeatherDetail({weather} : WeatherDetailtProps) {
  return (
    <div>{weather.name}</div>
  )
}
