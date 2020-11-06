import { configureStore } from '@reduxjs/toolkit';
import ReduxThunk from 'redux-thunk';
import ReducerPosts from '../reducer/index';

const store = configureStore({
    reducer:{
        alunos: ReducerPosts
    },
    middleware: [ReduxThunk]
})

export default store;