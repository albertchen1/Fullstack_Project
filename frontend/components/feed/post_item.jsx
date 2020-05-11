import React from 'react'

class PostItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            post_id: this.props.post.id,
            body: '',
            dropdown: false,
            showComments: false
        }
        this.createComment=this.createComment.bind(this)
        this.fetchAllComments=this.fetchAllComments.bind(this)
        this.openCreateComment = this.openCreateComment.bind(this)
        this.openDropdown = this.openDropdown.bind(this)
        this.closeDropdown = this.closeDropdown.bind(this)
        this.renderDropdown = this.renderDropdown.bind(this)
        this.renderViewComments = this.renderViewComments.bind(this)
        this.renderIllinoisHeader = this.renderIllinoisHeader.bind(this)
    }

    // updateField(field) {
    //     return e => this.setState({
    //         [field]: e.target.value
    //     })
    // }

    openCreateComment() {
        let post = this.props.post
        // console.log(document.getElementById(`create-comment-form-${post.id}`))
        // console.log(!document.getElementById(`create-comment-form-${post.id}`) ? "true" : "false")
        if (!document.getElementById(`create-comment-form-${post.id}`)) {
            // <form action="/action_page.php" method="get" id="form1">
            //     <label for="fname">First name:</label>
            //     <input type="text" id="fname" name="fname"/>
            //         <label for="lname">Last name:</label>
            //         <input type="text" id="lname" name="lname"/>
            // </form>

            // <button type="submit" form="form1" value="Submit">Submit</button>
                
            // <div className="">
            //     <form className="create-comment-form" action="" onSubmit={this.createComment()}>
            //         <input type="text" id="create-comment-input" className="create-message" placeholder="Add a comment"/>

            //     </form>
            //     <button form="create-comment-form" type="submit" value="Submit">Submit</button>
            // </div>            
            let createCommentdiv = document.createElement("div")
            let createCommentForm = document.createElement("form")
            let submitCommentButton = document.createElement("button")
            let createCommentpic = document.createElement("img")
            createCommentpic.setAttribute("class", "comment-pic")
            submitCommentButton.setAttribute("type", "submit")
            submitCommentButton.setAttribute("class", "submit-comment")
            submitCommentButton.innerHTML = "Submit";
            createCommentForm.onsubmit = (e) => this.createComment()
            createCommentForm.setAttribute("class", "create-comment-form")
            createCommentForm.setAttribute("id", `create-comment-form-${post.id}`)
            let createCommentInput = document.createElement("input")
            createCommentInput.setAttribute("type", "text");

            createCommentInput.setAttribute("id", `create-comment-input-${post.id}`);
            createCommentInput.setAttribute("class", "create-message")
            createCommentInput.placeholder = "Add a comment..."
            createCommentForm.appendChild(createCommentpic)
            createCommentForm.appendChild(createCommentInput)
            createCommentForm.appendChild(submitCommentButton)
            document.getElementsByClassName(`post-item-${this.props.post.id}`)[0].append(createCommentForm)
            this.setState({showComments: true})
            this.fetchAllComments()
        } else {
            this.setState({showComments: false})
            document.getElementById(`create-comment-form-${post.id}`).remove()
        }
        console.log(document.getElementById(`create-comment-form-${post.id}`))
    }

    createComment() {
        let post = this.props.post
        let comment = {
            body: document.getElementById(`create-comment-input-${post.id}`).value,
            post_id: this.props.post.id
        }
        this.props.createComment(comment)
        document.getElementById(`create-comment-input-${post.id}`).value = ''
    }

    fetchAllComments() {
        this.props.fetchAllComments(this.props.post.id)
    }

    openDropdown() {
        this.setState({dropdown: true})
    }

    closeDropdown() {
        this.setState({dropdown: false})
    }

    renderDropdown() {
        if (this.state.dropdown === true) {
            return (
                <div id="post-dropdown-content">
                    {/* <div id="edit-button"><i className="far fa-edit" onClick={e => alert("Feature coming soon!")}></i> Edit Post</div> */}
                    <div id="delete-button" onClick={() => this.props.deletePost(this.props.post.id)}><i className="far fa-trash-alt"></i> Delete Post</div>
                </div>
            )
        } else {
            return (
                <div id="three-dot-dropdown"></div>
            )
        }
    }

    renderViewComments() {
        if (this.state.showComments) {
            return (
                <div>
                    {this.props.comments.map(comment => {
                    if (comment.postId === this.props.post.id) {
                        return (
                            <div className="comment-list" key={comment.id}>
                                <div className="real-comment-pic"></div>
                                <div className="comment-body-box">
                                    <h3 id="comment-user">{comment.author.firstName}&nbsp;{comment.author.lastName}</h3>
                                    <h3 id="comment-user-headline">{comment.author.headline}</h3>
                                    <div id="comment-body">{comment.body}</div>
                                </div>
                            </div>
                        )
                    } else {
                        return (
                            <div>null</div>
                        )
                    }
                })}
                </div>
                )
        } else {
            return null;
        }
    }
    renderIllinoisHeader() {
        if (this.props.post.author.lastName === 'of Illinois at Urbana-Champaign') {
            return (
                <div>
                    <a target="_blank" href="https://news.illinois.edu/view/6367/806559">
                        <h2 id={`post-body-${this.props.post.author.firstName.length}-desc-header`}>U of I among top producers of Fulbright awards</h2>
                        <h2 id={`post-body-${this.props.post.author.firstName.length}-desc-site`}>news.illinois.edu</h2>
                    </a>
                </div>

            )
        } else {
            return null
        }
    }


    render() {
        let that = this;
        window.onclick = function(e) {
            if (!e.target.matches("#post-dropdown-content")) {
                that.closeDropdown();
            }
        }
        return (
            <div className={`post-item post-item-${this.props.post.id}`}>
                <div className="post-item-container">

                    <div id={`post-${this.props.post.author.firstName}-pic`}></div>
                    <div id="post-item-header-text">
                        <div id="post-item-name-dropdown">
                            <div id="post-item-name">{this.props.post.author.firstName}&nbsp;{this.props.post.author.lastName}</div>
                            <button id="three-dot-dropdown" onClick={this.openDropdown}>
                                {this.renderDropdown()}
                            </button>
                        </div>

                        <div id="post2-headline">{this.props.post.author.headline}</div>
                            <div id="post2-time">{this.props.post.author.lastName.length-3}m</div>
                    </div>
                </div>
                <div className="post2-body-text">
                    {this.props.post.body}

                    {this.props.post.photoFile}
                </div>
                <div id={`post-body-${this.props.post.author.firstName.length}-pic`}></div>
                <div id={`post-body-${this.props.post.author.firstName.length}-desc`}>{this.renderIllinoisHeader()}</div>
                <div className="post-likes-comments" onClick={this.openCreateComment}>
                    <div className="post-likes">0 Likes </div> 
                    <div className="post-comments">{this.props.comments.length} Comments</div>
                </div>
                <div className="post-reacts">
                    <div className="like" onClick={e => alert("Feature coming soon! Try leaving a comment!")}><i className="far fa-thumbs-up"></i> Like </div>
                    <div className="comment" onClick={this.openCreateComment}><i className="far fa-comment-alt"></i> Comment </div>
                    {/* <div className="share" onClick={e => alert("Feature coming soon!")}><i className="far fa-share-square"></i> Share </div> */}
                </div>
                {this.renderViewComments()}
            </div>
        )
    }
}

export default PostItem