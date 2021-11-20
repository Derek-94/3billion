import React, { useCallback, useEffect, useState } from "react";

import Animals from "../presenter/Animals";
import { animalsAPI } from "../../api/api";

import loader from "../../img/loader.gif";

const AnimalsContainer = () => {
  const [animals, setAnimals] = useState([]);

  const loadData = useCallback(async () => {
    const response = await animalsAPI.get();
    setAnimals(response);
  }, []);

  useEffect(() => {
    loadData();
  }, [loadData]);

  return (
    <>
      {animals.length === 0 ? (
        <img src={loader} alt="loading..." />
      ) : (
        <Animals animalList={animals} />
      )}
    </>
  );
};

export default AnimalsContainer;
