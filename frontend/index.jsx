
import configureStore from "./store/store";
import React from "react";
import ReactDOM from "react-dom";
import Root from "./components/root";
import { login, logout, signup, fetchAllUsers} from './actions/session_actions';

document.addEventListener("DOMContentLoaded", () => {
    let store;
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },
            session: { id: window.currentUser.id }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }

    //added below line from stack overflow https://stackoverflow.com/questions/49772493/getting-a-503-error-when-uploading-to-heroku-with-my-nodejs-application
    // require("http-server").createServer().listen(process.env.PORT);

    // const store = configureStore();
    window.getState = store.getState;
    window.dispatch = store.dispatch;

    window.logout = logout;

    const root = document.getElementById("root");
    ReactDOM.render(<Root store={store} />, root);
});