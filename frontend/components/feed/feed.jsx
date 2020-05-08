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

    // refreshPage() {
    //     window.location.reload();
    // }

    componentDidMount() {
        this.props.fetchAllPosts()
        this.props.fetchAllConnections(this.props.user.id)
        // this.props.fetchUser(this.props.user.id)
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
            // <ul>
            //     {this.props.errors.map((error, i) => (
            //         <li key={`error-${i}`}>
            //             {error}
            //         </li>
            //     ))}
            // </ul>
            null
        );
    }

    render() {
        if (!this.props.user) {window.location.reload()}
        return (
            
            <div className="feed-div">
               {/* {this.refreshPage()}  */}
                <NavbarContainer />

                <div className="feed-container">
                    <div className="feed-profile-container">
                        <div className="feed-profile-background"></div>
                        <div className="feed-profile-info">
                            <Link to="/profile">
                                <div id="feed-img"><img src={window.blankprofilepic}/></div>
                                {/* <div id="feed-name">{this.props.user.firstName}&nbsp;{this.props.user.lastName}</div> */}
                            </Link>
                            {/* <div id="feed-title">{this.props.user.headline}</div> */}
                        </div>
                        <hr/>
                        <div className="feed-num">
                            <div className="feed-num-container">
                                <div id="feed-num-views-text">Who viewed your profile</div>
                                <div id="feed-num-views-num">0</div>
                            </div>
                            <br/>
                            <div className="feed-num-container">
                                <div id="feed-num-connections-text">Connections</div>
                                <Link to="/connection_list" id="feed-num-connections-num">
                                    <div id="feed-num-connections-num">{this.props.connections.length}</div>
                                </Link>
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
                            <div className="post-list-container">
                                <PostsContainer />
                            </div>
                        </div>
                        {/* <div className="post2-post">
                            <div className="post2-container">
                                <div id="shaq-post"></div>
                                <div id="post2-header-text">
                                    <div id="post2-name">Shaquille O'Neal</div>
                                    <div id="post2-headline">Business mogul, Former athlete, Purveyor of fun</div>
                                    <div id="post2-time">5d</div>
                                </div>
                            </div>
                            <div className="post2-body-text">
                                I can't lie - if companies are doing video 
                                interviews via Zoom, I'm not sure I'll be able 
                                to find a job until this pandemic ends.
                                <br/>
                                <br/>
                                My wife gave me a haircut last night, and I 
                                currently look like one of the players in Wii 
                                Tennis
                            </div>
                            <div className="post-likes-comments">
                                0 Likes 0 comments
                            </div>
                            <div className="post-reacts">
                                <div className="like" onClick={e => alert("Feature coming soon!")}><i className="far fa-thumbs-up"></i> Like </div>
                                <div className="comment"><i className="far fa-comment-alt"></i> Comment </div>
                                <div className="share" onClick={e => alert("Feature coming soon!")} ><i className="far fa-share-square"></i> Share </div>
                            </div>
                        </div> */}
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
                                your network. Try LinkedList Premium for free. 
                            </div>
                            <a href="https://premium.linkedin.com/">
                                <div className="post1-pic"></div>
                                <div className="post1-pic-desc">
                                    <h4 id="post1-pic-desc-header"> <br/> LinkedList Premium</h4>
                                    <h4 id="post1-pic-desc-site">linkedlist.com <br/> </h4>
                                </div>
                            </a>    
                            <div className="post-likes-comments">
                                0 Likes 0 comments
                            </div>
                            <div className="post-reacts">
                                <div className="like" onClick={e => alert("Feature coming soon! Try leaving a comment!")}><i className="far fa-thumbs-up"></i> Like </div>
                                <div className="comment"><i className="far fa-comment-alt"></i> Comment </div>
                                <div className="share" onClick={e => alert("Feature coming soon!")}><i className="far fa-share-square"></i> Share </div>
                            </div>
                        </div>
                        {/* <div className="post3-uiuc">
                            <div className="post3-container">
                                <div id="uiuc-post"></div>
                                <div id="post3-header-text">
                                    <div id="post3-company">University of 
                                        Illinois at Urbana-Champaign
                                    </div>
                                    <div id="post3-followers">411,797 followers</div>
                                    <div id="post3-time">1mo</div>
                                </div>
                            </div>
                            <div className="post3-body-text">
                                For the ninth time in the past 10 years, 
                                Illinois has been named among the U.S. colleges 
                                and universities that produce the most Fulbright 
                                U.S. Student Awards.
                            </div>
                            <a href="https://news.illinois.edu/view/6367/806559">
                                <div className="post3-pic"></div>
                                <div className="post3-pic-desc">
                                    <h4 id="post3-pic-desc-header">
                                        <br /> 
                                        U of I among top producers of Fulbright awards
                                    </h4>
                                    <h4 id="post3-pic-desc-site">
                                        news.illinois.edu 
                                        <br /> 
                                    </h4>
                                </div>
                            </a>
                            <div className="post-likes-comments">
                                0 Likes 0 comments
                            </div>
                            <div className="post-reacts">
                                <div className="like" onClick={e => alert("Feature coming soon!")}><i className="far fa-thumbs-up"></i> Like </div>
                                <div className="comment"><i className="far fa-comment-alt"></i> Comment </div>
                                <div className="share" onClick={e => alert("Feature coming soon!")}><i className="far fa-share-square"></i> Share </div>
                            </div>
                        </div> */}
                    </div>
                    <div className="news-container">
                        <div className="news-container-header"> Today’s news and views </div>
                        <div className="news-link">
                            <a target="_blank" href="https://www.linkedin.com/feed/news/nows-a-great-time-for-average-art-4807604/">
                                <div className="news-title"> Now's a great time for average art</div>
                                <div className="news-time"> 1d ago • 9,653 readers</div>
                            </a>
                        </div>
                        <div className="news-link">
                            <a target="_blank" href="https://www.linkedin.com/feed/news/imagining-the-post-pandemic-office-4805468/">
                                <div className="news-title"> Imagining the post-pandemic office</div>
                                <div className="news-time"> 1d ago • 9,003 readers</div>
                            </a>
                        </div>
                        <div className="news-link">
                            <a target="_blank" href="https://www.linkedin.com/feed/news/setting-work-from-home-boundaries-4808276/">
                                <div className="news-title"> Setting work-from-home boundaries</div>
                                <div className="news-time"> 2h ago • 5,217 readers</div>
                            </a>
                        </div>
                        <div className="news-link">
                            <a target="_blank" href="https://www.linkedin.com/feed/news/robots-join-the-coronavirus-fight-4815956/">
                                <div className="news-title"> Robots join the coronavirus fight</div>
                                <div className="news-time"> 1d ago • 2,086 readers</div>
                            </a>
                        </div>
                        <div className="news-link">
                            <a target="_blank" href="https://www.linkedin.com/feed/news/ny-hospitals-on-the-brink-4811772/">
                                <div className="news-title"> NY hospitals 'on the brink'</div>
                                <div className="news-time"> 12h ago • 3,031 readers</div>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="create-post-modal-hidden">
                    {/* <div className="create-a-post"> */}
                    <div className="modal-header">
                        <CreatePostFormContainer closeModal={this.closeModal}/>
                    </div>
                    {/* </div> */}
                </div>
            </div>
        );
    }
}

export default Feed;
