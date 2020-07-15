import React,{useState, useEffect} from 'react';
//css
import './DivLogueate.css';
//componentes
import Login from '../Login/Login';
import Registro from '../Registro/Registro';
//font awesome
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';

const DivLogueate = (props) => {

    const [queVentanaMostrar, setQueVentanaMostrar] = useState(0);//dependiendo que numero sea, se cargara un componente de login, registro o el default
    const [variableSubTItulo, setVariableSubTItulo] = useState('Registrate o inicia sesion');

    //cuando cliquemos en el boton login
    const handleClickInicioSesion = () => {
        setQueVentanaMostrar(1);
        setVariableSubTItulo('Escribe tus detalles abajo');
    };

    //cuando cliquemos en el botin registro
    const handleClickRegistrarse = () => {
        setQueVentanaMostrar(2);
        setVariableSubTItulo('Escribe tus datos');
    };

    //cuando volvamos a cargar esta ventana
    const handleClickPorDefecto = () => {
        setQueVentanaMostrar(0);
        setVariableSubTItulo('Registrate o inicia sesion');
    };
    
    return(
        <div className='caja-divLogueate'>
            <div className='contenedor-comprobar-login'>
                <div className='titulo-comprobar-login'>
                {
                    queVentanaMostrar === 0
                    ?
                    <div></div>
                    :                   
                    <div onClick={handleClickPorDefecto} className='div-flecha'> <FontAwesomeIcon icon={faArrowLeft} style={{color:'#BABABA', paddingLeft:'10px', paddingTop:'10px'}}></FontAwesomeIcon></div>
                }
                    
                    <div><input onClick={props.funcionCerrarDivLogin} type='button' value='X'></input></div>
                </div>

                <div className='bienvenido-comprobar'>
                    <h3>Bienveniudo a Wallafull</h3>
                    <p>{variableSubTItulo}</p>
                </div>
                {
                    queVentanaMostrar === 0
                    ?
                    <div className='bienbenido-botones'>
                        <div><input onClick={handleClickInicioSesion} style={{borderRight:'1px solid #17BC9D'}} type='button' value='Inicia Sesion'></input></div>
                        <div><input onClick={handleClickRegistrarse} style={{borderLeft:'1px solid #17BC9D'}} type='button' value='Registrate'></input></div>
                    </div>
                    :
                    queVentanaMostrar === 1
                    ?
                    <Login handleClickRegistrarse={handleClickRegistrarse} funcionCerrarDivLogin={props.funcionCerrarDivLogin} funcionArrayDatosUsuario={props.funcionArrayDatosUsuario}></Login>
                    :
                    queVentanaMostrar === 2
                    ?
                    <Registro handleClickInicioSesion={handleClickInicioSesion}></Registro>
                    :
                    <div style={{display:'none'}}></div>

                }
                
            </div>
        </div>
    )
}

export default DivLogueate;