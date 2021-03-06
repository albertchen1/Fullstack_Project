import { combineReducers } from "redux";
import usersReducer from "./users_reducer";
import postsReducer from "./posts_reducer";
import commentsReducer from "./comments_reducer";
import educationsReducer from "./education_reducer";
import experienceReducer from "./experiences_reducer";
import requestsReducer from "./requests_reducer";
import connectionsReducer from "./connections_reducer";

const entitiesReducer = combineReducers({
    users: usersReducer,
    posts: postsReducer,
    comments: commentsReducer,
    educations: educationsReducer,
    experiences: experienceReducer,
    requests: requestsReducer,
    connections: connectionsReducer
});

export default entitiesReducer;