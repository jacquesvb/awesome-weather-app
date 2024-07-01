import { useContext } from "react";
import { BiPlusCircle } from "react-icons/bi";
import { FaTemperatureThreeQuarters } from "react-icons/fa6";
import { FiSunrise, FiSunset } from "react-icons/fi";
import { Card, CardBody } from "@material-tailwind/react";
import Degree from "./helper/Degree";
import { getSun } from "../util";
import WeatherContext from "../context";

const MainPanel = () => {
  const { selectedCity, forecast } = useContext(WeatherContext);
  const today = forecast?.list[0];
  return (
    <Card className="col-span-6 w-full bg-primary text-primary-content border bg-gradient-to-r from-sky-700 to-indigo-800">
      <CardBody>
        <div className="grid grid-cols-3 gap-2 justify-between items-start">
          <h2 className="card-title font-bold text-2xl self-center col-span-2">
            {selectedCity &&
              `${selectedCity.name}, ${selectedCity.state} ${selectedCity.country}`}
          </h2>
          <div className="card-actions justify-self-end col-span-1">
            <button className="btn bg-transparent p-0 border-0 hover:bg-transparent text-primary-content">
              <BiPlusCircle size={25} />
            </button>
          </div>
          <div className="col-span-1 text-2xl">
            Current:{" "}
            <span className="col-span-2 text-4xl">
              <Degree temp={Math.round(today?.main.temp)} />
            </span>
          </div>
          <div className="col-span-1 items-center justify-self-center py-4">
            <FaTemperatureThreeQuarters size={50} />
          </div>
          <div className="col-span-1 text-2xl">
            Feels Like:{" "}
            <span className="col-span-2 text-4xl">
              <Degree temp={Math.round(today?.main.feels_like)} />
            </span>
          </div>
          <div className="col-span-1" />
          <div className="col-span-3 text-xl self-center justify-self-center">
            {today.weather[0].main} ({today.weather[0].description})
          </div>
          <div className="col-span-2 text-2xl py-4">
            High: <Degree temp={Math.ceil(today.main.temp_max)} />
          </div>
          <div className="col-span-1 text-2xl py-4">
            Low: <Degree temp={Math.floor(today.main.temp_min)} />
          </div>

          <div className="font-bold col-span-2 flex items-center py-4 mb-5">
            <FiSunrise size={50} />{" "}
            <span className="m-2">{getSun(forecast.sunrise)}</span>
          </div>
          <div className="font-bold col-span-1 flex items-center py-4 mb-5">
            <FiSunset size={50} />{" "}
            <span className="m-2">{getSun(forecast.sunset)}</span>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default MainPanel;
