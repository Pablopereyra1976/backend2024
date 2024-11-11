import { useState } from "react"

const useform = (initialForm = {}) => {

    const [formState, setFormState] = useState(initialForm);
    const handleChange = (event) => {
        event.target; //muestra el formulario, el elemento HTML
        event.target.value; //muestra el valor del input
    
        const field_name = event.target.name;
        const field_value = event.target.value;
    
        //la fincion setter de mi estado me permite modificar mi estado y re renderizar mi componente
        //opcionalmente yo le puedo pasar una callback, la misma sera invocada y el valor de retorno de la callback sera el nuevo valor de mi estado
        //el parametro de la callback es el prevState o el estado previo de ese estado (osea el valor actual)
        setFormState((prevFormState) => {
          return {
            ...prevFormState,
            [field_name]: field_value,
          }
        })
      }
return {
    formState,
     handleChange    
}
}

export default useform