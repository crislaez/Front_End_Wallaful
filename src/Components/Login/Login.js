import React,{useState,useEffect} from 'react';
//css
import './Login.css';
//swall
import swal from 'sweetalert';
//encriotar
import md5 from 'crypto-js/md5';
//Services
import {login} from '../../Services/Services';


const Login = (props) => {
    
    const [email, setEmail] = useState('');
    const [clave, setClave] = useState('');

    //funcion login
    const handleSubmit = (event) => {
        event.preventDefault();
        if(!email){
            swal('Oops','Rellena el correo correctamente','error')
        }
        else if(!email){
            swal('Oops','Rellena la clave correctamente','error')
        }
        else{
            let claveEncriptada = md5(clave)
            console.log(email);
            console.log(clave);
            console.log(JSON.stringify(claveEncriptada));

            let data = new URLSearchParams(`email=${email}&clave=${JSON.stringify(claveEncriptada)}`);
            login(data)
            .then(response => {
                console.log(response)
                if(response.data.toString()){
                    console.log(response.data[0].id_usuario)
                    swal('','Logueado correctamente','success')
                    localStorage.setItem('wallafullroken',response.wallafullroken);
                    localStorage.setItem('primariwallafull', response.data[0].id_usuario)
                    //llamamos a la funcion que esta en app para cerrar esta ventana
                    const funcionCerrarDivLogin = props.funcionCerrarDivLogin;
                    funcionCerrarDivLogin();
                    const funcionArrayDatosUsuario = props.funcionArrayDatosUsuario;
                    funcionArrayDatosUsuario(response.data[0])
                    window.location.reload(true)
                }else{
                    swal('Oops','Email o contraseña incorrectos','error')
                }
            })
            .catch(err => console.log(err))
        }
        setEmail('');
        setClave('');
    };

    return(
        <div className='contenedor-login'>               
            <form onSubmit={handleSubmit}>
                <input name='email' type='text' value={email} onChange={event => setEmail(event.target.value)} placeholder='Direccion de email'></input>
                <br></br>
                <input name='clave' type='password' value={clave} onChange={event => setClave(event.target.value)} placeholder='Contraseña'></input>
                <br></br>
                <input type='submit' value='Iniciar sesion'></input>
            </form>                   

            <div>
                <h3 onClick={props.handleClickRegistrarse}>Registrate</h3>
            </div>
        </div>
    )
}

export default Login;