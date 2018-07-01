import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from "react-router";
import { HomePageContainer } from "./components/public/homePageContainer";
import { Layout } from './components/Layout';
import { MenuPage } from "./components/Users/MenuPage";


export const AppRouter = () => {
        return (
            <Router history={browserHistory}>
                <Route path="/" component={Layout}>
                    <IndexRoute component={HomePageContainer} />
                    <Route path="/menupage" component={MenuPage} />
                </Route>
            </Router>
        )
}
