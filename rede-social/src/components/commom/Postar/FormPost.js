import React, { Component } from 'react';

import NavSuperior from '../NavSuperior';
import '../Estilo/Form.css'
import { connect } from 'react-redux';
import {addPost} from '../../../action/posts';

class FormPost extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            nome:"",
            menssagem:"",    
        }
    }
    render() { 
        return ( 
            <div>
                <NavSuperior/>
                <form onSubmit={(evento)=> {
                evento.preventDefault();
                        if (this.state.nome.length > 0 && this.state.mensagem.length > 0) {
                            this.props.addPost(this.state.nome, this.state.mensagem, 0);
                        }
                        else {
                            alert("Você deixou campos vazios!");
                        };
                    }}>
                    <h2>Novo post</h2>
                    <label for= "campo-nome">Nome:</label><br/>
                    <input type= "text" id="campo-nome" placeholder= "Digite seu nome..." name= "campo-nome" value= {this.state.nome} onChange={(evento)=> this.setState({nome: evento.target.value})}></input><br/>
                    <label for= "campo-mensagem">Mensagem:</label><br/>
                    <textarea id="campo-mensagem" name="campo-mensagem" placeholder= "Digite sua mensagem..." rows= "6" cols= "50" value= {this.state.memsagem} onChange={(evento)=> this.setState({mensagem: evento.target.value})}></textarea><br/>
                    <input className ="botaoEnviar" type="submit" value="Enviar"></input>
                </form>
            </div>
         );
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addPost: (nome, mensagem, qtdLikes) => dispatch(addPost(nome, mensagem, qtdLikes))
    }
}

export default connect(null, mapDispatchToProps)(FormPost);