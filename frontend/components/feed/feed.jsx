import React from 'react';
import { Link } from 'react-router-dom';
import NavbarContainer from '../nav_bar/navbar_container';
import CreatePostFormContainer from '../feed/create_post_form'
import PostsContainer from './posts_container'

//need a container for openmodal for dispatch to props 


class Feed extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            first_name: '',
            last_name: '',
            location: '',
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.openModal = this.openModal.bind(this)
        this.closeModal = this.closeModal.bind(this)
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    componentDidMount() {
        // console.log(this.props)
        this.props.fetchAllPosts()
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

    openModal() {
        document.getElementsByClassName("feed-div")[0].className="greyed-out"
        document.getElementsByClassName("create-post-modal-hidden")[0].className = "create-post-modal-show"
    }

    closeModal() {
        document.getElementsByClassName("greyed-out")[0].className="feed-div"
        document.getElementsByClassName("create-post-modal-show")[0].className = "create-post-modal-hidden"
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        return (
            <div className="feed-div">
                <NavbarContainer />
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <div className="feed-container">
                    <div className="feed-profile-container">
                        <div className="feed-profile-background"></div>
                        <div className="feed-profile-info">
                            <div id="feed-img"><img src={window.blankprofilepic}/></div>
                            <div id="feed-name">Albert Chen</div>
                            <div id="feed-title">Software Engineer</div>
                        </div>
                        <hr/>
                        <div className="feed-num">
                            <div className="feed-num-container">
                                <div id="feed-num-views-text">Who viewed your profile</div>
                                <div id="feed-num-views-num">0</div>
                            </div>
                            <br/>
                            <div id="feed-num-container">
                                <div id="feed-num-connections-text">Connections</div>
                                <div id="feed-num-connections-num">1</div>
                            </div>
                        </div>
                    </div>
                    <div className="post-container">
                        <div className="post-create">
                            <div className="post-create-container">

                                <div className='icon-create'>
                                    <div className="icon-post">
                                        <i className="ff-edit"></i>
                                    </div>
                                    <div className="icon-text" onClick={this.openModal}>
                                        <i className="fas fa-edit"></i> 
                                        &nbsp; Start a post 
                                    </div>
                                </div>
                                <div className='icon-post'><i className="fas fa-camera" onClick={e => alert("feature not available")} ></i></div>
                                <div className='icon-post'><i className="fas fa-video" onClick={e => alert("feature not available")} ></i></div>
                                <div className='icon-post'><i className="fas fa-file-alt" onClick={e => alert("feature not available")}></i></div>
                            </div>
                            <div className='write-article' onClick={e => alert("feature not available")}>Write an article </div>
                            <div className='on-linkedlist'> on LinkedList</div>
                        </div>
                        <div className="post-list">
                            <div className="post-container">
                                <PostsContainer />
                            </div>
                        </div>
                        <div className="post1-ad">
                            <div className="post1-container">
                                <div id="list-logo-post"></div>
                                <div id="post1-header-text">
                                    <div id="post1-company">LinkedList</div>
                                    <div id="post1-followers">11,332,114 followers</div>
                                    <div id="post1-promoted">Promoted</div>
                                </div>
                            </div>
                            <div className="post1-body-text">
                                See the expanded list of who’s viewed your 
                                profile. Make connections to boost the power of 
                                your network. Try LinkedIn Premium for free. 
                            </div>
                            <div className="post1-pic"></div>
                        </div>
                    </div>
                    <div className="news-container">
                        Today’s news and views
                    </div>
                </div>
                <div className="create-post-modal-hidden">
                    <div className="create-a-post">
                        <div className="modal-header">
                            <CreatePostFormContainer closeModal={this.closeModal}/>
                        </div>
                        <div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Feed;
