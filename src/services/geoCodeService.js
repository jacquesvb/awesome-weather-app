import axios from "axios";

const GEOCODE_API_URL = "https://geocoding-api.open-meteo.com/v1/search?name=";

const API = axios.create({
  baseURL: GEOCODE_API_URL,
});

export const getGeoCode = (name) => {
  API.get(`${encodeURIComponent(name)}&count=5&language=en&format=json`).then(
    ({ data }) => data
  );
};

// Geocode API: "https://geocoding-api.open-meteo.com/v1/search?name=Salem&count=5&language=en&format=json"
