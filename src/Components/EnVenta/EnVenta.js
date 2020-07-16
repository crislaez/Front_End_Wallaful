import React,{useState, useEffect} from 'react';
//css
import './EnVenta.css';
//componentes
import DivVacio from '../DivVacio/DivVacio';
const arrayVacio = ['','','','',''];

const EnVenta = (props) => {

    // console.log(localStorage.getItem('primariwallafull'))

    useEffect( () => {

        obtenerPeroductosEnVenta();
    },[]);
    
    //funcion para obtener todos los productos en venta
    const obtenerPeroductosEnVenta = () => {

    };
    
    return(
        <div className='contenedor-en-venta'>          
            {
                arrayVacio.map((dato, key) => {
                    return(
                         <DivVacio key={key}></DivVacio>
                    )
                })
            }
        </div>
    )
}

export default EnVenta;