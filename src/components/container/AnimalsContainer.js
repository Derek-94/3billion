import React, { useCallback, useEffect, useState } from "react";
import { animalsAPI } from "../../api/api";
import Animals from "../presenter/Animals";

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
        <div>loading...</div>
      ) : (
        <Animals animalList={animals} />
      )}
    </>
  );
};

export default AnimalsContainer;
