import React,{useState, useEffect} from 'react';
//css
import './Inicio.css';
//componente
import NavInicioNavInicio from '../../Components/NavInicio/NavInicio';

const Inicio = (props) => {

    useEffect( () => {

        //llamamos a la funcion app para ocultar el nav lateral
        const funcionOcultarNavegadorLateral = props.funcionOcultarNavegadorLateral;
        funcionOcultarNavegadorLateral();
    },[]);

    
    return(
        <section className='section-inicio'>
            <NavInicioNavInicio></NavInicioNavInicio>
        </section>
    )
}

export default Inicio;