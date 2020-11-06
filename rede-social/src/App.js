import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import GaleriaPost from './components/commom/GaleriaPost';
import FormPost from './components/commom/Postar/FormPost';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <GaleriaPost/>
          </Route>

          <Route path="/postar" component={FormPost}></Route>

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
