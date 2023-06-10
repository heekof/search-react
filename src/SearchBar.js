import React, { useState, useRef, useMemo } from "react";

function SearchBar() {
  const [items, setItems] = useState([]);
  const [query, setQuery] = useState("");
  const inputRef = useRef();

  const filtredItems = useMemo(() => {
    return items.filter((item) => {
      return item.toLowerCase().includes(query.toLowerCase());
    });
  }, [items, query]);

  const onSubmit = (e) => {
    // so that the submit doesnt refresh our page
    e.preventDefault();

    const value = inputRef.current.value;

    if (value === "") return;

    setItems((prev) => {
      return [...prev, value];
    });

    inputRef.current.value = "";
  };

  return (
    <>
      <input
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <br />
      <br />

      <form onSubmit={onSubmit}>
        New Item :<input ref={inputRef} type="text"></input>
        <button type="submit">Add</button>
        <h3>Item:</h3>
        {filtredItems.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </form>
    </>
  );
}

export default SearchBar;
