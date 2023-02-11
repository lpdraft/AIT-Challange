import { useState } from "react";
import { useForm } from "react-hook-form";

export const UploadGifs = () => {
  const [formData, setFormData] = useState([]);
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm({});

  const onSubmit = (data) => {
    setFormData(data);
  };
  console.log(formData);

  return (
    <div className="containerPages">
      <h1>Upload Your Own GIf/Sticker</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="inputWrapper">
          <label>Title</label>
          <input className="form-control" type="text" {...register("title")} />
        </div>

        <div className="inputWrapper">
          <label>Description</label>
          <input className="form-control" type="text" {...register("desc")} />
        </div>

        <div className="inputWrapper">
          <label>Type</label>
          <select {...register("gifType")}>
            <option value="gif">Gif</option>
            <option value="sticker">Sticker</option>
          </select>
        </div>

        <div className="inputWrapper">
          <label>Paste Url or Upload from PC</label>

          <div className="fileOptions">
            <input type="file" {...register("File")} />

            <input
              placeholder="Paste URL Here..."
              type="text"
              {...register("URL")}
            />
          </div>
        </div>

        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};
