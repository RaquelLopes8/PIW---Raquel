import React from 'react';

import logo from './Estilo/Imagem/logo.png';
import './Estilo/NavSuperior.css';

class NavSuperior extends React.Component {

    render() { 
        return ( 
            <div className="nav_superior">
                <img src= {logo} alt='logo' className="img"/>
                <div className="divBtn">
                    <button className="btn">Linha do tempo</button>
                    <button className="btn">Postar</button>
                </div>
                <div className="login"><a href="raquel">Raquel Lopes</a></div>
            </div>
        );
            
    }
}
 
export default NavSuperior;