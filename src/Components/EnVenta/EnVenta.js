import React,{useState, useEffect} from 'react';
//css
import './EnVenta.css';
//ruta
import {withRouter} from 'react-router-dom';
//componentes
import DivVacio from '../DivVacio/DivVacio';
//Services
import {getProductByIdUser,removeProductByIdProduct} from '../../Services/Services';
//alerta
import swal from 'sweetalert';

const EnVenta = (props) => {

    const arrayVacio = ['','','','',''];
    const [arrayProductos, setArrayProductos] = useState([]);
    

    useEffect( () => {

        obtenerPeroductosEnVenta(localStorage.getItem('primariwallafull'));
    },[localStorage.getItem('primariwallafull')]);
    
    //funcion para obtener todos los productos en venta
    const obtenerPeroductosEnVenta = (id) => {
        getProductByIdUser(id)
        .then(response => {
            if(response.success){
                setArrayProductos(response.data);
            }
            console.log(response)
        })
        .catch(err => console.log(err))
    };

    //funcioon para borrar el producto
    const handleClickBotonBorrar = (event,id_producto) => {
        let div = event.target.parentNode.parentNode.parentNode.parentNode.getElementsByTagName('div')[0]
        let botonCheck = div.getElementsByTagName('input')

        console.log(id_producto)
        if(botonCheck[0].checked){
            //si borrar  la varaible del localStorage
            if(localStorage.getItem('primariwallafull')){
                removeProductByIdProduct(id_producto)
                .then(response => {
                    if(response.success){
                        swal('Ook','Producto borrado','success');
                        obtenerPeroductosEnVenta(localStorage.getItem('primariwallafull'));
                    }else{
                        swal('Oops','Error al borrar el producto','error')
                    }
                })
                .catch(err => console.log(err))
                
            }else{
                props.history.push('/inicio');
                window.location.reload(true);
            }
           
        }else{
            swal('Oops','Selecciona primero el check','error');
        }
        console.log(id_producto)
    };

    //redireccion a item/:id
    const handleCLickVerProducto = (id_producto) => {
        props.history.push('/item/'+id_producto);
    };
    
    // console.log(arrayProductos)
    return(
        <div className='contenedor-en-venta'>          
            {
                arrayProductos.toString()
                ?
                arrayProductos.map((dato, key) => {
                    return(
                        <div key={key} className='contenedor-producto'>                   
                            <div className='div-check'>
                                <div>
                                    <input type='checkbox'></input>
                                </div>
                            </div>

                            <div className='div-derecha'>
                                <div onClick={() => handleCLickVerProducto(dato.id_producto)} className='div-producto-imagen'>
                                    <img src={dato.foto_1} alt='foto_1'></img>
                                </div>

                                <div className='div-precio-tipo-producto'>
                                    <p style={{fontWeight:'bold'}}>{dato.precio} {dato.moneda}</p>
                                    <p>{dato.tipo_producto}</p>
                                </div>

                                <div className='div-fecha'>
                                    <p>{dato.publicacion}</p>
                                </div>

                                <div className='div-borrar'>
                                    <div><input onClick={(event) => handleClickBotonBorrar(event,dato.id_producto)} type='button' value='BORRAR'></input></div>
                                </div>
                            </div>                            
                        </div>
                    )
                })
                :
                arrayVacio.map((dato, key) => {
                    return(
                         <DivVacio key={key}></DivVacio>
                    )
                })
            }
        </div>
    )
}

export default withRouter(EnVenta);