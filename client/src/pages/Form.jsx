import { useState } from "react";
import { useForm } from "react-hook-form";
import { edadValidator } from "./validators";

export const Form = () => {
  const [formData, setFormData] = useState([]);
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm({
    defaultValues: {
      Nombre: "Jaimito",
      Direccion: "Gran via 22",
      Edad: "25",
      Correo: "correo@corre.com",
      Pais: "es",
    },
  });

  const onSubmit = (data) => {
    setFormData(data);
  };
  console.log(formData);
  const incluirTelefonoVar = watch("incluirTelefono");

  return (
    <div className="container">
      <h1>Formulario</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Nombre</label>
          <input
            className="form-control"
            type="text"
            {...register("Nombre", { required: true, maxLength: 10 })}
          />
          {errors.Nombre?.type === "required" && (
            <p>Este campo es obligatorio!</p>
          )}
          {errors.Nombre?.type === "maxLength" && (
            <p>No puedes escribir mas de 10 caracteres!</p>
          )}
        </div>
        <div>
          <label>Direccion</label>
          <input
            className="form-control"
            type="text"
            placeholder="Gran Vía Madrid"
            {...register("Direccion")}
          />
        </div>
        <div>
          <label>Email</label>
          <input
            className="form-control"
            type="email"
            {...register("Correo", {
              pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
            })}
          />
          {errors.Correo?.type && <p>El formato no es válido</p>}
        </div>
        <div>
          <label>Edad</label>
          <input
            className="form-control"
            type="text"
            {...register("Edad", {
              validate: edadValidator,
            })}
          />
          {errors.Edad?.type && <p>La edad tiene que estar entre 18 y 65</p>}
        </div>
        <div>
          <label>Pais</label>
          <select {...register("Pais")}>
            <option value="es">España</option>
            <option value="fr">Francia</option>
            <option value="it">Italia</option>
          </select>
        </div>
        <div>
          <label>Incluir Telefono?</label>
          <input type="checkbox" {...register("incluirTelefono")} />
        </div>
        {incluirTelefonoVar && (
          <div>
            <label>Telefono</label>
            <input type="text" {...register("Telefono")} />
          </div>
        )}
        <div>
          <label>paste url</label>
          <input type="text" {...register("URL")} />
        </div>
        <div className="uploadField">
          <label>Upload from your computer</label>

          <input type="file" {...register("File")} />
        </div>

        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};
