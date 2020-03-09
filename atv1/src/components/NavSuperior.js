import React from 'react';

import logo from './logo.png';
import './NavSup.css';


class NavSuperior extends React.Component {
    
    render() { 
        return(
            <div className="nav_superior">
                <img src= {logo} alt='logo' className="img"/>
                <div className="divBtn">
                    <button className="btn">Linha do tempo</button>
                    <button className="btn">Perfil</button>
                </div>
                <div className="login"><a href="raquel">Raquel</a></div>
            </div>
        );
    }
}
 
export default NavSuperior;