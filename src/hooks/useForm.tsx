import { useState } from 'react';


export const useForm = <T extends Object>(formulario: T) => { // Usualmente si es generico se le pone T
    // El tipo T que voy a recibir por lo menos va a extender un objeto, lo tengo que ver como si fuera un string boolean number etc.. 

    const [state, setState] = useState(formulario)

    const onChange = ( value: string, campo: keyof T) => { // Validar el codigo a la hora de escritura
        setState({
            ...state,
            [campo]: value // llaves cuadradas para computar el valor
        });
    }

    return {
        ...state,
        formulario: state,
        onChange, 
    } //Si desestructuro todo el formulario quiere decir que tambien voy a exponer una propiedad llamada email y password 
}
