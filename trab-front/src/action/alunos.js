import { createAction } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchAlunosSucesso = createAction("FETCH_ALUNOS_SUCESSO");

const baseURL = "http://rest.learncode.academy/api/raulplassman/alunos";

export const fetchAlunos = () => {
    return (dispatch, getState) => {
        axios({
            method: "GET",
            url: baseURL
        }).then(response => {
            dispatch(fetchAlunosSucesso(response.data));
        });
    }
}

export const adicionarPost = (nome, mensagem, qtdLikes) => {
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
            dispatch(fetchAlunos());
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
            dispatch(fetchAlunos());
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
            dispatch(fetchAlunos());
        });
    }
}
