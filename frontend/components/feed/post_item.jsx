import React from 'react'

class PostItem extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="post-item">
                <div className="post-item-container">
                    <div id="self-post"></div>
                    <div id="post-item-header-text">
                        <div id="post-item-name">Albert Chen</div>
                        <div id="post2-headline">Software Engineer</div>
                        <div id="post2-time">1m</div>
                    </div>
                </div>
                <div className="post2-body-text">
                    {this.props.post.body}
                </div>
                <div className="post-comments">
                    0 Likes 0 comments
                            </div>
                <div className="post-reacts">
                    <div className="like"><i className="far fa-thumbs-up"></i> Like </div>
                    <div className="comment"><i className="far fa-comment-alt"></i> Comment </div>
                    <div className="share"><i className="far fa-share-square"></i> Share </div>
                </div>
            </div>
        )
    }
}

export default PostItem