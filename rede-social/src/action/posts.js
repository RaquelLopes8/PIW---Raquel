import { createAction } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchPostsSucesso = createAction("FETCH_POSTS_SUCESSO");

const baseURL = "http://rest.learncode.academy/api/raquel-lopes/posts%20/";

export const fetchPosts = () => {
    return (dispatch, getState) => {
        axios({
            method: "GET",
            url: baseURL
        }).then(response => {
            dispatch(fetchPostsSucesso(response.data));
        });
    }
}

export const addPost = (nome, mensagem, qtdLikes) => {
    return (dispatch, getState) => {
        axios({
            method: "POST",
            url: baseURL,
            data: {
                nome: nome,
                mensagem: mensagem,
                qtdLikes: qtdLikes
            }
        }).then(() => {
            dispatch(fetchPosts());
            alert('Post adicionado');
        });
    }
}

export const excluirPost = (id) => {
    return (dispatch, getState) => {
        axios({
            method: "DELETE",
            url: baseURL + "/" + id
        }).then((res) => {
            dispatch(fetchPosts());
        });
    }
}

export const darLike = (postAtualizado) => {
    return (dispatch, getState) => {
        axios({
            method: "PUT",
            url: baseURL + "/" + postAtualizado.id,
            data: postAtualizado
        }).then((res) => {
            dispatch(fetchPosts());
        });
    }
}
