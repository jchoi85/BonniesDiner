import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from "react-router";
import { HomePageContainer } from "./components/public/homePageContainer";
import { Layout } from "../src/components/Layout";
import { ViewReportsContainer } from "../src/components/Staff/ViewReportsContainer";

export const AppRouter = () => {
        return (
            <Router history={browserHistory}>
                <Route path="/" component={Layout}>
                    <IndexRoute component={HomePageContainer} />
                    <Route path="ViewReports" component={ViewReportsContainer} />
                </Route>
            </Router>
        )
}
