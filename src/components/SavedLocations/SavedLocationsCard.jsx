import { Card, CardBody } from "@material-tailwind/react";
import { BiXCircle } from "react-icons/bi";

const SavedLocationsCard = () => {
  return (
    <Card className="col-span-3 w-full h-40 bg-primary text-primary-content border">
      <CardBody>
        <div className="flex flex-row justify-between items-start">
          <h2 className="card-title font-bold text-xl self-center">
            First Saved
          </h2>
          <div className="card-actions justify-end">
            <button className="btn bg-transparent p-0 border-0 hover:bg-transparent text-primary-content">
              <BiXCircle size={25} />
            </button>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default SavedLocationsCard;
