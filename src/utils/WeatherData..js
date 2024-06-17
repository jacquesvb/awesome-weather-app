import { useContext } from "react";
import useQuery from "../hooks/useQuery";
import { getWeatherMetric } from "../services/weatherService";
import WeatherContext from "../context";

function WeatherData(lat, lon, timezone) {
  const { setIsLoading } = useContext(WeatherContext);
  const {
    data: weather,
    isLoading: weatherLoading,
    isSuccess: weatherSuccess,
    error,
    refetch,
  } = useQuery(getWeatherMetric(lat, lon, timezone));
  setIsLoading(weatherLoading);
  return { weather, weatherLoading, weatherSuccess, error, refetch };
}

export default WeatherData;
