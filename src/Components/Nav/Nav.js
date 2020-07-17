import React,{useState, useEffect} from 'react';
//css
import './Nav.css';
import {withRouter} from 'react-router-dom';
//font awesome
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCommentDots, faGrinBeam, faHeart, faStar} from '@fortawesome/free-regular-svg-icons'
import {faAlignLeft, faChartBar} from '@fortawesome/free-solid-svg-icons';


const Nav = (props) => {

    const handleClickRedicrecion = (redireccion) => {
        props.history.push(redireccion)
        window.location.reload(true)
    };

    return(
        <nav>
         
            <div onClick={() => handleClickRedicrecion('/perfil')}>
                <div>
                    <FontAwesomeIcon icon={faGrinBeam} className='icono'></FontAwesomeIcon>
                </div>
                <p className='p'>PERFIL</p>
            </div>

            <div onClick={() => handleClickRedicrecion('/productos/mizona')}>
                <div>
                    <FontAwesomeIcon icon={faAlignLeft} className='icono'></FontAwesomeIcon>
                </div>
                <p className='p'>PRODUCTOS</p>
            </div>
  
            <div onClick={() => handleClickRedicrecion('/mensaje')}>
                <div>
                    <FontAwesomeIcon icon={faCommentDots} className='icono'></FontAwesomeIcon>
                </div>
                <p className='p'>MENSAJES</p>
            </div>

            <div onClick={() => handleClickRedicrecion('/perfil')}>
                <div>
                    <FontAwesomeIcon icon={faHeart} className='icono'></FontAwesomeIcon>
                </div>
                <p className='p'>FAVORITOS</p>
            </div>
      
            <div onClick={() => handleClickRedicrecion('/perfil')}>
                <div>
                    <FontAwesomeIcon icon={faStar} className='icono'></FontAwesomeIcon>
                </div>
                <p className='p'>OPINIONES</p>
            </div>    

            <div onClick={() => handleClickRedicrecion('/perfil')}>
                <div>
                    <FontAwesomeIcon icon={faChartBar} className='icono'></FontAwesomeIcon>
                </div>
                <p className='p'>ESTADISTICAS</p>
            </div>        

        </nav>
    )
}

export default withRouter(Nav);