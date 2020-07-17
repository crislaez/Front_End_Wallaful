import React,{useState, useEffect} from 'react';
//css
import './App.css';
//rutes
import {Switch, Route, Redirect} from 'react-router-dom';
//componentes
import Header from '../Components/Header/Header';
import Nav from '../Components/Nav/Nav';
import Footer from '../Components/Footer/Footer';
import DivLogueate from '../Components/DivLogueate/DivLogueate';
//pages
import Inicio from '../Pages/Inicio/Inicio';
import Mensajes from '../Pages/Mensajes/Mensajes';
import Productos from '../Pages/Productos/Productos';
import Perfil from '../Pages/Perfil/Perfil';

const App = (props) => {

    const [cargarDivLogueate, setCargarDivLogueate] = useState(false);
    const [colorMensaje, setColorMensaje] = useState('#5C5C5C');
    const [colorMiZona, setColorMiZona] = useState('#5C5C5C');
    const [colorBorderMensaje, setcolorBorderMensaje] = useState('#F7F7F7');
    const [colorBorderMiZona, setColorBorderMiZona] = useState('#F7F7F7');
    const [mostrarBarraLateral, setMostrarBarraLateral] = useState(false);
    const [arrayDatosUsuarioLogueado, setArrayDatosUsuarioLogueado] = useState([]);

    //funcion para guardar los datos del usuatio
    const funcionArrayDatosUsuario = (datos) => {
        console.log(datos);
        setArrayDatosUsuarioLogueado(datos)
    }
    //cambiar el border botton de mi zona
    const funcionCambiarColorMiZona = () => {
        setColorMensaje('#5C5C5C');
        setColorMiZona('#17BC9D');
        setColorBorderMiZona('#17BC9D');
        setcolorBorderMensaje('#F7F7F7');
    };

    //cambiar el border botton de mi zona
    const funcionCambiarColorMensaje = () => {
        setColorMiZona('#5C5C5C');
        setColorMensaje('#17BC9D');
        setcolorBorderMensaje('#17BC9D');
        setColorBorderMiZona('#F7F7F7');
    };

    //aparecedivLoguear
    const funcionAparecerDivLoguear = () => {
        setCargarDivLogueate(true);  
    };

    //cerrar componente divLogueate
    const funcionCerrarDivLogin = () => {
        setCargarDivLogueate(false);  
    };

    //mostrar navegadorLateral
    const funcionOcultarNavegadorLateral = () => {
        setMostrarBarraLateral(false);
    }
    //ocultar navegador lateral
    const funcionMostrarNavegadorLateral = () => {
        setMostrarBarraLateral(true)
    }


    return(
        <React.Fragment>
            <Header 
            funcionAparecerDivLoguear={funcionAparecerDivLoguear} 
            colorMensaje={colorMensaje} 
            colorMiZona={colorMiZona} 
            colorBorderMensaje={colorBorderMensaje} 
            colorBorderMiZona={colorBorderMiZona}
            ></Header>
           

            {
                cargarDivLogueate 
                ? <DivLogueate 
                funcionCerrarDivLogin={funcionCerrarDivLogin}
                funcionArrayDatosUsuario={funcionArrayDatosUsuario}
                ></DivLogueate> 
                : 
                <div style={{display:'none'}}></div>
            }
 

            <div className='contenedor'>
            {
                mostrarBarraLateral 
                ? 
                <Nav></Nav> 
                :
                <div style={{display:'none'}}></div>
            }

                <Switch>
                    <Route exact path='/inicio'>
                    <Inicio 
                    funcionOcultarNavegadorLateral={funcionOcultarNavegadorLateral}
                    ></Inicio></Route>

                    <Route exact path='/mensaje'>
                    <Mensajes 
                    funcionCambiarColorMensaje={funcionCambiarColorMensaje} 
                    funcionMostrarNavegadorLateral={funcionMostrarNavegadorLateral}
                    ></Mensajes></Route>

                    <Route exact path='/productos/:string'>
                    <Productos 
                    funcionCambiarColorMiZona={funcionCambiarColorMiZona}
                    funcionMostrarNavegadorLateral={funcionMostrarNavegadorLateral}
                    ></Productos></Route>

                    <Route exact path='/perfil'>
                    <Perfil       
                    funcionCambiarColorMiZona={funcionCambiarColorMiZona}
                    funcionMostrarNavegadorLateral={funcionMostrarNavegadorLateral}              
                    ></Perfil></Route>
                    
                    <Redirect from='/' to='/inicio'></Redirect>
                    <Route path='*'><div>ERROR 404</div></Route>
                </Switch>
            </div>

            {mostrarBarraLateral ?<div style={{display:'none'}}></div> : <Footer></Footer>} 
            
        </React.Fragment>
    )
}

export default App;

