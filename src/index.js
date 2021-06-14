import React from 'react';
import ReactDOM from 'react-dom';
import { createStore,applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './rootReducer'
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import _ from 'lodash';
import { printMe } from 'compoents/print';
// import './index.ts';
import './index.css';
import Layout from 'compoents/layout';
import {routes} from './router';

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware))

const store = createStore(rootReducer,composedEnhancer)

ReactDOM.render(
    <Provider store={store}>
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
    </Provider>
    , document.getElementById('root')
)