import React,{useState, useEffect} from 'react';
//css
import './MisProductos.css';
//componente
import EnVenta from '../EnVenta/EnVenta';
import Vendidos from '../Vendidos/Vendidos';

const MisProductos = (props) => {

    const [enventOVendidos, setEnventOVendidos] = useState(true);
    const [colorBotonEnVenta, setColorBotonEnVenta] = useState('#17BC9D');
    const [borderBotonEnVenta , setBorderBotonEnVenta] = useState('#17BC9D');

    const [colorBotonVendidos, setColorBotonVendidos] = useState('#5C5C5C');
    const [borderBotonVendido, setBorderBotonVendido] = useState('#F3F3F3')

    //cuando hacemos click en el boton en venta nos mostrara todos los pedidos que tenemos en venta
    const handleClickEnVenta = () => {
        setEnventOVendidos(true);

        setColorBotonEnVenta('#17BC9D');
        setBorderBotonEnVenta('#17BC9D');

        setColorBotonVendidos('#5C5C5C');
        setBorderBotonVendido('#F3F3F3');
    };
    //cuando hacemos click en vendidos nos mostrara todos los pedidos que hemos vendido
    const handleClickVendidos = () => {
        setEnventOVendidos(false);

        setColorBotonVendidos('#17BC9D');
        setBorderBotonVendido('#17BC9D');

        setColorBotonEnVenta('#5C5C5C');
        setBorderBotonEnVenta('#F3F3F3');
    };

    return(
        <div className='contenedor-mis-productos'>
            <div className='div-titulo-misproductos'>
                <h2>Tus Productos</h2>
                <p>Aquí podrás subir productos, gestionar los que ya tienes y destacarlos para venderlos antes</p>
            </div>

            <div className='div-botones-venta-vendidos'>
                <div>
                    <input onClick={handleClickEnVenta} style={{color:`${colorBotonEnVenta}`,borderBottom:`1px solid ${borderBotonEnVenta}`}} type='button' value='EN VENTA'></input>
                </div>
                <div>
                    <input onClick={handleClickVendidos} style={{color:`${colorBotonVendidos}`,borderBottom:`1px solid ${borderBotonVendido}`}} type='button' value='VENDIDOS'></input>
                </div>
            </div>
            
            {
                enventOVendidos
                ?
                <EnVenta></EnVenta>
                :
                <Vendidos></Vendidos>
            }
        
        </div>
    )
}

export default MisProductos;