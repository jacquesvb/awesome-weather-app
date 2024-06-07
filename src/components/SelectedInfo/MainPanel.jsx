import { BiPlusCircle } from "react-icons/bi";
import { WiDayRain, WiDaySunny } from "react-icons/wi";

const MainPanel = () => {
  return (
    <div className="card col-span-4 w-full h-80 bg-primary text-primary-content">
      <div className="card-body">
        <div className="grid grid-cols-2 gap-2 justify-between items-start">
          <h2 className="card-title font-bold text-xl self-center col-span-1">
            Salem, Oregon
          </h2>
          <div className="card-actions justify-end col-span-1">
            <button className="btn bg-transparent p-0 border-0 hover:bg-transparent text-primary-content">
              <BiPlusCircle size={25} />
            </button>
          </div>
          <div className="col-span-1">
            <div className="text-3xl">12:00 PM</div>
          </div>
          <div className="text-3xl col-span1 justify-self-end">Light rain </div>
          <div className="col-span-1">
            <div className="text-7xl pt-6 flex">
              <WiDaySunny />
              52°<span className="text-3xl">F</span>
            </div>
          </div>
          <div className="col-span-1">
            <div className="p-5">
              <WiDayRain size={70} className="ml-auto" />
            </div>
          </div>
          <div className="col-span-1">
            <div className="text-3xl">High: 55°</div>
          </div>
          <div className="col-span-1 justify-self-end">
            <div className="text-3xl">Low: 48°</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPanel;
