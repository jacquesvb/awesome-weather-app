import { useContext } from "react";
import { Card, CardBody } from "@material-tailwind/react";
import { getWind, getVisibility, getPrecipitation } from "../util";
import WeatherContext from "../context";

const DetailPanel = () => {
  const { forecast, metric } = useContext(WeatherContext);
  const today = forecast?.list[0];
  return (
    <Card className="col-span-6 w-full bg-primary text-primary-content border bg-gradient-to-r from-sky-700 to-indigo-800">
      <CardBody>
        <div className="grid grid-cols-3 gap-2 justify-between items-start">
          <div className="card-title font-bold text-2xl self-center col-span-3">
            Details
          </div>
          <div className="col-span-1 text-2xl self-center">Wind:</div>
          <div className="col-span-2 text-xl self-center">
            {`${getWind(Math.round(today.wind.deg))} ${Math.round(
              today.wind.speed
            )} ${metric ? `km/h` : `mph`}, gusts ${today.wind.gust.toFixed(1)}`}
            <span className="ml-2 text-xl">{metric ? `km/h` : `mph`} </span>
          </div>
          <div className="col-span-1 text-2xl self-center py-4">Pressure:</div>
          <div className="col-span-2 text-2xl self-center">
            {today.main.pressure} hPa
          </div>
          <div className="col-span-1 text-2xl self-center py-4">
            Visibility:
          </div>
          <div className="col-span-1 text-2xl self-center justify-self-end">
            {metric
              ? `${(today.visibility / 1000).toFixed()} km`
              : `${(today.visibility / 1609).toFixed()} mi`}
          </div>
          <div className="col-span-1 text-2xl py-4 justify-self-end">
            {getVisibility(today.visibility)}
          </div>
          <div className="col-span-1 text-2xl self-center py-4">Humidity:</div>
          <div className="col-span-1 text-2xl self-center justify-self-end">
            {today.main.humidity}%
          </div>
          <div className="col-span-1" />
          <div className="col-span-1 text-2xl self-center justify-self-center">
            Precipitation:
          </div>
          <div className="col-span-1 text-xl self-center justify-self-end">
            {Math.round(today.pop * 100)}%
          </div>
          <div className="col-span-3 text-xl self-center justify-self-center">{`${getPrecipitation(
            today.pop
          )}, clouds at ${today.clouds.all}%`}</div>
        </div>
      </CardBody>
    </Card>
  );
};

export default DetailPanel;
