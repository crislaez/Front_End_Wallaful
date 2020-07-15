import React,{useState, useEffect} from 'react';
//css
import './Productos.css';
//componentes
import SubirProducto from '../../Components/SubirProducto/SubirProducto';
import MisProductos from '../../Components/MisProductos/MisProductos';

const Productos = (props) => {

    const [queVentanaMostrar, setQueVentanaMostrar] = useState('mizona');

    useEffect( () => {
        //llamamos a la funcion de app
        const funcionCambiarColorMiZona = props.funcionCambiarColorMiZona;
        funcionCambiarColorMiZona();
        //llamamos a la funcion que esta en app para miostrar el navegador lateral
        const funcionMostrarNavegadorLateral = props.funcionMostrarNavegadorLateral;
        funcionMostrarNavegadorLateral();

        setQueVentanaMostrar(window.location.href.split('/')[window.location.href.split('/').length -1])
    },[])

    console.log(window.location.href.split('/')[window.location.href.split('/').length -1])
    return(
        <section className='section-productos'>
            <div className='div-vacio'>
            </div>

            {
                queVentanaMostrar === 'mizona'
                ?
                <MisProductos></MisProductos>
                :
                queVentanaMostrar === 'subir'
                ?
                <SubirProducto></SubirProducto>
                :
                <div style={{display:'none'}}></div>


            }
        </section>
    )
}

export default Productos;