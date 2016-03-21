'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory} from 'react-router';

import Layout from './pages/Layout';

const app = document.querySelector('#app');
ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" components={Layout}>
            <IndexRoute components={Layout}></IndexRoute>
            <Route path="/helloworld" components={Layout}></Route>
        </Route>
    </Router>,
app);
