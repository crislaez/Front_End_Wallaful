import React,{useState, useEffect} from 'react';
//css
import './Articulos.css';

const Articulos = (props) => {

    useEffect( () => {

        console.log(window.location.href.split('/')[window.location.href.split('/').length -1])
        return () => {

        }
    },[])

    return(
        <section className='section-articulos'>
            <div className='div-vacio-articulos'>
            </div>
        </section>
    )

}

export default Articulos;