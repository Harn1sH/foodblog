import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import { Button } from "@mui/material";

const Navbar = ({ foods, setFoods }) => {
  return (
    <div className="h-14 shadow-lg flex justify-between items-center ">
      <div className="mx-4 flex justify-between items-center w-full">
        <div className="bg-zinc-700 rounded-lg h-11 w-28 text-center items-center">
          LOGO
        </div>
        <Button
          color="success"
          variant="outlined"
          endIcon={<HomeIcon />}
          className="h-10"
        >
          home
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
