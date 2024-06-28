import { useState, useContext } from "react";
import Suggestions from "./Suggestions";
import WeatherContext from "../../context";

const Search = () => {
  const [term, setTerm] = useState("");
  const { options, setOptions } = useContext(WeatherContext);

  const getSearchOptions = async (term) => {
    fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${term.trim()}&limit=5&lang=en&appid=${
        import.meta.env.VITE_OPEN_WEATHER_API_KEY
      }`
    )
      .then((res) => res.json())
      .then((data) => setOptions(data))
      .catch((e) => console.log({ e }));
  };

  const onInputChange = (e) => {
    const value = e.target.value.trim();
    setTerm(e.target.value);

    if (value !== "") {
      getSearchOptions(value);
    }
  };

  return (
    <div className="relative flex">
      <input
        className="px-2 rounded-1-md border-2 border-white text-black"
        type="text"
        placeholder="Enter a city name"
        value={term}
        onChange={onInputChange}
      />
      <Suggestions options={options} />
    </div>
  );
};

export default Search;
