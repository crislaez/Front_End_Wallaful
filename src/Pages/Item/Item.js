import React, {useState, useEffect} from 'react';
//css
import './Item.css';
//Services
import {getProductByIdProduct} from '../../Services/Services';
//alertas
import swal from 'sweetalert';
//font awesome
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHeart} from '@fortawesome/free-regular-svg-icons';
//imagen por defecto
import emoji from '../../Img/emoji.png'

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

            <div className='div-vacio-item'>
            </div>

            <div className='div-centro-item'>

                <div className='div-primero-item'>
                    <div className='imagen-item'>
                    {
                        datosItem.foto_perfil
                        ?
                        <img src={datosItem.foto_perfil} alt='foto-usuario'></img>
                        :
                        <img src={emoji} alt='foto-usuario'></img>

                    }                        
                    </div>

                    <div className='di-nombre-usuario'>
                        <p>{datosItem.nombre}</p>
                    </div>

                    <div className='div-botones-item'>
                         <div>
                            <button><FontAwesomeIcon icon={faHeart}></FontAwesomeIcon></button>
                         </div>
                         <div>
                            <input type='button' value='Chat'></input>
                         </div>
                    </div>
                    
                </div>

                <div className='div-imagen-item'>
                    <img src={datosItem.foto_1} alt='foto-item'></img>
                </div>

                <div className='div-precio-item'>
                    <p>{datosItem.precio} €</p>
                </div>

                <div className='div-datos-item'>
                    <p>{datosItem.tipo_producto}</p>
                </div>

                <div className='descripcion-item'>
                    <p>{datosItem.descripcion}</p>
                </div>

                <div className='publicacion-producto'>
                    <p>{datosItem.publicacion}</p>
                </div>

            </div>

            <div className='div-vacio-item'>
            </div>

        </section>
    )
}

export default Item