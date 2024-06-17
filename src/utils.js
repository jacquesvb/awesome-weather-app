import { useContext } from "react";
import axios from "axios";
import useQuery from "./hooks/useQuery";
import { getWeatherMetric } from "./services/weatherService";
import WeatherContext from "./context";

// export function WeatherData(lat, lon, timezone) {
//   const { setIsLoading } = useContext(WeatherContext);
//   const {
//     data: weather,
//     isLoading: weatherLoading,
//     isSuccess: weatherSuccess,
//     error,
//     refetch,
//   } = useQuery(getWeatherMetric(lat, lon, timezone));
//   setIsLoading(weatherLoading);
//   return { weather, weatherLoading, weatherSuccess, error, refetch };
// }

export function WeatherData(lat, lon, timezone) {
  const { setIsLoading, setWeatherData } = useContext(WeatherContext);
  const WEATHER_API_URL = "https://api.open-meteo.com/v1/forecast?";

  const API = axios.create({
    baseURL: WEATHER_API_URL,
  });
  setIsLoading(true);
  API.get(
    `latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,rain,showers,snowfall,cloud_cover,wind_speed_10m&hourly=&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset,uv_index_max&temperature_unit=celsius&wind_speed_unit=m_s&precipitation_unit=mm&timezone=${encodeURIComponent(
      timezone
    )}&models=best_match`
  ).then((response) => {
    setWeatherData(response.data);
    setIsLoading(false);
  });
}
