import { useContext } from "react";
import WeatherContext from "../../context";

/* eslint-disable react/prop-types */
const Suggestions = ({ options }) => {
  const { setSelectedCity } = useContext(WeatherContext);

  const handleSelect = (option) => {
    setSelectedCity(option);
  };

  return (
    <ul className="absolute top-9 bg-white text-black ml-1 rounded-b-md">
      {options &&
        options.map((option, index) => (
          <li key={option.name + "-" + index}>
            <button
              className="text-left text-sm w-full hover:bg-zinc-700 hover:bg-zinc-300 px-2 py-1 cursor-pointer"
              onClick={() => handleSelect(option)}
            >
              {option.name}, {option.state} {option.country}
            </button>
          </li>
        ))}
    </ul>
  );
};

export default Suggestions;
