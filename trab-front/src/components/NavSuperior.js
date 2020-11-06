import React, {Component} from 'react';
import logo from './Imagem/logo.png';
import './NavegadorSuperior.css'


class NavSuperior extends Component {
    verificarRota(rota) {
        if (rota === window.location.pathname) {
            return "linkAtivo";
        }
        else {
            return "";
        }
    }

    render() {
        return (
            <nav className = "nav_superior">
                <img src= {logo} alt='logo' className= "img"/>
                <div className = "divBtn">
                    <a className= { "btn" + this.verificarRota("/") } href="/">Linha do Tempo</a>
                    <a className= {"btn" + this.verificarRota("/postar") } href="/postar">Postar</a>
                </div>
                <div><span className= "login" >Raquel Lopes</span></div>
            </nav>
         );
    }
}

export default NavSuperior;
