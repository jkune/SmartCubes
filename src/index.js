import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import store from './redux/store';
import Puzzles from './pages/puzzles';
import Methods from './pages/methods';
import Steps from './pages/steps';
import Algorithms from './pages/algorithms';
import Algorithm from './pages/algorithm';
import Free from './pages/free';

const Root = (
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route exact path="/free" component={Free} />
                <Route exact path="/puzzles" component={Puzzles} />
                <Route exact path="/puzzles/:puzzleId" component={Methods} />
                <Route exact path="/puzzles/:puzzleId/:methodId" component={Steps} />
                <Route exact path="/puzzles/:puzzleId/:methodId/:stepId" component={Algorithms} />
                <Route exact path="/puzzles/:puzzleId/:methodId/:stepId/:algorithmId" component={Algorithm} />
                <Redirect from="/" to="/puzzles" />
            </Switch>
        </BrowserRouter>
    </Provider>
);

ReactDOM.render(Root, document.getElementById('root'));
