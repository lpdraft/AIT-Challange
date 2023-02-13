import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { useState } from "react";

export const UploadGifs = () => {
  const navigate = useNavigate();
  // const [formData, setFormData] = useState();
  const { register, handleSubmit, watch } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    // title
    // gifType
    // imgUrl
    // image
    try {
      const formData = new FormData();

      formData.append("title", data.title);
      formData.append("imgUrl", data.imgUrl);
      formData.append("gifType", data.gifType);
      formData.append("image", data.image[0]);

      const response = await axios.post(
        "http://localhost:5000/api/memes/add",
        formData
      );
      // console.log(response);
      if (response.statusText === "OK") {
        toast.success("Successfully added");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="containerPages">
      <h1>Upload Your Own GIf/Sticker</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="inputWrapper">
          <label>Title</label>
          <input className="form-control" type="text" {...register("title")} />
        </div>

        <div className="inputWrapper">
          <label>Type</label>
          <select {...register("gifType")}>
            <option value="gif">Gif</option>
            <option value="sticker">Sticker</option>
          </select>
        </div>

        <div className="inputWrapper">
          <label>Paste Url or Upload gifs</label>

          <div className="fileOptions">
            <input type="file" {...register("image")} />

            <input
              placeholder="Paste URL Here..."
              type="text"
              {...register("imgUrl")}
            />
          </div>
        </div>

        <input type="submit" value="Add" />
      </form>
    </div>
  );
};
