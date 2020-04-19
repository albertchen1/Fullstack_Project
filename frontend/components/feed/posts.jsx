import React from 'react';
import PostItem from './post_item'

class Posts extends React.Component {
    constructor(props) {
        super(props)
        this.deletePost = this.deletePost.bind(this)
    }

    // renderPosts() {
    //     if (this.props.posts.length > 0) {
    //         return this.props.posts.map(post => {
    //             <PostItem post={post}/>
    //         })
    //     } else {
    //         return null;
    //     }
    // }

    deletePost(id) {
        this.props.deletePost(id)
            
    }



    render() {
        // window.onclick = function(e) {
        //     console.log(e.target)
        //     console.log(e.target.matches("three-dot-dropdown"))
        //     if (!e.target.matches("three-dot-dropdown")) {
        //         console.log("yes")
        //         // this.closeDropdown();
        //     }
        // }
        return (
            <div className="posts-div">
                {this.props.posts.map((post, idx) => (
                <PostItem
                  key={idx}
                  post={post}
                  deletePost={this.deletePost}
                  createComment={this.props.createComment}
                  fetchAllComments={this.props.fetchAllComments}
                  comments={this.props.comments}
                />
              ))}
            </div>
        )
    }
}

export default Posts