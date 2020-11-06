import { createReducer } from '@reduxjs/toolkit';
import { fetchPostsSucesso } from '../action/posts';

const postsState = {
    listaPosts: [
        {
            id:1, 
            nomePessoa:null, 
            mensagem:"Quarentena dia sei lá qual", 
            qtdLikes:1
        },
        {
            id:2, 
            nomePessoa:null, 
            mensagem:"E vamos de EAD", 
            qtdLikes:5
        }
    ]
};
const reducerPosts = createReducer(postsState, {
    [fetchPostsSucesso]: (state, action) =>{
        state.nomePessoa = null;
    },
    [fetchPostsSucesso] : (state, action) => {
            state.listaPosts = action.payload;
    }
});

export default reducerPosts;



/*const iniState = {
    posts: [
        {
            id:1, 
            nomePessoa:"Miges", 
            mensagem:"Quarentena dia sei lá qual", 
            qtdLikes:1
        },
        {
            id:2, 
            nomePessoa:"Miges 2", 
            mensagem:"E vamos de EAD", 
            qtdLikes:5
        },
        {
            id:3, 
            nomePessoa:"Miges 3", 
            mensagem:"Estou com saudades dos meus amigos", 
            qtdLikes:2},
        {
            id:4, 
            nomePessoa:"P&D TODXS", 
            mensagem: "Cailha de saúde LGBTI+", 
            qtdLikes:8
        }
    ]
};

function ReducerRaiz(state = iniState, action){
    return state;
}

export default ReducerRaiz*/