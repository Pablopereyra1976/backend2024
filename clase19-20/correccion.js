//Manejo que error tuvo cada campo 
/* function errorHandler(field_name, field_value){
    if (!field_value) {
        campos_permitidos[field_name].error = 'Por favor completa el campo'
    }
} */

    const ERRORS_VALIDATION_DICCIONARY = {
        'STRING_VALIDATION': 'STRING_VALIDATION'
        
    }
    
    
    const verifyString = (field_name, field_value) => {
        if(!(typeof(field_value) === 'string')){
            return {
                error: ERRORS_VALIDATION_DICCIONARY.STRING_VALIDATION,
                message: field_name + ' debe ser un texto',
            }
        }
    }
    const verifyMinLength = (field_name, field_value, minLength) => {
        if(!(field_value.length > minLength)){
            return {
                error: 'MIN_LENGTH_VALIDATION',
                message: field_name + ' debe tener como minimo ' + minLength + ' caracteres',
            }
        }
    }
    