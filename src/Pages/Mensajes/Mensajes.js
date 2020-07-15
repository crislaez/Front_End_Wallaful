import React,{useState, useEffect} from 'react';
//css
import './Mensajes.css';

const Mensajes = (props) => {

    useEffect( () => {
        //llamamos a la funcion que esta en app
        const funcionCambiarColorMensaje = props.funcionCambiarColorMensaje;
        funcionCambiarColorMensaje();
        //llamamos a la funcion que esta en app para miostrar el navegador lateral
        const funcionMostrarNavegadorLateral = props.funcionMostrarNavegadorLateral;
        funcionMostrarNavegadorLateral();
    },[]);
    
    return(
        <section className='section-mensaje'>
            <div className='div-vacio'>
            </div>

            <div>
                <h2>MENSAJES</h2>
            </div>
            
        </section>
    )
}

export default Mensajes;