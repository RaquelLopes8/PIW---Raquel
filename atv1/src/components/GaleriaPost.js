import React from 'react';

import Post from './Post';

import './Post.css';

class GaleriaPost extends React.Component {
    render() { 
        return (
            <div className="post">
                <Post name="Carol" mensseger="Sou uma mulher incrível!"></Post>
                <Post name="Erisson" mensseger="Cabe tudo dentro de mim"></Post>
                <Post name="Kamz" mensseger="Estou apaixonada!"></Post>
                <Post name="Mamis" mensseger="Te amo <3"></Post>
                <Post name="TODXS" mensseger="Movimento LGBTI+"></Post>
                <Post name="Papis" mensseger="Como vc tá?"></Post>
            </div>
        );
    }
}
 
export default GaleriaPost;
