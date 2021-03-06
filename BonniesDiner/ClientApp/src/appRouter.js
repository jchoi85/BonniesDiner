﻿import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from "react-router";
import { HomePageContainer } from "./components/public/homePageContainer";
//import { Layout } from './components/Layout';
import { LoginContainer } from './components/Users/LoginContainer';
import { MenuPage } from "./components/Users/MenuPage";
import { Layout } from "../src/components/Layout";
import { ViewReportsContainer } from "../src/components/Staff/ViewReportsContainer";
import { ManageOrdersContainer } from './components/Staff/manageOrdersContainer';
import { OrderStatusContainer } from './components/Staff/orderStatusContainer';
import { LogoutContainer } from './components/Users/LogoutContainer';

export const AppRouter = () => {
    return (
        <Router history={browserHistory}>
            <Route path="/" component={Layout}>
                <IndexRoute component={HomePageContainer} />
                <Route path="login" component={LoginContainer} />
                <Route path="menupage" component={MenuPage} />
                <Route path="manageorders" component={ManageOrdersContainer} />
                <Route path="orderstatus" component={OrderStatusContainer} />
				<Route path="ViewReports" component={ViewReportsContainer} />
				<Route path="logout" component={LogoutContainer} />
            </Route>
        </Router>
    );
}
