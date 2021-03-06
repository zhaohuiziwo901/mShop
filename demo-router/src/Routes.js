import React from "react";
import {Router, Route, IndexRoute, browserHistory} from "react-router";
import {Provider} from "react-redux";

import App from "./pages/App";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import store from "./Store";

const createElement = (Component, props) => {
    return (
        <Provider store={store}>
            <Component {...props} />
        </Provider>
    );
};

const history = browserHistory;

const Routes = () => (
    <Router history={history} createElement={createElement}>
        <Route path="/" component={App}>
            <IndexRoute component={Home} />
            <Route path="home" component={Home} />
            <Route path="about" component={About} />
            <Route path="*" component={NotFound} />
        </Route>
    </Router>
);

export default Routes;