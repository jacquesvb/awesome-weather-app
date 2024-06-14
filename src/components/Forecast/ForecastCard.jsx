import { Card, CardBody } from "@material-tailwind/react";
import { WiDayRain } from "react-icons/wi";

const ForecastCard = () => {
  return (
    <Card className="col-span-2 w-full h-40 bg-primary text-primary-content border">
      <CardBody>
        <div className="grid grid-cols-2 gap-2 justify-between items-start">
          <div className="card-title text-sm col-span-1 justify-self-center">
            Monday
          </div>
          <div className="col-span-1 text-sm justify-self-center">04/25</div>
          <div className="text-sm col-span-1 justify-self-center">Rain</div>
          <div className="col-span-1 self-center justify-self-center">
            <WiDayRain />
          </div>
          <div className="col-span-1">
            <div className="text-md justify-self-center">High:</div>
          </div>
          <div className="col-span-1 justify-self-center">
            <div className="text-md">Low: </div>
          </div>
          <div className="col-span-1 justify-self-center">55°</div>
          <div className="col-span-1 justify-self-center">48°</div>
        </div>
      </CardBody>
    </Card>
  );
};

export default ForecastCard;
