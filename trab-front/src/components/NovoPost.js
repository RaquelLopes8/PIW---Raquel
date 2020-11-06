import React from 'react';
import './NovoPost.css';
import { connect } from 'react-redux';
import { adicionarPost } from '../action/alunos';


class NovoPost extends React.Component {
    constructor (props){
        super (props);
        this.state = {
            nome: "",
            mensagem: "",
        }
    }

    render() {
        return (
            <div className= "novo_post">
                <form onSubmit={(evento)=> {
                        evento.preventDefault();
                        if (this.state.nome.length > 0 && this.state.mensagem.length > 0) {
                            this.props.adicionarPost(this.state.nome, this.state.mensagem, 0);
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
        adicionarPost: (nome, mensagem, qtdLikes) => dispatch(adicionarPost(nome, mensagem, qtdLikes))
    }
}

export default connect(null, mapDispatchToProps)(NovoPost);
