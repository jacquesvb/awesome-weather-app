import { WiDayRain, WiMoonAltNew } from "react-icons/wi";
import { WiWindDeg } from "react-icons/wi";

const DetailPanel = () => {
  return (
    <div className="card col-span-4 w-full h-80 bg-primary text-primary-content">
      <div className="card-body">
        <div className="grid grid-cols-2 gap-2 justify-between items-start">
          <h2 className="card-title font-bold text-xl self-center col-span-1">
            Details
          </h2>
          <div className="col-span-1"></div>
          <div className="col-span-1">
            <div className="text-3xl">Feels Like:</div>
            <div className="text-3xl">52°</div>
          </div>
          <div className="col-span-1">
            <div className="text-3xl">Humidity:</div>
            <div className="text-3xl">85%</div>
          </div>
          <div className="col-span-1">
            <div className="text-3xl">Wind:</div>
            <div className="text-3xl flex">
              E 5 <span className="text-sm">mph</span>{" "}
              <WiWindDeg className="transform rotate-90" size={30} />
            </div>
          </div>
          <div className="col-span-1">
            <div className="text-3xl">Cloud Cover:</div>
            <div className="text-3xl">100%</div>
          </div>
          <div className="col-span-1">
            <div className="text-3xl">Pressure</div>
            <div className="text-3xl">29.8 in</div>
          </div>
          <div className="col-span-1">
            <div className="text-3xl">Precipitation</div>
            <div className="text-3xl">0.5 in</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPanel;
