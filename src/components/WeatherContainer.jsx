/* eslint-disable react/prop-types */
import MainPanel from "./CurrentPanel";
import DetailPanel from "./DetailPanel";
import Forecast from "./Forecast";

const WeatherContainer = () => {
  return (
    <div className="grid grid-cols-12 gap-2">
      <MainPanel />
      <DetailPanel />
      <div className="divider divider-neutral col-span-12"></div>
      <div className="col-span-12 text-3xl text-center text-primary-content">
        Forecast
      </div>
      <Forecast />
    </div>
  );
};

export default WeatherContainer;
