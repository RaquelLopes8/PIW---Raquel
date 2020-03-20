import React, { Component } from 'react';

import './Nav.css';

class Nav extends Component {
    render() { 
        return ( 
            <div>
                <nav className="nav">
                    <div><h3 className="titulo">Quarentena Post</h3></div>
                    <div className="but">
                        <div><a href="a">Perfil</a></div>
                        <div><a href="am">Postes</a></div>
                    </div>
                </nav>
            </div>
         );
    }
}
 
export default Nav;