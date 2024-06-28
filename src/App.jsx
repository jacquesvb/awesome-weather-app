import { useState, useEffect } from "react";
import { Navbar, Typography, Switch } from "@material-tailwind/react";
import Search from "./components/Search";
import Footer from "./components/Footer";
import SelectedInfo from "./components/SelectedInfo";
import WeatherContext from "./context";

function App() {
  const [metric, setMetric] = useState(false);
  const [selectedCity, setSelectedCity] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [options, setOptions] = useState([]);

  const handleMetricChange = () => setMetric(!metric);
  useEffect(() => {
    if (selectedCity) {
      console.log("City has been selected: ", selectedCity.name);
      setOptions([]);
      const lat = selectedCity.lat;
      const lon = selectedCity.lon;
      const units = metric ? "imperial" : "metric";
      try {
        fetch(
          `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=${units}&lang=en&appid=${
            import.meta.env.VITE_OPEN_WEATHER_API_KEY
          }`
        )
          .then((res) => res.json())
          .then((data) => {
            const forecastData = {
              ...data.city,
              list: data.list.slice(0, 16),
            };
            setForecast(forecastData);
            console.log("Forecast Data: ", forecastData);
          });
      } catch (error) {
        console.error({ error });
      }
    }
  }, [selectedCity]);
  if (forecast) console.log("Forecast: ", forecast);
  return (
    <div className="App mx-auto max-w-screen-xl h-[100vh] mt-4 py-5 px-32 bg-gradient-to-br shadow-xl shadow-gray-400">
      <WeatherContext.Provider
        value={{ metric, setSelectedCity, options, setOptions }}
      >
        <Navbar className="col-span-12 h-[8vh] mx-auto max-w-screen-xl px-4 lg:px-8 flex items-center justify-between bg-gradient-to-r from-sky-700 to-indigo-800">
          <div className="text-blue-gray-900">
            <Typography className="pointer-events-none text-white font-bold">
              Awesome Weather
            </Typography>
          </div>
          <div className="flex items-center space-x-4 w-72">
            <Search />
          </div>
          <div>
            <span className="mr-4">°F</span>
            <Switch onChange={handleMetricChange} checked={metric} />
            <span className="ml-4 bold">°C</span>
          </div>
        </Navbar>
        {selectedCity && selectedCity.name}
        {forecast && <SelectedInfo data={forecast} metric={metric} />}
        <Footer />
      </WeatherContext.Provider>
    </div>
  );
}

export default App;
