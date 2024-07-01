import { useContext } from "react";
import { Card, CardBody } from "@material-tailwind/react";
import Degree from "./helper/Degree";
import { getDay, getTime } from "../util";
import WeatherContext from "../context";

const Forecast = () => {
  const { forecast } = useContext(WeatherContext);

  return (
    <Card className="col-start-2 col-span-10 w-full bg-primary text-primary-content border bg-gradient-to-r from-sky-700 to-indigo-800">
      <CardBody>
        <div className="flex overflow-x-scroll mt-4 pb-2 mb-5">
          {forecast?.list.map((item, i) => (
            <div
              key={i}
              className="inline-block text-center w-[100px] flex-shrink-0"
            >
              <p className="text-sm">{getDay(item.dt)}</p>
              <p className="text-sm">{getTime(item.dt)}</p>
              <img
                alt={`weather-icon-${item.weather[0].description}`}
                src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
              />
              <p className="text-sm font-bold">
                <Degree temp={Math.round(item.main.temp)} />
              </p>
            </div>
          ))}
        </div>
      </CardBody>
    </Card>
  );
};

export default Forecast;
