import React from 'react';

import { render } from 'react-dom';

// Import css:
import css from './styles/style.styl';

// import component:
import App from './components/App'; // App component collect every state and functions  from Provider and passed it directly to Main (representional component)
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';

// import react router deps
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';

import Raven from 'raven-js';
import { sentry_url } from './data/config';

Raven.config(sentry_url).install();

// console.log(window.doesNotExist.nope);

const router = (
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App}>
                <IndexRoute component={PhotoGrid}></IndexRoute>
                <Route path="/view/:postId" component={Single}></Route>
            </Route>
        </Router>
    </Provider>
)

render(router, document.getElementById('root'));
