import React from 'react';
import { Link } from 'react-router-dom';
import NavbarContainer from '../nav_bar/navbar_container';



class Connections extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderRequests = this.renderRequests.bind(this)
        this.acceptRequest = this.acceptRequest.bind(this)
        this.deleteRequest = this.deleteRequest.bind(this)
    }

    componentDidMount() {
        this.props.fetchAllRequests(this.props.user.id)
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    acceptRequest(id) {
        this.props.deleteRequest(id)
        //then make the connection
    }

    deleteRequest(id) {
        this.props.deleteRequest(id)
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
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

    renderRequests() {
        if (this.props.requests.length > 0) {
            return this.props.requests.map(request => (
                <div className="invitations-list-container">
                    <div className={`invitations-${request.sender.firstName}-pic`}></div>
                    <div className="invitations-user-info">
                        <h4 id="invitations-name">{request.sender.firstName}&nbsp;{request.sender.lastName}</h4>
                        <div className="invitations-headline-buttons">
                            <h4 id="invitations-headline">Actor</h4>
                            <button id="invitations-ignore-button" onClick={() => this.deleteRequest(request.id)}>Ignore</button>
                            <button id="invitations-accept-button" onClick={() => this.acceptRequest(request.id)}>Accept</button>
                        </div>
                    </div>
                </div>
            ))
        } else {
            return null
        }
    }

    render() {
        return (
            <div>
                {/* dispatch(logout()); to logout */}
                <NavbarContainer />

                <div className="connections-page">
                    <div className="manage-network-container">
                        <div className="manage-network-info">
                            <h3 id="manage-network-title">Manage Network</h3>
                            <div id="manage-network-connections">
                                <div id="manage-network-connections-icon"><i className="fas fa-user-friends"></i></div>
                                <h3 id="manage-network-connections-text">Connections</h3>
                            </div>
                            <div id="manage-network-others">
                                <div id="manage-network-others-icon"><i className="fas fa-address-book"></i></div>
                                <div id="manage-network-contacts-text">Contacts</div>
                            </div>
                            <div id="manage-network-others">
                                <div id="manage-network-others-icon"><i className="fas fa-walking"></i></div>
                                <div id="manage-network-people-text">People I Follow</div>
                            </div>
                            <div id="manage-network-others">
                                <div id="manage-network-others-icon"><i className="fas fa-users"></i></div>
                                <div id="manage-network-groups-text">Groups</div>
                            </div>
                            <div id="manage-network-others">
                                <div id="manage-network-others-icon"><i className="fas fa-file-alt"></i></div>
                                <div id="manage-network-pages-text">Pages</div>
                            </div>
                            <div id="manage-network-others">
                                <div id="manage-network-others-icon"><i className="fas fa-hashtag"></i></div>
                                <div id="manage-network-hashtags-text">Hashtags</div>
                            </div>
                        </div>
                    </div>
                    <div className="invitations-container">
                        <div className="invitations-header-container">
                            <h4 id="invitations-label">Invitations</h4>
                        </div>
                        <div className="invitations-list">
                            {this.renderRequests()}
                            {/* <div className="invitations-list-container">
                                <div className="invitations-user-pic"></div>
                                <div className="invitations-user-info">
                                    <h4 id="invitations-name">Steve Carell</h4>
                                    <div className="invitations-headline-buttons">
                                        <h4 id="invitations-headline">Actor</h4>
                                        <button id="invitations-ignore-button">Ignore</button>
                                        <button id="invitations-accept-button">Accept</button>
                                    </div>
                                </div>
                            </div> */}
                        </div>

                    </div>


                </div>









                {/* <div className="login-form-container">
                    <form onSubmit={this.handleSubmit} className="login-form-box">
                        <label className="welcome-back">Welcome Back!</label>
                        <h6>Don't miss your next opportunity. Sign in to stay updated on your professional world.</h6>
                        <br />

                        {this.renderErrors()}
                        <div className="login-form">
                            <br />
                            <label>Username:
                <input type="text"
                                    value={this.state.username}
                                    onChange={this.update('username')}
                                    className="login-input"
                                />
                            </label>
                            <br />
                            <label>Password:
                <input type="password"
                                    value={this.state.password}
                                    onChange={this.update('password')}
                                    className="login-input"
                                />
                            </label>
                            <br />


                            <br />
                            <input className="session-submit" type="submit" value="Log In" />

                        </div>
                        New to LinkedList? {this.props.navLink}
                    </form>
                </div>
                <img className="splash_pic1" src={window.splash_pic1}/>
                <img className="splash_pic2" src={window.splash_pic2}/> */}
            </div>
        );
    }
}

export default Connections;
