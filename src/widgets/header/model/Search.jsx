import { useState } from "react";

export const Search = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const getInputChange = (event) => {
    const value = event.target.value;
    setQuery(value);
    onSearch(value);
  };
  return (
    <div>
      <input
        type="search"
        placeholder="Поиск"
        id="search"
        value={query}
        onChange={getInputChange}
      />
    </div>
  );
};
