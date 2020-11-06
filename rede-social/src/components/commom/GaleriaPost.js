import React, { Component } from 'react';

import './Estilo/Post.css';
import like from './Estilo/Imagem/like.png';
import { connect } from 'react-redux';
import { fetchPosts} from '../../action/posts';
import { Link } from 'react-router-dom';
import NavSuperior from './NavSuperior';


class GaleriaPost extends Component {

    /*state ={
        like:0
    }

    curtidas = () =>{
        this.setState({like: this.state.like+1})
    }
    
    curtiu = () =>{
        this.curtidas();
        this.props.curtiu(this.state.like)
    }

    recebiCurtida = (likes) =>{
        console.log("O post recebeu" + likes + "Curtidas");
    }*/
    componentDidMount(){
        this.props.fetchPosts();
    }

    render() { 

        let listaPosts = [];
        if(this.props.alunos != null){
            for (let post of this.posts){
                let corpoPost = (
                    <div className="post">
                        <div className="postTitulo">
                            <Link to = {"/" + post.id > post.nomePessoa}></Link>
                        </div>
                        <div className="cont"> {post.mensagem} </div>
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
                )
                listaPosts.push(corpoPost);
                console.log(listaPosts)
            }
        }
        return ( 
            <div>
                <NavSuperior/>
                {listaPosts}
                
            </div>                 
        );
    }
}
 
const mapearStateParaProps = (state, props) => {
    return{listaPosts : state.listaPosts}
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchPosts: () => dispatch(fetchPosts())
    }
}

export default connect(mapearStateParaProps, mapDispatchToProps)(GaleriaPost);
