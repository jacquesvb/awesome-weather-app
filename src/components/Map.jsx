import { RingLoader } from "react-spinners";

const Map = ({ isLoad, lat, lon }) => {
  let map = "";
  const mapApi = "https://static-maps.yandex.ru/1.x/?lang=en-US&ll=";
  if (isLoad) {
    map = RingLoader;
  } else {
    map = `${mapApi}${lon},${lat}&z=9&l=map&size=600,300`;
  }
  return (
    <div className="card col-span-4 w-full h-80 bg-primary text-primary-content">
      <div className="card-body">
        <div className="grid grid-cols-2 gap-2 justify-between items-start">
          <h2 className="card-title font-bold text-xl self-center col-span-1">
            Map Panel
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Map;
