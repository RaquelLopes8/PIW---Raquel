import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import Galeria from '../components/Galeria';
import NovoPost from '../components/NovoPost';

export default function Rotas(){
    return(
        <Router>
            <Switch>
                <Route exact path="/">
                    <Galeria/>
                </Route>
                <Route path="/postar">
                    <NovoPost/>
                </Route>
            </Switch>
        </Router>
    )
}
