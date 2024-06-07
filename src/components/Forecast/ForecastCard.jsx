const ForecastCard = () => {
  return (
    <div className="card col-span-2 w-full h-40 bg-primary text-primary-content">
      <div className="card-body">
        <div className="grid grid-cols-2 gap-2 justify-between items-start">
          <h2 className="card-title text-sm self-center col-span-1">
            06/06/2024
          </h2>
          <div className="col-span-1 justify-self-end">Rain</div>
          <div className="col-span-1">
            <div className="text-lg">High: 55°</div>
          </div>
          <div className="col-span-1 justify-self-end">
            <div className="text-lg">Low: 48°</div>
          </div>
          <div className="col-span-2">Wind: 5 mph E</div>
        </div>
      </div>
    </div>
  );
};

export default ForecastCard;
