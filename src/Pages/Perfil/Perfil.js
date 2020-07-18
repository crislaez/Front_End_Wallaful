import React, {useState, useEffect} from 'react';
//css
import './Perfil.css';
//ruta
import {withRouter} from 'react-router-dom';
//alertas
import swal from 'sweetalert';
//componentes
import EditarPerfil from '../../Components/EditarPerfil/EdiarPerfil';
import Cuenta from '../../Components/Cuenta/Cuenta';

const Perfil = (props) => {

    const [cargarComponentesPerfilCuenta, setCargarComponentesPerfilCuenta] = useState(true);
    const [colorBotonPerfil, setColorBotonPerfil] = useState('#17BC9D');
    const [colobBordeBotonPerfil, setColobBordeBotonPerfil] = useState('#17BC9D');
    const [colorBotonCuenta, setColorBotonCuenta] = useState('#5C5C5C');
    const [colobBordeBotonCuenta, setColobBordeBotonCuenta] = useState('#F3F3F3');


    useEffect( () => {
        //llamamos a la funcion de app
        const funcionCambiarColorMiZona = props.funcionCambiarColorMiZona;
        funcionCambiarColorMiZona();
        //llamamos a la funcion que esta en app para miostrar el navegador lateral
        const funcionMostrarNavegadorLateral = props.funcionMostrarNavegadorLateral;
        funcionMostrarNavegadorLateral();

    },[]);

    const handleClickCargarComponente = (bool) => {
        setCargarComponentesPerfilCuenta(bool);
        if(bool){
            setColorBotonPerfil('#17BC9D');
            setColobBordeBotonPerfil('#17BC9D');
            setColorBotonCuenta('#5C5C5C');
            setColobBordeBotonCuenta('#F3F3F3');
        }else{           
            setColorBotonCuenta('#17BC9D');
            setColobBordeBotonCuenta('#17BC9D');
            setColorBotonPerfil('#5C5C5C');
            setColobBordeBotonPerfil('#F3F3F3');
        }
        
    };
    
    //boton para cerrar sesion 
    const handleClickCerrarSesion = () => {
        swal({
                title: "Estas seguro?",
                text: "Cerraras sesion!",
                icon: "warning",
                buttons: true,
                dangerMode: true,
        })
        .then((willDelete) => {
            if (willDelete) {
                localStorage.removeItem('primariwallafull');
                localStorage.removeItem('wallafullroken');
                props.history.push('/inicio');
            swal("Poof! Your imaginary file has been deleted!", {icon: "success",});
            }
        });
        

    }

    return(
        <section className='section-perfil'>
            <div className='contenedor-perfil'>
                <div className='div-titulo-perfil'>
                    <div className='div-izqueirda-editar-perfil'>
                        <h2>Tu perfil</h2>
                        <p>Aqui podras ver y editar los datos de tu perfil | Ver mi perfil publico</p>
                    </div>
                    <div className='div-redecha-editar-perfil'>
                        <input onClick={handleClickCerrarSesion} type='button' value='Cerrar sesion'></input>
                    </div>
                    
                </div>

                <div className='div-botones-perfil'>
                    <div>
                        <input onClick={() => handleClickCargarComponente(true)} style={{color:`${colorBotonPerfil}`, borderBottom:`1px solid ${colobBordeBotonPerfil}`}} type='button' value='PERFIL'></input>
                    </div>

                   <div>
                        <input onClick={() => handleClickCargarComponente(false)} style={{color:`${colorBotonCuenta}`, borderBottom:`1px solid ${colobBordeBotonCuenta}`}} type='button' value='CUENTA'></input>
                   </div>                                       
                </div>

                {
                    cargarComponentesPerfilCuenta
                    ?
                    <EditarPerfil></EditarPerfil>
                    :
                    <Cuenta></Cuenta>

                }
                
            </div>      
        </section>
    )
}

export default withRouter(Perfil)
