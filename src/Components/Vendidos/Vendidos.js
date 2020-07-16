import React,{useState, useEffect} from 'react';
//css
import './Vendidos.css';
//componentes
import DivVacio from '../DivVacio/DivVacio';
const arrayVacio = ['','','','',''];

const Vendidos = (props) => {

    // console.log(localStorage.getItem('primariwallafull'))

    return(
        <div className='contenedor-vendidos'>          
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

export default Vendidos;