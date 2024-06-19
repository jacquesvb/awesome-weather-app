import { useContext } from "react";
import { BiPlusCircle } from "react-icons/bi";
import { WiDayRain, WiDaySunny } from "react-icons/wi";
import { Card, CardBody } from "@material-tailwind/react";
import WeatherContext from "../../context";

const MainPanel = () => {
  const { weatherData } = useContext(WeatherContext);
  console.log("Weather Data MainPanel: ", weatherData);
  return (
    <Card className="col-span-4 w-full bg-primary text-primary-content border">
      <CardBody>
        <div className="grid grid-cols-2 gap-2 justify-between items-start">
          <h2 className="card-title font-bold text-xl self-center col-span-1">
            Salem, Oregon
          </h2>
          <div className="card-actions justify-self-end col-span-1">
            <button className="btn bg-transparent p-0 border-0 hover:bg-transparent text-primary-content">
              <BiPlusCircle size={25} />
            </button>
          </div>
          <div className="col-span-1">
            <div className="text-xl">12:00 PM</div>
          </div>
          <div className="text-xl col-span1 justify-self-end">Light rain </div>
          <div className="col-span-1">
            <div className="text-3xl pt-6 flex">
              <WiDaySunny />
              52°<span className="text-3xl">F</span>
            </div>
          </div>
          <div className="col-span-1">
            <div className="p-5">
              <WiDayRain size={50} className="ml-auto" />
            </div>
          </div>
          <div className="col-span-1">
            <div className="text-xl">High: 55°</div>
          </div>
          <div className="col-span-1 justify-self-end">
            <div className="text-xl">Low: 48°</div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default MainPanel;
