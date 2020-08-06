import React, { Component } from 'react';
import "./Navegador.css";

class Navegador extends React.Component{

    render(){
        return(
            <div>
                <nav className="nav">
                    <div><h3 className="titulo">Post</h3></div>
                    <div className="but">
                        <div><a href="a">Perfil</a></div>
                        <div><a href="am">Postes</a></div>
                    </div>
                </nav>
            </div>
        )
    }
}