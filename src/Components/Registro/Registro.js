import React,{useState,useEffect} from 'react';
//css
import './Registro.css';
//alertas
import swal from 'sweetalert';
//encriotar
import md5 from 'crypto-js/md5';
//servicios
import {addUSer} from '../../Services/Services';

const Registro = (props) => {

    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState(''); 
    const [clave, setClave] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        if(!nombre){
            swal('Oops','Rellena el nombre y apellido correctamente','error');
        }
        else if(!email){
            swal('Oops','Rellena el email correctamente','error');
        }
        else if(!clave){
            swal('Oops','Rellena la clave correctamente','error');
        }
        else{
            console.log(nombre)
            console.log(email)
            let claveEncriptada = md5(clave);
            console.log(JSON.stringify(claveEncriptada));

            let data = new URLSearchParams(`id_usuario=${''}&nombre=${nombre}&email=${email}&clave=${JSON.stringify(claveEncriptada)}`);
            addUSer(data)
            .then(response => {
                console.log(response);
                if(response.success){
                    swal('','Registrado correctamente','success');
                    //llamamos a la funcion que esta en divLogueate para cargar el componente login
                    const handleClickInicioSesion = props.handleClickInicioSesion;
                    handleClickInicioSesion();
                }else{
                    swal('Oops','Error al registrarse','error');
                }
            })
            .catch(err => console.log(err));
            
        }
        setNombre('');
        setEmail('');
        setClave('');
    };
    
    return(
        <div className='contenedor-registro'>
            <form onSubmit={handleSubmit}>
                <input type='text' name='nombre' value={nombre} onChange={event => setNombre(event.target.value)} placeholder='Nombre y apellidos'></input>
                <br></br>
                <input type='text' name='email' value={email} onChange={event => setEmail(event.target.value)} placeholder='Direccion de email'></input>
                <br></br>
                <input type='password' name='clave' value={clave} onChange={event => setClave(event.target.value)} placeholder='Contraseña'></input>
                <br></br>
                <input type='submit' value='Crear una cuenta'></input>
            </form>

            <div>
                <h3 onClick={props.handleClickInicioSesion}>Inicio sesion</h3>
            </div>
        </div>
    )
}

export default Registro;