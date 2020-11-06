import React from 'react';
import {NavLink} from 'react-router-dom';

import logo from './Estilo/Imagem/logo.png';
import './Estilo/NavSuperior.css';

class NavSuperior extends React.Component {

    render() { 
        return ( 
            <div className="nav_superior">
                <img src= {logo} alt='logo' className="img"/>
                <div className="divBtn">
                    <NavLink to="/" className="btn">Linha do tempo</NavLink>
                    <NavLink to="/postar" className="btn">Postar</NavLink>
                </div>
                <div className="login"><a href="raquel">Raquel Lopes</a></div>
            </div>
        );
            
    }
}
 
export default NavSuperior;