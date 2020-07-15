import React,{useState, useEffect} from 'react';
//css
import './SubirProducto.css';
import {withRouter} from 'react-router-dom';
import {arraCategorias, provincias} from '../../Services/arrayCategorias';
import swal from 'sweetalert';


const SubirProducto = (props) => {

    const [categoria, setCategoria] = useState('');
    const [tipoProducto, setTipoProducto] = useState('');
    const [precio, setPrecio] = useState('');
    const [moneda, setMoneda] = useState('euro')
    const [descripcion, setDescripcion] = useState('');
    const [foto1, setFoto1] = useState('');
    const [foto2, setFoto2] = useState('');
    const [foto3, setFoto3] = useState('');
    const [foto4, setFoto4] = useState('');
    const [foto5, setFoto5] = useState('');
    const [foto6, setFoto6] = useState('');
    const [foto7, setFoto7] = useState('');
    const [foto8, setFoto8] = useState('');
    const [foto9, setFoto9] = useState('');
    const [foto10, setFoto10] = useState('');
    const [ubicacion, setUbicacion] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        if(!localStorage.getItem('primariwallafull')){
            props.history.push('/inicio')
             window.location.reload(true);
             return
        }

        if(!categoria){
            swal('Oops','Selecciona la categoria','error')
        }
        else if(!tipoProducto){
            swal('Oops','Selecciona el tipo de producto','error')
        }
        else if(!precio){
            swal('Oops','Selecciona el precio','error')
        }
        else if(!moneda){
            swal('Oops','Selecciona la moneda','error')
        }
        else if(!descripcion){
            swal('Oops','Selecciona la descripcion','error')
        }
        else if(!ubicacion){
            swal('Oops','Selecciona la ubicacion','error')
        }
        else{
            console.log(localStorage.getItem('primariwallafull'))
            console.log(categoria)
            console.log(tipoProducto)
            console.log(precio)
            console.log(moneda)
            console.log(descripcion)
            console.log(foto1)
            console.log(foto2)
            console.log(foto3)
            console.log(foto4)
            console.log(foto5)
            console.log(foto6)
            console.log(foto7)
            console.log(foto8)
            console.log(foto9)
            console.log(foto10)
            console.log(ubicacion);
        }
        
        //limpiamos todos los campos
        let formulario = document.querySelector('.formulario')
        let inputsFotos = formulario.getElementsByTagName('input');        
        for(let i = 3; i<=12; i++){
            inputsFotos[i].value='';
        }
        setCategoria('0')
        setTipoProducto('')
        setPrecio('')
        setMoneda('euro')
        setDescripcion('')
        setUbicacion('0');
    };

    return(
        <div className='div-subir-productos'>
            <div className='div-producto-subir'>
                <div style={{height:'100px'}}>
                    <p style={{color:'#17BC9D',fontWeight:'bold'}}>¿QUE SUBIRAS?</p>
                    <p style={{fontSize:'15px',marginTop:'20px'}}>En wallafull hay sitio para (casi) todo</p>
                </div>              

            </div>

            <div className='div-informacion-producto-subir'>
                <p style={{color:'#17BC9D',fontWeight:'bold'}}>INFORMACION DE TU PRODUCTO</p>

                <form className='formulario' onSubmit={handleSubmit}>
                    <div className='formulario-arriba'>
                        <label>¿Que estas vendiendo?</label>
                        <br></br>
                        <input type='text' name='producto' value={tipoProducto} onChange={event => setTipoProducto(event.target.value)} placeholder='En pocas palabras...'></input>
                    </div>

                    <div className='formulario-medio'>
                        <div>
                            <label>Precio</label>
                            <br></br>
                            <input type='number' value={precio} onChange={event => setPrecio(event.target.value)} placeholder='(No te pases)'></input>
                        </div>

                        <div>
                            <label>Moneda</label>
                            <br></br>
                            <select value={moneda} onChange={event => setMoneda(event.target.value)}>
                                <option value='euro'>€</option>
                                <option value='libra'>£</option>
                            </select>
                        </div>

                        <div>
                            <label>Categoria</label>
                            <br></br>
                            <select value={categoria} onChange={event => setCategoria(event.target.value)}>
                                <option value='0'>--Sellecciona una categoria--</option>
                                {
                                    arraCategorias.map((dato, key) => {
                                        return(
                                            <option value={dato} key={key}>{dato}</option>
                                        )
                                    })
                                }
                            </select>                            
                        </div>
                    </div>

                    <div className='formulario-abajo'>
                        <label>Descripcion</label>
                        <br></br> 
                        <textarea name='descripcion' value={descripcion} onChange={event => setDescripcion(event.target.value)}>
                        </textarea>
                    </div>
                                    
                    <div className='div-foto-parrafo'>
                        <p style={{color:'#17BC9D',fontWeight:'bold' ,fontSize:'15px',marginLeft:'-15px'}}>FOTOS</p>
                    </div>

                    <div className='div-fotos-formulario'>
                        
                       <div>
                            <input type='file' onChange={event => setFoto1(event.target.files['0'])}></input>
                       </div>

                       <div>
                            <input type='file' onChange={event => setFoto2(event.target.files['0'])}></input>
                       </div>

                       <div>
                            <input type='file' onChange={event => setFoto3(event.target.files['0'])}></input>
                       </div>

                       <div>
                            <input type='file' onChange={event => setFoto4(event.target.files['0'])}></input>
                       </div>

                       <div>
                            <input type='file' onChange={event => setFoto5(event.target.files['0'])}></input>
                       </div>

                       <div>
                            <input type='file' onChange={event => setFoto6(event.target.files['0'])}></input>
                       </div>

                       <div>
                            <input type='file' onChange={event => setFoto7(event.target.files['0'])}></input>
                       </div>

                       <div>
                            <input type='file' onChange={event => setFoto8(event.target.files['0'])}></input>
                       </div>

                       <div>
                            <input type='file' onChange={event => setFoto9(event.target.files['0'])}></input>
                       </div>

                       <div>
                            <input type='file' onChange={event => setFoto10(event.target.files['0'])}></input>
                       </div>
                    </div>

                    <div className='div-foto-parrafo'>
                        <p style={{color:'#17BC9D',fontWeight:'bold' ,fontSize:'15px',marginLeft:'-15px'}}>¿DE QUE COMUINIDAD ERES?</p>
                    </div>
                    
                    <div className='formulario-select-abajo'>
                        <select value={ubicacion} onChange={event => setUbicacion(event.target.value)}>
                        <option value='0'>--Sellecciona una categoria--</option>
                            {
                                provincias.map((dato, key) => {
                                    return(
                                        <option key={key} value={dato}>{dato}</option>
                                    )
                                })
                            }
                        </select>
                    </div>

                    <div className='div-enviar'>
                        <input type='submit' value='Subir producto'></input>
                    </div>
                    
                </form>

            </div>
        </div>
    )
}

export default withRouter(SubirProducto);
