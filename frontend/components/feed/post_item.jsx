import React from 'react'

class PostItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            post_id: this.props.post.id,
            body: ''
        }
        this.createComment=this.createComment.bind(this)
        this.fetchAllComments=this.fetchAllComments.bind(this)
        this.openCreateComment = this.openCreateComment.bind(this)
    }

    // updateField(field) {
    //     return e => this.setState({
    //         [field]: e.target.value
    //     })
    // }

    openCreateComment() {
        if (document.getElementsByClassName("create-message").length < 1) {
            let createCommentdiv = document.createElement("div")
            let createCommentForm = document.createElement("form")
            let submitCommentButton = document.createElement("button")
            submitCommentButton.setAttribute("type", "submit")
            createCommentForm.onsubmit = (e) => this.createComment()
            let createCommentInput = document.createElement("input")
            createCommentInput.setAttribute("type", "text");
            createCommentInput.setAttribute("id", "create-comment-input");
            createCommentInput.setAttribute("class", "create-message")
            createCommentInput.placeholder = "Add a comment"
            createCommentForm.appendChild(createCommentInput)
            createCommentForm.appendChild(submitCommentButton)
            document.getElementsByClassName("post-item")[0].append(createCommentForm)
        } else {
            document.getElementsByClassName("create-message")[0].remove()
        }
        console.log(document.getElementsByClassName("create-message"))
    }

    createComment() {
        let comment = {
            body: document.getElementById("create-comment-input").value,
            post_id: this.props.post.id
        }
        this.props.createComment(comment)
    }

    fetchAllComments() {
        this.props.fetchAllComments(this.props.post.id)
    }


    render() {
        return (
            <div className="post-item">
                <div className="post-item-container">
                    <div id="delete-button" onClick={() => this.props.deletePost(this.props.post.id)}>X</div>
                    <div id="self-post"></div>
                    <div id="post-item-header-text">
                        <div id="post-item-name">Albert Chen</div>
                        <div id="post2-headline">Software Engineer</div>
                        <div id="post2-time">1m</div>
                    </div>
                </div>
                <div className="post2-body-text">
                    {this.props.post.body}
                    {this.props.post.photoFile}
                </div>
                <div className="post-comments">
                    0 Likes 
                    <h4 onClick={this.openCreateComment}>
                        0 comments
                    </h4>
                </div>
                <div className="post-reacts">
                    <div className="like"><i className="far fa-thumbs-up"></i> Like </div>
                    <div className="comment" onClick={this.openCreateComment}><i className="far fa-comment-alt"></i> Comment </div>
                    <div className="share"><i className="far fa-share-square"></i> Share </div>
                </div>
            </div>
        )
    }
}

export default PostItem