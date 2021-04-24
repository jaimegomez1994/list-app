import React, { useState, useEffect } from "react";
import axios from "axios";
import List from "./List"
import Search from "./Search"

function App() {
  const [list, setList] = useState([]);
  const [listFiltered, setListFiltered] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios.get(`https://swapi.dev/api/people`).then((res) => {
      setList(res.data.results);
      setListFiltered(res.data.results);
    });
  }, []);

  useEffect(() => {
    setListFiltered(list.filter(item => item.name.toLowerCase().includes(search.toLowerCase())));
  }, [search]);

  function handleSearch(event) {
    setSearch(event.target.value);
  }

  return (
    <>
      <List listFiltered={listFiltered}></List>
      <Search search={search} handleSearch={handleSearch}></Search>
    </>
  );
}

export default App;
