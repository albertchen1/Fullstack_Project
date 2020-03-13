import React from 'react';
import PostItem from './post_item'

class Posts extends React.Component {
    constructor(props) {
        super(props)
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

    render() {
        return (
            <div className="posts-div">
                {this.props.posts.map((post, idx) => (
                <PostItem
                  key={idx}
                  post={post}
                />
              ))}
            </div>
        )
    }
}

export default Posts