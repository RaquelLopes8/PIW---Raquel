import React, { Component } from 'react';
import './Post.css';
import { connect } from 'react-redux';
import { darLike, excluirPost } from '../action/alunos';

class Post extends Component {
    constructor (props) {
        super (props);
        this.state = {
            id: this.props.id,
            nome: this.props.nome,
            mensagem: this.props.mensagem,
            qtdLikes: this.props.qtdLikes
        }
    }

    render() {
        return (
            <div className= "post">
                <h3>{this.state.nome}</h3>
                <span className= "mensagem" >{this.state.mensagem}</span>
                <div className= "botoes">
                    <div className= "likes">
                        <a onClick= {() => {
                                this.setState({ qtdLikes: this.state.qtdLikes + 1 }, function(){
                                    this.props.darLike({
                                        id: this.state.id,
                                        nome: this.state.nome,
                                        mensagem: this.state.mensagem,
                                        qtdLikes: this.state.qtdLikes
                                    });
                                })
                            }}>Curtir</a>
                        <span>{this.state.qtdLikes}</span>
                    </div>
                    <div className= "excluir">
                        <a onClick= {()=> {
                                this.props.excluirPost(this.state.id);
                            }}>Excluir</a>
                    </div>
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
