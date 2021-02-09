import React, { useState, useEffect } from "react";
import axios from "axios";

import "./App.css";

const BASE_URL = "https://swapi.dev/api/";

function App() {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [searchResult, setSearchResult] = useState<object[]>([]);
  const [isSearching, setIsSearching] = useState<boolean>(false);

  useEffect(() => {
    const resources: string[] = [
      "people",
      "planets",
      "films",
      "species",
      "vehicles",
      "starships",
    ];
    resources.forEach((resource) => {
      const query: string = searchQuery.toLowerCase().trim();
      if (query.length >= 3) {
        setIsSearching(true);
        axios
          .get(BASE_URL + `${resource}/?search=${query}`)
          .then((response) => {
            const results: object[] = response.data.results;
            if (results.length !== 0) {
              results.forEach((result: any) => {
                const name: string = String(result.name.toLowerCase());
                const isQueryInName: boolean = name.search(query) !== -1;
                if (isQueryInName) {
                  setSearchResult((searchResult) => [
                    ...searchResult,
                    Object.assign(result, { type: resource, visible: "" }),
                  ]);
                }
              });
            }
            setIsSearching(false);
          })
          .catch(function (error) {
            console.log(error);
            setIsSearching(false);
          });
      }
    });
  }, [searchQuery]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!isSearching) {
      setSearchQuery(e.target.value);
      setSearchResult([]);
    }
  };

  // const handleClick = (name: any) => {
  //   console.log(name);
  // };

  return (
    <div className="App">
      <form method="get">
        <input
          type="search"
          name="search"
          id="search"
          autoComplete="off"
          placeholder="Enter your query"
          value={String(searchQuery)}
          onChange={handleChange}
        />
      </form>
      <table className="result">
        {searchResult.length > 0 ? (
          <thead>
            <tr>
              <th>Name</th>
              <th>Type</th>
            </tr>
          </thead>
        ) : null}

        <tbody>
          {searchResult.map((item: any) => {
            const name: string = item.name;
            const pattern: string = searchQuery.toLowerCase();
            const string: string = name.toLowerCase();
            const position: number = string.indexOf(pattern);
            const begin: string = name.substring(0, position);
            const highlighted: string = name.substring(
              position,
              position + pattern.length
            );
            const end: string = name.substring(
              position + pattern.length,
              name.length
            );
            return (
              <tr key={item.name}>
                <td>
                  {begin}
                  <b>{highlighted}</b>
                  {end}
                </td>
                <td>{item.type}</td>
              </tr>
            );
          })}
          {/* {searchResult.map((result) => {
            const details = Object.entries(result);
            return details.map((item) => (
              <tr key={item[0]}>
                <td>{item[0]}</td>
                <td>{item[1]}</td>
              </tr>
            ));
          })} */}
        </tbody>
      </table>
    </div>
  );
}

export default App;
