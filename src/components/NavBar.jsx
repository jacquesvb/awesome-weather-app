import { useContext, useState, useEffect } from "react";
import WeatherContext from "../context";
import { Navbar, Typography, Input, Switch } from "@material-tailwind/react";
import { BiSearch } from "react-icons/bi";
import FindForm from "./FindForm";

const NavBar = () => {
  const [locations, setLocations] = useState([]);
  const { metric, setMetric } = useContext(WeatherContext);
  const handleChange = () => setMetric(!metric);
  const handleInputChange = (e) => {
    const inputValue = e.target;
    setLocations(inputValue.value);
  };

  useEffect(() => {
    console.log("City Search: ", locations);
  }, [locations]);

  return (
    <Navbar className="col-span-12 h-[8vh] mx-auto max-w-screen-xl px-4 py-2 lg:px-8 lg:py-4 bg-gradient-to-r from-sky-700 to-indigo-800">
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
        <Typography className="mr-4 pointer-events-none py-1.5 font-medium">
          Awesome Weather
        </Typography>
        <div className="flex items-center space-x-4 w-72">
          <Input
            label="location search..."
            icon={<BiSearch />}
            onChange={handleInputChange}
            value={locations}
          />
        </div>
        <div>
          <span className="mr-4">°F</span>
          <Switch onChange={handleChange} checked={metric} />
          <span className="ml-4 bold">°C</span>
        </div>
      </div>
    </Navbar>
  );
};

export default NavBar;

// https://open-meteo.com/en/docs#current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,wind_speed_10m,wind_direction_10m&hourly=temperature_2m,relative_humidity_2m,dew_point_2m,apparent_temperature,precipitation_probability,precipitation,rain,cloud_cover,visibility,wind_speed_10m,wind_direction_10m&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset,daylight_duration,rain_sum,precipitation_probability_max&temperature_unit=fahrenheit&wind_speed_unit=mph&precipitation_unit=inch&timezone=America%2FLos_Angeles
// curl "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,rain,showers,snowfall,cloud_cover,wind_speed_10m&hourly=&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset,uv_index_max&temperature_unit=fahrenheit&wind_speed_unit=mph&precipitation_unit=inch&timezone=America%2FLos_Angeles&models=best_match"
