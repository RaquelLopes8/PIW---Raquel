import React from 'react';
import Post from './Post';
import './Galeria.css';
import { connect } from 'react-redux';
import { fetchAlunos } from '../action/alunos';


class Galeria extends React.Component {
    constructor (props){
        super (props);
    }

    componentDidMount(){
        this.props.fetchAlunos();
    }

    render() {
        return (
            <div className= "galeria">
                {
                    this.props.listaAlunos.map((post) => {
                        return(
                                <Post id= {post.id} nome= {post.nome} mensagem= {post.mensagem} qtdLikes= {post.qtdLikes}></Post>
                        );
                    })
                }
            </div>
        );
    }
}

const mapearStateParaProps = (state, props) => {
    return {listaAlunos: state.alunos.listaAlunos}
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchAlunos: () => dispatch(fetchAlunos())
    }
}

export default connect(mapearStateParaProps, mapDispatchToProps)(Galeria);
