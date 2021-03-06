import React, {useState, useEffect} from 'react';
//css
import './Cuenta.css';
//alertas
import swal from 'sweetalert';
//rutas
import {withRouter} from 'react-router-dom';
//services
import {updateAccountUser} from '../../Services/Services';

const Cuenta = (props) => {

    const [nacimiento, setNacimiento] = useState('');
    const [bSexo, setBSexo] = useState('');
    const [colorBHombre, setColorBHombre] = useState('none');
    const [colorTextoBHombre, setColorTextoBHombre] = useState('#5C5C5C');

    const [colorBMujer, setColorMujer] = useState('none');
    const [colorTextoBMujer, setColorTextoBMujer] = useState('#5C5C5C')
    

    const handleClickSexo = (sexo) => {
        setBSexo(sexo);
        if(sexo === 'hombre'){
            setColorBHombre('#5A6870');
            setColorMujer('none');
            setColorTextoBHombre('white');
            setColorTextoBMujer('#5C5C5C');
        }
        else{
            setColorMujer('#5A6870');
            setColorBHombre('none');
            setColorTextoBMujer('white');
            setColorTextoBHombre('#5C5C5C');
        }        
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if(!nacimiento){
            swal('Oops','Rellene la fecha correctamente','error');
        } 
        else if(!bSexo){
            swal('Oops','Rellene el sexo correctamente','error');
        } 
        else{
            console.log(nacimiento);
            console.log(bSexo);

            let data = new URLSearchParams(`nacimiento=${nacimiento}&sexo=${bSexo}`);

            updateAccountUser(parseInt(localStorage.getItem('primariwallafull')), data)
            .then(response => {
                console.log(response)
                if(response.success){
                    swal('Ook','Datos actualizados','success');
                    props.history.push('/productos/mizona');
                }else{
                    swal('Oops','Error al actualizar los datos','error')
                }
            })
            .catch(err => console.log(err))
        }       
        setNacimiento('');
        setBSexo('');
        setColorBHombre('none');
        setColorTextoBHombre('#5C5C5C');
        setColorMujer('none');
        setColorTextoBMujer('#5C5C5C');
    }

    return(
        <form onSubmit={handleSubmit} className='formulario-cuenta'>

            <div>
                <div>
                    <p>Fecha de nacimeinto</p>
                </div>
                <div>
                    <input type='date' value={nacimiento} onChange={params => setNacimiento(params.target.value)}></input>
                </div>
            </div>

            <div>
                <div>
                    <p>Sexo</p>
                </div>
                <div style={{width:'30%'}}>
                    <div>
                        <input onClick={() => handleClickSexo('hombre')} style={{background:`${colorBHombre}`, color:`${colorTextoBHombre}`}} type='button' value='Hombre'></input>
                    </div>
                    <div>
                        <input onClick={() => handleClickSexo('mujer')} style={{background:`${colorBMujer}`,color:`${colorTextoBMujer}`}} type='button' value='Mujer'></input>
                    </div>
                </div>
            </div>

            <div className='div-boton-editar-cuenta'>
                <input type='submit' value='Guardar'></input>
            </div>
        </form>
    )
}

export default withRouter(Cuenta);
