import React, {useState, useEffect} from 'react';
//css
import './EditarPerfil.css';
//services
import {updateUser} from '../../Services/Services';
//ruta
import {withRouter} from 'react-router-dom';
//alertas
import swal from'sweetalert';

const EditarPerfil = (props) => {

    const [fotoPerfil, setFotoPerfil] = useState('');
    const [fotoPortada, setFotoPortada] = useState('');
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        if(!fotoPerfil){
            swal('Oops','Seleccione la foto de perfil','error');
        }
        else if(!fotoPerfil){
            swal('Oops','Seleccione la foto del banner','error');
        }
        else if(!nombre){
            swal('Oops','Seleccione el nombre','error');
        }
        else if(!apellido){
            swal('Oops','Seleccione el apellido','error');
        }
        else{
            console.log(fotoPerfil)
            console.log(fotoPortada)
            console.log(nombre)
            console.log(apellido)

            let datosUsuario = nombre+' '+apellido
            const data = new FormData();
            data.append = ('foto_perfil',fotoPerfil);
            data.append = ('foto_banner',fotoPortada);
            data.append = ('nombre',datosUsuario);
            
            updateUser(localStorage.getItem('primariwallafull'), data)
            .then(response => {
                console.log(response);
                if(response.success){
                    swal('Ook','Modificado correctamente','success');
                    props.history.push('/productos/mizona');
                    window.location.reload(true);
                }else{
                    swal('Oops','Error al actuializar los datos','error');
                }
            })
            .catch(err => console.log(err));
        };
        
    }

    return(
        <form onSubmit={handleSubmit} className='formulario-editar-perfil'>
               <div >
                    <div>
                        <p>Foto principal</p>
                    </div>
                    <div>
                        <input type='file' onChange={event => setFotoPerfil(event.target.files[0])}></input>
                    </div>                    
                </div>

                <div>
                    <div>
                        <p>Foto de portada</p>
                    </div>
                    <div>
                        <input type='file' onChange={event => setFotoPortada(event.target.files[0])}></input>
                    </div>                    
                </div>

                <div>
                    <div>
                        <p>Nombre</p>
                    </div>
                    <div>
                        <input value={nombre} type='text' onChange={event => setNombre(event.target.value)}></input>
                    </div>                    
                </div>

                <div>
                    <div>
                        <p>Apellidos</p>
                    </div>
                    <div>
                        <input value={apellido} type='text' onChange={event => setApellido(event.target.value)}></input>
                    </div>                    
                </div>

                <div>
                    <input className='input-formulario-editar' type='submit' value='Guardar'></input>
                </div>
        </form>
    )
}

export default withRouter(EditarPerfil)
