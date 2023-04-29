import React, { useState } from "react";
import { Button, IconButton, TextField } from "@mui/material";
import { PhotoCamera } from "@mui/icons-material";

const Create = ({ foods, setFoods }) => {
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [cusine, setCusine] = useState("");
  const [restr, setRests] = useState("");
  const [type, setType] = useState("");
  const [tags, settags] = useState("");

  const saveFood = () => {
    console.log(foods);
    setFoods([
      ...foods,
      {
        Name: name,
        Cusine: cusine,
        Restrictions: restr,
        Type: type,
        Tags: tags,
        Image: image,
      },
    ]);
    console.log(foods);
  };

  return (
    <div className="flex justify-center items-center h-screen ">
      <div className="flex flex-col gap-y-4 border-2 h-[600px] w-[300px] md:w-[600px] md:h-[500px] justify-center items-center border-zinc-800">
        <TextField
          label="Dish Name"
          className="md:w-[500px] "
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <TextField
          label="Cusine"
          className="md:w-[500px] "
          value={cusine}
          onChange={(e) => {
            setCusine(e.target.value);
          }}
        />
        <TextField
          label="Restrictions"
          className="md:w-[500px] "
          value={restr}
          onChange={(e) => {
            setRests(e.target.value);
          }}
        />
        <TextField
          label="Type"
          className="md:w-[500px] "
          value={type}
          onChange={(e) => {
            setType(e.target.value);
          }}
        />
        <TextField
          label="Tags"
          className="md:w-[500px] "
          value={tags}
          onChange={(e) => {
            settags(e.target.value);
          }}
        />
        <div>
          <Button
            variant="contained"
            onChange={(e) => {
              console.log(e.target.files[0]);
            }}
            color="primary"
            component="label"
            endIcon={<PhotoCamera />}
          >
            upload
            <input hidden accept="image" multiple type="file" />
          </Button>
        </div>
        <Button
          variant="contained"
          color="success"
          onClick={() => {
            saveFood();
          }}
        >
          Done
        </Button>
      </div>
    </div>
  );
};

export default Create;
