import { WiWindDeg } from "react-icons/wi";
import { Card, CardBody } from "@material-tailwind/react";

const DetailPanel = () => {
  return (
    <Card className="col-span-4 w-full bg-primary text-primary-content border">
      <CardBody>
        <div className="grid grid-cols-2 gap-2 justify-between items-start">
          <div className="card-title font-bold text-xl self-center col-span-1">
            Details
          </div>
          <div className="col-span-1"></div>
          <div className="col-span-1 text-xl self-center justify-self-center">
            Feels Like
          </div>
          <div className="col-span-1 text-xl self-center justify-self-center">
            Humidity
          </div>
          <div className="col-span-1 text-xl self-center justify-self-center">
            52°
          </div>
          <div className="col-span-1 text-xl self-center justify-self-center">
            85%
          </div>
          <div className="col-span-1 text-xl self-center justify-self-center">
            Pressure
          </div>
          <div className="col-span-1 text-xl self-center justify-self-center">
            Precipitation
          </div>
          <div className="col-span-1 text-xl self-center justify-self-center">
            29.8 in
          </div>
          <div className="col-span-1 text-xl self-center justify-self-center">
            0.5 in
          </div>
          <div className="col-span-1 text-xl self-center justify-self-center">
            Wind:
          </div>
          <div className="col-span-1 text-xl self-center justify-self-center">
            <WiWindDeg className="transform rotate-90" size={30} />
          </div>
          <div className="col-span-2 text-xl self-center justify-self-center">
            E 5 <span className="text-sm">mph</span>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default DetailPanel;
