export const convertTime = (hours, minutes = null) => {
  const ampm = hours >= 12 ? "PM" : "AM";
  let hour = hours % 12;
  hour = hour ? hour : 12;
  if (minutes) return `${hour}:${minutes} ${ampm}`;
  return `${hour} ${ampm}`;
};

export const getSun = (timestamp) => {
  const date = new Date(timestamp * 1000);
  let hours = date.getHours().toString();
  let minutes = date.getMinutes().toString();

  if (hours.length <= 1) hours = `${hours}`;
  if (minutes.length <= 1) minutes = `0${minutes}`;

  return convertTime(hours, minutes);
};

export const getWind = (deg) => {
  if (deg > 15 && deg <= 75) return "NE";
  if (deg > 76 && deg <= 105) return "E";
  if (deg > 105 && deg <= 165) return "SE";
  if (deg > 166 && deg <= 195) return "S";
  if (deg > 195 && deg <= 255) return "SW";
  if (deg > 255 && deg <= 285) return "W";
  if (deg > 285 && deg <= 345) return "NW";

  return "N";
};

export const getPrecipitation = (value) => {
  if (value <= 0.33) return "Low probability";
  if (value > 0.33 && value <= 0.66) return "Moderate probablity";
  return "High probability";
};

export const getHumidity = (level) => {
  if (level <= 55) return "Dry";
  if (level > 55 && level <= 65) return "Humid";
  return "Very Humid";
};

export const getVisibility = (number) => {
  if (number <= 50) return "Pea Soup Fog";
  if (number > 50 && number <= 500) return "Heavy Fog";
  if (number > 500 && number <= 2000) return "Moderate Fog";
  if (number > 2000 && number <= 9000) return "Light Fog";

  return "Clear";
};

export const getDay = (timestamp) => {
  const date = new Date(timestamp * 1000);
  const day = date.toLocaleDateString("en-US", { weekday: "short" });
  return `${day}`;
};

export const getTime = (timestamp) => {
  const date = new Date(timestamp * 1000);
  const hours = convertTime(date.getHours());
  return `${hours}`;
};
