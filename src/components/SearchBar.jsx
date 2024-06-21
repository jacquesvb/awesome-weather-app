import { useState } from "react";
import axios from "axios";
import { BiSearch } from "react-icons/bi";
import { Input, Button } from "@material-tailwind/react";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);
  const [selectedName, setSelectedName] = useState("");

  const handleSearch = async () => {
    console.log("Searching...");
    try {
      const response = await axios.get(
        `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(
          searchTerm
        )}&count=5&language=en&format=json`
      );
      console.log(response.data);
      setResults(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSelect = (name) => {
    setSelectedName(name);
    console.log(selectedName);
    setResults([]);
  };

  return (
    <div className="relative flex w-full max-w-[24rem]">
      <Input
        type="text"
        variant="outlined"
        label="Search..."
        color="white"
        size="lg"
        outline="true"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") handleSearch();
        }}
      />
      <Button
        size="sm"
        color={searchTerm ? "blue" : "gray"}
        disabled={!searchTerm}
        variant="filled"
        ripple={true}
        onClick={handleSearch}
        className="!absolute right-1 top-1 rounded"
      >
        <BiSearch />
      </Button>
      {results.length > 0 && (
        <div className="z-50 absolute mt-2 w-full bg-white border border-gray-300 rounded-md shadow-lg">
          {results.map((result, index) => (
            <div
              key={index}
              className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
              onClick={() => handleSelect(name)}
            >
              {result.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
