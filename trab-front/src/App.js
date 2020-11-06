import React from 'react';
import './App.css';
import NavSuperior from './components/NavSuperior';
import Rotas from './rotas/Rotas';
import { Provider } from 'react-redux';
import store from './store';


function App() {
  return (
    <Provider store= {store}>
      <NavSuperior></NavSuperior>
      <Rotas></Rotas>
    </Provider>
  );
}


export default App;
