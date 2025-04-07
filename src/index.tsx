import React from 'react';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';
import { Provider } from 'react-redux'
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import './index.scss';
import Layout from 'components/layout';
import {routes} from 'config/router';
import {store} from 'config/store'

function App(){
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

ReactDOM.hydrate(<App/>, rootNode)
// ReactDOM.renderToString()
ReactDOMServer.renderToString(<App/>)

// ReactDOM.createBlockingRoot(rootNode).render(<App />)

// ReactDOM.createRoot(rootNode).render(<App />)