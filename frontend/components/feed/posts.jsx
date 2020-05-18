import React from 'react';
import PostItem from './post_item'

class Posts extends React.Component {
    constructor(props) {
        super(props)
        this.deletePost = this.deletePost.bind(this)
    }

    deletePost(id) {
        this.props.deletePost(id) 
    }

    render() {

        return (
            <div className="posts-div">
                {this.props.posts.map((post, idx) => (
                <PostItem
                  key={idx}
                  post={post}
                  deletePost={this.deletePost}
                  createLike={this.props.createLike}
                  deleteLike={this.props.deleteLike}
                  createComment={this.props.createComment}
                  fetchAllComments={this.props.fetchAllComments}
                  currentUser={this.props.user}
                  likes={post.likes ? Object.values(post.likes) : null}
                  comments={post.comments ? Object.values(post.comments) : []}
                />
              ))}
            </div>
        )
    }
}

export default Posts