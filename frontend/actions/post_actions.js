// import * as APIUtil from "../util/session_api_util";
import * as APIUtil from "../util/post_api_util";
export const RECEIVE_ALL_POSTS = 'RECEIVE_ALL_POSTS';
export const RECEIVE_POST = 'RECEIVE_POST';

export const receiveAllPosts = (posts) => ({
    type: RECEIVE_ALL_POSTS,
    posts
});

export const receivePost = (post) => ({
    type: RECEIVE_POST,
    post 
})

export const fetchAllPosts = () => dispatch => (
    APIUtil.fetchAllPosts()
      .then(posts => dispatch(receiveAllPosts(posts)))
)

export const fetchPost = (id) => dispatch => (
    APIUtil.fetchPost(id)
      .then(post => dispatch(receivePost(post)))
)

export const createPost = (post) => dispatch => (
    APIUtil.createPost(post)
      .then(posts => dispatch(receiveAllPosts(posts)))
)

export const deletePost = (id) => dispatch => (
    APIUtil.removePost(id)
      .then((posts) => dispatch(receiveAllPosts(posts)))
)