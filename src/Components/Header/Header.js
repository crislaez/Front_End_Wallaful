import React,{useState, useEffect} from 'react';
//css
import './Header.css';
//rutas
import {withRouter} from 'react-router-dom';
//font awesome
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCommentDots, faSmileBeam} from '@fortawesome/free-regular-svg-icons'
import {faMobileAlt, faSearch, faPlus} from '@fortawesome/free-solid-svg-icons';

const Header = (props) => {

    const [colorX, setColotX] = useState('white');
    const [colorDivX, setColorDivX] = useState('17BC9D');
    const [comprobarLogin, setComprobarLogin] = useState(false)

    useEffect( () => {
        if(!localStorage.getItem('primariwallafull')){
            setComprobarLogin(false)
        }else{
            setComprobarLogin(true)
        }
    },[])
 

    //funcion para loguear
    const handleClickRegistro = () => {
        if(!localStorage.getItem('primariwallafull')){
            //llamamos a la funcion que cargara el panel si no estamos registrados
             const funcionAparecerDivLoguear = props.funcionAparecerDivLoguear;
             funcionAparecerDivLoguear();
         }else{
            console.log('logueado')
         }
    };

    //funcion para subir producto
    const handleClickSubirProducto = () => {
        if(!localStorage.getItem('primariwallafull')){
            //llamamos a la funcion que cargara el panel si no estamos registrados
             const funcionAparecerDivLoguear = props.funcionAparecerDivLoguear;
             funcionAparecerDivLoguear();
         }else{
            props.history.push('/productos/subir');
            window.location.reload(true);
         }
    };

    const handleMouseOver = () => {
        setColotX('#17BC9D');
        setColorDivX('white');
    };

    const handleMouseLeave = () => {
        setColotX('white');
        setColorDivX('#17BC9D');
    };

    const handleCLickRecargar = () => {
        props.history.push('/inicio');
        window.location.reload(true)
    };

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    //redireccion
    const handleClickProductos = () => {
        props.history.push('/productos/mizona');
        window.location.reload(true);
    };

    //funcion para ver los mensajes
    const handleClickVerMensaje = () => {
        if(!localStorage.getItem('primariwallafull')){
           //llamamos a la funcion que cargara el panel si no estamos registrados
            const funcionAparecerDivLoguear = props.funcionAparecerDivLoguear;
            funcionAparecerDivLoguear();
        }else{
            console.log('logueado')
            props.history.push('/mensaje');
        }        
    };

    return(
        <header>

            <div className='header-uno' onClick={handleCLickRecargar}>
                <div><FontAwesomeIcon icon={faMobileAlt} style={{color:'white', paddingLeft:'11px', paddingTop:'5px'}}></FontAwesomeIcon></div>
            </div>

            <div className='header-dos'>
                <form onSubmit={handleSubmit}>                    
                    <legend>
                        <label><FontAwesomeIcon icon={faSearch} style={{color:'#B3B3B3'}}></FontAwesomeIcon></label>
                        <input type='text' placeholder='Buscar en TTodas las categorías'></input>
                    </legend>
                </form>
            </div>

            <div className='header-tres' onClick={handleClickVerMensaje} style={{borderBottom:`2px solid ${props.colorBorderMensaje}`}}>
                <div className='icono-mensaje'><FontAwesomeIcon icon={faCommentDots} style={{color:'#B3B3B3'}}></FontAwesomeIcon></div>
                <div className='texto-mensaje'><h3 style={{color:`${props.colorMensaje}`}}>Mensajes</h3></div>
            </div>

            <div className='header-cuatro'>
                <div className='boton-registro'>
                {
                    comprobarLogin
                    ?
                    <div className='div-mizona' onClick={handleClickProductos} style={{borderBottom:`2px solid ${props.colorBorderMiZona}`}}>
                        <div style={{marginRight:'5%'}}><FontAwesomeIcon icon={faSmileBeam} style={{fontSize:'30px',color:'#B3B3B3'}}></FontAwesomeIcon></div>
                        <div><h3 style={{color:`${props.colorMiZona}`}}>Mi zona</h3></div>
                    </div>
                    :
                    <input onClick={handleClickRegistro} className='boton-izquierda' type='button' value='Registrate o inicia sesion'></input>
                }
                    
                </div>
                <div className='boton-subir-producto'>
                    <button onClick={handleClickSubirProducto} onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave} className='boton-derecha' type='button' > <div style={{background:`${colorDivX}`}}><FontAwesomeIcon icon={faPlus} style={{color:`${colorX}`}}></FontAwesomeIcon></div>Subir producto</button>
                </div>
            </div>

        </header>
    )
}

export default withRouter(Header);