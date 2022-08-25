import React, { useEffect } from "react";

import axios from "axios";

const BASE_URL = "https://swapi.dev/api/";

type props = {
  setSearchResult: React.Dispatch<React.SetStateAction<searchResult[]>>;
  searchWord: string;
};

export type searchResult = {
  name: string;
  [propName: string]: string | string[];
};

const useSearchUpdate = ({ setSearchResult, searchWord }: props) => {
  useEffect(() => {
    const resources = [
      "people",
      "planets",
      "films",
      "species",
      "vehicles",
      "starships",
    ];

    const getData = async (
      resource: string,
      searchWord: string
    ): Promise<searchResult[] | []> => {
      try {
        const searchURL = BASE_URL + `${resource}/?search=${searchWord}`;
        const response = await axios.get(searchURL);
        const results = response.data.results;
        return results.map((result: searchResult) => {
          return {
            name: result.name,
            type: resource,
          };
        });
      } catch (err) {
        console.log(err);
        return [];
      }
    };

    if (searchWord.length >= 3) {
      Promise.all(
        resources.map((resource) => getData(resource, searchWord))
      ).then((results) => {
        setSearchResult(results.flat());
      });
    }
  }, [searchWord, setSearchResult]);
};

export default useSearchUpdate;
