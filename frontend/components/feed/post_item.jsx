import React from 'react'

class PostItem extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="post-item">
                <h1>{this.props.post.body}</h1>
            </div>
        )
    }
}

export default PostItem