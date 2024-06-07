import MainPanel from "./MainPanel";
import DetailPanel from "./DetailPanel";
import MapPanel from "./MapPanel";
import Forecast from "../Forecast";
import SavedLocations from "../SavedLocations";

const SelectedInfo = () => {
  return (
    <div className="grid grid-cols-12 gap-4">
      <MainPanel />
      <DetailPanel />
      <MapPanel />
      <div className="divider divider-neutral col-span-12"></div>
      <div className="col-span-12 text-3xl text-center text-primary-content">
        6 Day Forecast
      </div>
      <Forecast />
      <div className="divider divider-neutral col-span-12"></div>
      <SavedLocations />
    </div>
  );
};

export default SelectedInfo;
