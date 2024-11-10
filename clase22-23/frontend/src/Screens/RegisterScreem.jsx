import React from "react";

const RegisterScreem = () => {
    const HandleRegister = async(event) => {
        event.preventDefault()
        console.log("formulario registro enviado")
        /*obtener un objeto con todos los datos del form, ejemplo {name: '', email: '', password: ''}*/
        const form_state = {
            email: '',
            password: '',
            name: ''
        }

        const formularioJSX = event.target //muestra el form
        const formulario_valores = new FormData(formularioJSX)

        for (let campo in form_state) {
            form_state[campo] = formulario_valores.get(campo)
        }
        /*todo esto lo hacemos para conseguir los valores de un formulario*/
        console.log(form_state)

        const responseHTTP = await fetch('http://localhost:4000/api/auth/register', {
            
        
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(form_state)
        })
const data = await responseHTTP.json()
console.log(data)
    }
    return (
        <div>
            <h1>registrate en Brand name</h1>
            <form onSubmit={HandleRegister}>
                <div>
                    <label>ingresa tu nombre</label>
                    <input type="text" name='name' id='name' placeholder='cosme fulanito' />
                </div>
                <div>
                    <label>ingresa tu Email</label>
                    <input type="email" name='email' id='email' placeholder='cosmefulanito@gmail.com' />
                </div>
                <div>
                    <label>ingresa tu contraseña</label>
                    <input type="password" name='password' id='password' placeholder='tu_contraseña' />
                </div>
                <button type="submit">Registrate</button>
            </form>
        </div>
    )
}

export default RegisterScreem;