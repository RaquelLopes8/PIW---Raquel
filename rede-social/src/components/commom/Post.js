import React, { Component } from 'react';

import { connect } from 'react-redux';
import like from './Estilo/Imagem/like.png';
import { darLike, excluirPost } from '../../action/posts';

class Post extends Component {
    constructor (props) {
        super (props);
        this.state = {
            id: this.props.id,
            nome: this.props.nomePessoa,
            mensagem: this.props.mensagem,
            qtdLikes: this.props.qtdLikes
        }
    }
    
    state ={
        like:0
    }

    curtidas = () =>{
        this.setState({like: this.state.like+1})
    }
    
    curtiu = () =>{
        this.curtidas();
        this.props.curtiu(this.state.like)
    }

    render() { 
        return ( 
            <div className="post">
                <div className="postTitulo">
                    <div>{this.props.id}</div>
                    <div>{this.props.nomePessoa}</div>
                </div>
                <div className="cont">{this.props.mensagem}</div>
                <div>
                    <button onClick={this.curtiu} 
                    className="butLike" >
                        <img src={like} alt="like"/> {this.state.like}</button>
                </div>
                <div className= "excluir">
                        <button onClick= {()=> {
                                this.props.excluirPost(this.state.id);
                            }}>Excluir</button>
                </div>
            </div>
        );
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        darLike: (postAtualizado) => dispatch(darLike(postAtualizado)),
        excluirPost: (id) => dispatch(excluirPost(id)),
    }
}

export default connect(null, mapDispatchToProps)(Post);
