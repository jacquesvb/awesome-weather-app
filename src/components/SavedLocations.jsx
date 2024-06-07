import { BiXCircle } from "react-icons/bi";

const SavedLocations = () => {
  return (
    <>
      <div className="card col-span-3 w-full h-60 bg-primary text-primary-content">
        <div className="card-body">
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
          <p>If a dog chews shoes whose shoes does he choose?</p>
        </div>
      </div>
      <div className="card col-span-3 w-full h-60 bg-primary text-primary-content">
        <div className="card-body">
          <div className="flex flex-row justify-between items-start">
            <h2 className="card-title font-bold text-xl self-center">
              Second Saved
            </h2>
            <div className="card-actions justify-end">
              <button className="btn bg-transparent p-0 border-0 hover:bg-transparent text-primary-content">
                <BiXCircle size={25} />
              </button>
            </div>
          </div>
          <p>If a dog chews shoes whose shoes does he choose?</p>
        </div>
      </div>
      <div className="card col-span-3 w-full h-60 bg-primary text-primary-content">
        <div className="card-body">
          <div className="flex flex-row justify-between items-start">
            <h2 className="card-title font-bold text-xl self-center">
              Third Saved
            </h2>
            <div className="card-actions justify-end">
              <button className="btn bg-transparent p-0 border-0 hover:bg-transparent text-primary-content">
                <BiXCircle size={25} />
              </button>
            </div>
          </div>
          <p>If a dog chews shoes whose shoes does he choose?</p>
        </div>
      </div>
      <div className="card col-span-3 w-full h-60 bg-primary text-primary-content">
        <div className="card-body">
          <div className="flex flex-row justify-between items-start">
            <h2 className="card-title font-bold text-xl self-center">
              Fourth Saved
            </h2>
            <div className="card-actions justify-end">
              <button className="btn bg-transparent p-0 border-0 hover:bg-transparent text-primary-content">
                <BiXCircle size={25} />
              </button>
            </div>
          </div>
          <p>If a dog chews shoes whose shoes does he choose?</p>
        </div>
      </div>
    </>
  );
};

export default SavedLocations;
