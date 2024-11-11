import React from "react";
import useform from "../Hook/useForm";

const LoginScreem = () => {
    const { formState, handleChange } = useform({

        email: "",
        password: "",
    })

    const handleLogin = (event) => {
        event.preventDefault()
    }

    return (
        <div>
            <h1>INICIA SESION</h1>
            <form onSubmit={handleLogin}>
                <div>

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
                <button type="submit">Iniciar Sesion</button>
            </form>
        </div>
    )
}



export default LoginScreem;