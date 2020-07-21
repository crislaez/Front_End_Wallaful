import React,{useState, useEffect} from 'react';
//css
import './NavInicio.css';

const NavInicio = (props) => {

    return(
        <div className='nav-inicio'>
            <div className='navegador'>
                <div className='botones-navegacion'>
                    <input type='button' value='<'></input>
                </div>
                <div className='centro-navegador'>
                </div>

                <div className='botones-navegacion'>
                    <input type='button' value='>'></input>
                </div>
            </div>

        </div>
    )

}

export default NavInicio;

// <div className='caja-navegador'>
//                 </div>
//                 <div className='caja-navegador'>
//                 </div>
//                 <div className='caja-navegador'>
//                 </div>