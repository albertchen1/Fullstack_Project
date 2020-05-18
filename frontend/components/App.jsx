import React from "react";
import Navbar from "./nav_bar/navbar";
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import SplashContainer from './splash/splash';
import ProfileContainer from './user/profile_container'
import FeedContainer from './feed/feed_container'
import ConnectionsContainer from './connections/connections_container'
import ConnectionListContainer from './connections/connection_list_container'
import Profile from './user/profile'
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';
import NotFound from "../../public/notfound";


const App = () => (
    <div>
        <Switch>
            <AuthRoute path="/login" component={LogInFormContainer} />
            <AuthRoute path="/signup" component={SignUpFormContainer} />
            <AuthRoute exact path="/" component={SplashContainer} />
            <ProtectedRoute exact path='/feed' component={FeedContainer} />
            <ProtectedRoute exact path='/connections' component={ConnectionsContainer} />
            <ProtectedRoute exact path='/connection_list' component={ConnectionListContainer} />
            <ProtectedRoute exact path='/profile' component={ProfileContainer} />
            <AuthRoute component={NotFound} />
            <ProtectedRoute component={NotFound} />
        </Switch>

    </div>
);

export default App;