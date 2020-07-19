import React, {useState, useEffect} from 'react';
//css
import './Item.css';
//Services
import {getProductByIdProduct} from '../../Services/Services';
//alertas
import swal from 'sweetalert';

const Item = (props) => {

    const [idProducto, setIdeProducto] = useState('');
    const [datosItem, setDatosItem] = useState('')

    useEffect( () => {

        setIdeProducto(window.location.href[window.location.href.length -1]);
        //llamamos a la funcion que esta en app
        const funcionOcultarNavegadorLateral = props.funcionOcultarNavegadorLateral;
        funcionOcultarNavegadorLateral();
        //obtenemos los datos dle producto
        obtenerProducto(window.location.href[window.location.href.length -1]);
        
    },[idProducto]);

    //funcion para obetener el producto por id recivido
    const obtenerProducto = (id) => {
        getProductByIdProduct(id)
        .then(response => {
            if(response.success){
                console.log(response.data)
                setDatosItem(response.data[0]);
            }else{
                console.log('error')
            }
        })
        .catch(err => console.log(err))
    }

    return(
        <section className='section-item'>
            <div className='div-centro-item'>

                <div className='div-primero-item'>
                    <div className='imagen-item'>
                        <img src={datosItem.foto_perfil} alt='foto-usuario'></img>
                    </div>

                    <div className='di-nombre-usuario'>
                        <p>{datosItem.nombre}</p>
                    </div>

                    <div className='div-botones-item'>
                         
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Item