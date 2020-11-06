import { createStore } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import ReduxThunk from 'redux-thunk';
import ReducerAlunos from '../reducers/alunos';

const store = configureStore({
    reducer:{
        alunos: ReducerAlunos
    },
    middleware: [ReduxThunk]
})

export default store;
