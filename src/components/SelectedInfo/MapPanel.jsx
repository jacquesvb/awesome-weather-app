import { RingLoader } from "react-spinners";
import { Card, CardBody } from "@material-tailwind/react";

const MapPanel = ({ isLoad, lat, lon }) => {
  let map = "";
  const mapApi = "https://static-maps.yandex.ru/1.x/?lang=en-US&ll=";
  if (isLoad) {
    map = RingLoader;
  } else {
    map = `${mapApi}${lon},${lat}&z=9&l=map&size=600,300`;
  }
  return (
    <Card className="col-span-4 w-full bg-primary text-primary-content border">
      <CardBody>
        <div className="grid grid-cols-2 gap-2 justify-between items-start">
          <h2 className="card-title font-bold text-xl self-center col-span-1">
            Map Panel
          </h2>
        </div>
      </CardBody>
    </Card>
  );
};

export default MapPanel;
