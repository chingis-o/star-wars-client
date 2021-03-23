import React, { useEffect } from "react";

import axios from "axios";

const BASE_URL = "https://swapi.dev/api/";

type props = {
  setSearchResult: React.Dispatch<React.SetStateAction<object[]>>;
  searchWord: string;
};

type resultObject = {
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
    const getResource = async (
      resource: string,
      searchWord: string
    ): Promise<resultObject[] | null | undefined> => {
      try {
        const searchURL = BASE_URL + `${resource}/?search=${searchWord}`;
        const response = await axios.get(searchURL);
        const results = response.data.results;
        return !!results.length ? results : null;
      } catch (err) {
        console.log(err);
      }
    };

    resources.forEach(async (resource) => {
      if (searchWord.toLowerCase().trim().length >= 3) {
        const results = await getResource(resource, searchWord);
        const searchResult = [];
        if (!!results) {
          for (let result of results) {
            const name = String(result.name.toLowerCase());
            if (name.search(searchWord) !== -1) {
              searchResult.push({ ...result, type: resource });
            }
          }
          setSearchResult(searchResult);
        }
      }
    });
  }, [searchWord, setSearchResult]);
};

export default useSearchUpdate;
