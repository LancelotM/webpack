import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import _ from 'lodash';
import { printMe } from 'compoents/print';
// import './index.ts';
import './index.css';
import Layout from 'compoents/layout';
import {routes} from './router';


ReactDOM.render(
    <Router>
        <Layout/>
        <Switch>
            {
                routes.map((router)=>{
                    return (
                        <Route key={router.link} exact={router.exact} path={router.path} component={router.component} />
                    )
                })
            }
        </Switch>
    </Router>
    , document.getElementById('root')
)

// fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response => response.json())
//     .then(json => {
//       console.log('We retrieved some data! AND we\'re confident it will work on a variety of browser distributions.')
//       console.log(json)
//     })
//     .catch(error => console.error('Something went wrong when fetching this data: ', error))