import React, { Component } from 'react';

import like from './assets/like.svg';

class Post extends Component {
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
                <div className="cont">Faça higienização ^-^ </div>
                <div>
                    <button onClick={this.curtiu} className="butLike" ><img src={like} alt="like"/> {this.state.like} Lavei as mãos </button>
                </div>
            </div>
        );
    }
}
 
export default Post;