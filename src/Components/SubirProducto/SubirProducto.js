import React,{useState, useEffect} from 'react';
//css
import './SubirProducto.css';
//ruter
import {withRouter} from 'react-router-dom';
//arrays para los select
import {arraCategorias, provincias} from '../../Services/arrayCategorias';
//alertas
import swal from 'sweetalert';
//Services
import {addProduct} from '../../Services/Services';

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
        else if(!foto1 && !foto2 && !foto3 && !foto4 && !foto5 && !foto6 && !foto7 && !foto8 && !foto9 && !foto10){
            swal('Oops','Selecciona almenos una foto','error')
        }
        else if(!ubicacion){
            swal('Oops','Selecciona la ubicacion','error')
        }
        else{
            let data = new FormData();
            data.append('id_producto','');
            data.append('id_usuario',localStorage.getItem('primariwallafull'));
            data.append('categoria',categoria);
            data.append('tipo_producto',tipoProducto);
            data.append('precio',precio);
            data.append('moneda',moneda);
            data.append('descripcion',descripcion);
            data.append('foto_1',foto1);
            data.append('foto_2',foto2);
            data.append('foto_3',foto4);
            data.append('foto_4',foto4);
            data.append('foto_5',foto5);
            data.append('foto_6',foto6);
            data.append('foto_7',foto7);
            data.append('foto_8',foto8);
            data.append('foto_9',foto9);
            data.append('foto_10',foto10);
            data.append('ubicacion',ubicacion);
         
            addProduct(data)
            .then(response => {
                if(response.success){
                    swal('Ok','Producto subido correctamente','success');
                    props.history.push('/productos/mizona');
                    window.location.reload(true)
                }
                else{
                    swal('Oops','Error al subir el producto','error')
                }
            })
            .catch(err => console.log(err))
        }

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
