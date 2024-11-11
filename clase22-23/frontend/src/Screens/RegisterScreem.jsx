import React, { useState } from "react";
import useform from "../Hook/useForm";
const RegisterScreem = () => {
  //tener un estado que nos permita controlar el formulario
  //state = {
  //    email: '',
  //    password: '',
  //    name: ''
  //}
  //cada vez que el usuario ingrese un valor en el form, se va a actualizar el state
  //sabemos que debemos usar onChange

  const {formState, handleChange} = useform({
    name: "",
    email: "",
    password: "",
  });

  const HandleRegister = async (event) => {
    event.preventDefault();
    console.log("formulario registro enviado");
   

 

    const responseHTTP = await fetch(
      "http://localhost:4000/api/auth/register",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      }
    );
    const data = await responseHTTP.json();
    console.log(data);
  };
  console.log(formState);

  /*const [contador, setContador] = useState(0);
    const handleIncrementar = () => {
      setContador((prevContador) => prevContador + 1);
      setContador((prevContador) => prevContador + 1);
      setContador((prevContador) => prevContador + 1);
    };
    console.log("me renderizo");*/
  return (
    <div>
      <h1>registrate en Brand name</h1>
      <form onSubmit={HandleRegister}>
        <div>
          */
          <label>ingresa tu nombre</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="cosme fulanito"
            onChange={handleChange}
            value={formState.name}
          />
        </div>
        <div>
          <label>ingresa tu Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="cosmefulanito@gmail.com"
            onChange={handleChange}
            value={formState.email}
          />
        </div>
        <div>
          <label>ingresa tu contraseña</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="tu_contraseña"
            onChange={handleChange}
            value={formState.password}
          />
        </div>
        <button type="submit">Registrate</button>
      </form>
    </div>
  );
};

export default RegisterScreem;
