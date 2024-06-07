import axios from "axios";

const WEATHER_API_URL = "https://api.open-meteo.com/v1/forecast?";

const API = axios.create({
  baseURL: WEATHER_API_URL,
});

export const getWeatherImperial = (lat, lon, timezone) => {
  API.get(
    `latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,rain,showers,snowfall,cloud_cover,wind_speed_10m&hourly=&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset,uv_index_max&temperature_unit=fahrenheit&wind_speed_unit=mph&precipitation_unit=inch&timezone=${encodeURIComponent(
      timezone
    )}&models=best_match`
  ).then(({ data }) => data);
};

export const getWeatherMetric = (lat, lon, timezone) => {
  API.get(
    `latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,rain,showers,snowfall,cloud_cover,wind_speed_10m&hourly=&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset,uv_index_max&temperature_unit=celsius&wind_speed_unit=m_s&precipitation_unit=mm&timezone=${encodeURIComponent(
      timezone
    )}&models=best_match`
  ).then(({ data }) => data);
};
// Weather API: "https://api.open-meteo.com/v1/forecast?latitude=44.9429&longitude=-123.0351&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,rain,showers,snowfall,cloud_cover,wind_speed_10m&hourly=&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset,uv_index_max&temperature_unit=fahrenheit&wind_speed_unit=mph&precipitation_unit=inch&timezone=America%2FLos_Angeles&models=best_match"
// Weather API metric: "https://api.open-meteo.com/v1/forecast?latitude=44.9429&longitude=-123.0351&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,rain,showers,snowfall,cloud_cover,wind_speed_10m&hourly=&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset,uv_index_max&timezone=America%2FLos_Angeles&models=best_match"
