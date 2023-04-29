import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import { PhotoCamera } from "@mui/icons-material";
import axios from "axios";

const Create = ({ foods, setFoods }) => {
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [cusine, setCusine] = useState("");
  const [restr, setRests] = useState("");
  const [type, setType] = useState("");
  const [tags, settags] = useState("");

  const uploadImage = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("myImage", image);
    axios.post("url", formData).then((res) => {});

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
    setImage("");
    setName("");
    setCusine("");
    setRests("");
    setType("");
    settags("");
  };

  return (
    <div className="flex justify-center items-center h-screen ">
      <form onSubmit={uploadImage}>
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
              disableElevation
              onChange={(e) => {
                var reader = new FileReader();
                reader.readAsDataURL(e.target.files[0]);
                reader.onload = () => {
                  console.log(reader.result);
                  setImage(reader.result);
                };
              }}
              color="primary"
              component="label"
              endIcon={<PhotoCamera />}
            >
              upload
              <input hidden accept="image" multiple type="file" />
            </Button>
            {"    "}
            <Button
              type="submit"
              disableElevation
              variant="contained"
              color="success"
            >
              Done
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Create;
