import React,{useState, useEffect} from 'react';
//css
import './Inicio.css';

const Inicio = (props) => {

    useEffect( () => {

        //llamamos a la funcion app para ocultar el nav lateral
        const funcionOcultarNavegadorLateral = props.funcionOcultarNavegadorLateral;
        funcionOcultarNavegadorLateral();
    },[]);

    
    return(
        <section className='section-inicio'>
            <h2>INICIO</h2>
        </section>
    )
}

export default Inicio;