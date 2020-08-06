import React, { Component } from 'react';

import Post from './Post';
import './Estilo/Post.css';

class GaleriaPost extends Component {
    state = { 
        posts: [
            {id:1, nomePessoa:"Miges", mensagem:"Quarentena dia sei lá qual", qtdLikes:1},
            {id:2, nomePessoa:"Miges 2", mensagem:"E vamos de EAD", qtdLikes:5},
            {id:3, nomePessoa:"Miges 3", mensagem:"Estou com saudades dos meus amigos", qtdLikes:2},
            {id:4, nomePessoa:"P&D TODXS", mensagem: "Cailha de saúde LGBTI+", qtdLikes:8}
        ]
    }

    recebiCurtida = (likes) =>{
        console.log("O post recebeu" + likes + "Curtidas");
    }

    render() { 
        return ( 
            <div className="posts">
                {this.state.posts.map(
                    (posts) => (
                        <Post nomePessoa={posts.nomePessoa} 
                        mensagem={posts.mensagem}
                        qtdLikes={posts.qtdLikes}
                        curtiu={this.recebiCurtida}
                        />
                    )
                )}
            </div> 
         );
    }
}
 
export default GaleriaPost;