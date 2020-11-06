import { createReducer } from '@reduxjs/toolkit';
import { fetchAlunosIniciado, fetchAlunosSucesso } from '../action/alunos';

let alunosState = {
    listaAlunos: []
};
const reducerAlunos = createReducer(alunosState, {
    [fetchAlunosSucesso] : (state, action) => {
        state.listaAlunos = action.payload;
    }
});

export default reducerAlunos;
