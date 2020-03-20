import React, { Component } from 'react';

import Post from './Post';
import './Post.css'

class GaleriaPost extends Component {
    state = { 
        posts: [
            {id:1, nomePessoa:"Alguém", qtdLikes:1},
            {id:2, nomePessoa:"Alguém 2", qtdLikes:5},
            {id:3, nomePessoa:"Alguém 3", qtdLikes:2},
            {id:4, nomePessoa:"Alguém 4", qtdLikes:8},
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