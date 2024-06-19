import React, { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import SelectedInfo from "./components/SelectedInfo";
import WeatherContext from "./context";
import { FetchWeather } from "./utils";

function App() {
  const [metric, setMetric] = useState(false);
  const [geoCode, setGeoCode] = useState([{}]);
  const [selectedLocation, setSelectedLocation] = useState({
    lat: 44.9429,
    lon: -123.0351,
    timezone: "America/Los_Angeles",
  });
  const [weatherData, setWeatherData] = useState({});
  const [savedLocations, setSavedLocations] = useState([[]]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    console.log("Use Effect");
    const fetchData = async () => {
      const data = await FetchWeather(
        selectedLocation.lat,
        selectedLocation.lon,
        encodeURIComponent(selectedLocation.timezone)
      );
      setWeatherData(data);
    };
    // fetchData();
  }, [selectedLocation]);

  return (
    <div className="App mx-auto max-w-screen-xl h-[100vh] mt-4 py-5 px-32 bg-gradient-to-br shadow-xl shadow-gray-400">
      <WeatherContext.Provider
        value={{
          metric,
          setMetric,
          geoCode,
          setGeoCode,
          weatherData,
          setWeatherData,
          savedLocations,
          setSavedLocations,
          isLoading,
          setIsLoading,
        }}
      >
        <NavBar />
        <SelectedInfo />
        <Footer />
      </WeatherContext.Provider>
    </div>
  );
}

export default App;
