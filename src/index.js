import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
// import './index.ts';
import './index.css';
import Layout from 'components/layout';
import {routes} from 'config/router';
import {store} from 'config/store'

function App(props){
    return (
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
    )
}

const rootNode = document.getElementById('root');

ReactDOM.render(<App/>, rootNode)

// ReactDOM.createBlockingRoot(rootNode).render(<App />)

// ReactDOM.createRoot(rootNode).render(<App />)