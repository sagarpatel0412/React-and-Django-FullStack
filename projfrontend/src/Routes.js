import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import PrivateRoutes from "./auth/helper/PrivateRoutes";

import Home from "./core/Home";

const Routes = () => {
    return (
        <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Home}/>
           {/* <PrivateRoutes path="/user/dashboard" exact component={} />*/}
        </Switch>
        </BrowserRouter>
    );
};

export default Routes;