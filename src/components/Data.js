import React, { useEffect, useState } from "react";
import Create from "./Create";
import Navbar from "./Navbar";

const Data = () => {
  const [foods, setFoods] = useState([]);

  return (
    <>
      <Navbar foods={foods} setFoods={setFoods} />
      <Create foods={foods} setFoods={setFoods} />
    </>
  );
};

export default Data;
