import { useState } from "react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import SelectedInfo from "./components/SelectedInfo";
import WeatherContext from "./context";

function App() {
  const [metric, setMetric] = useState(false);
  const [geoCode, setGeoCode] = useState([{}]);
  const [weatherData, setWeatherData] = useState({});
  const [savedLocations, setSavedLocations] = useState([[]]);

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
