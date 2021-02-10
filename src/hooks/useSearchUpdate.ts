import React, { useEffect, useCallback, useMemo } from "react";

import axios from "axios";

const BASE_URL = "https://swapi.dev/api/";

type props = {
  setIsSearching: any;
  setSearchResult: React.Dispatch<React.SetStateAction<object[]>>;
  searchQuery: string;
};

const useSearchUpdate = ({
  setIsSearching,
  setSearchResult,
  searchQuery,
}: props) => {
  const resources: string[] = useMemo(
    () => ["people", "planets", "films", "species", "vehicles", "starships"],
    []
  );

  const setResourceToState = useCallback(
    (results: object[], resource: string, query: string) => {
      results.forEach((result: any) => {
        const name: string = String(result.name.toLowerCase());
        const isQueryInName: boolean = name.search(query) !== -1;
        if (isQueryInName) {
          setSearchResult((searchResult) => [
            ...searchResult,
            Object.assign(result, { type: resource }),
          ]);
        }
      });
    },
    [setSearchResult]
  );

  const getResource = useCallback(
    (resource: string, query: string) => {
      axios
        .get(BASE_URL + `${resource}/?search=${query}`)
        .then((response) => {
          const results: object[] = response.data.results;
          if (results.length !== 0) {
            setResourceToState(results, resource, query);
          }
          setIsSearching(false);
        })
        .catch(function (error) {
          console.log(error);
          setIsSearching(false);
        });
    },
    [setIsSearching, setResourceToState]
  );

  useEffect(() => {
    resources.forEach((resource: string) => {
      const query: string = searchQuery.toLowerCase().trim();
      if (query.length >= 3) {
        setIsSearching(true);
        getResource(resource, query);
      }
    });
  }, [searchQuery, getResource, resources, setIsSearching]);
};

export default useSearchUpdate;
