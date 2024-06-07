import axios from "axios";

const MAP_API_URL = "https://static-maps.yandex.ru/1.x/?lang=en-US&ll=";

const API = axios.create({
  baseURL: MAP_API_URL,
});

export const getMap = (lat, lon, width, height) => {
  API.get(`${lon},${lat}&z=9&l=map&size=${width},${height}`).then(
    ({ data }) => data
  );
};

// `${mapApi}${lon},${lat}&z=9&l=map&size=600,300`;
