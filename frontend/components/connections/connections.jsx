import React from 'react';
import { Link } from 'react-router-dom';
import NavbarContainer from '../nav_bar/navbar_container';



class Connections extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            first_name: '',
            last_name: '',
            location: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
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
                                <div id="manage-network-connections-icon"><i class="fas fa-user-friends"></i></div>
                                <h3 id="manage-network-connections-text">Connections</h3>
                            </div>
                            <div id="manage-network-others">
                                <div id="manage-network-others-icon"><i class="fas fa-address-book"></i></div>
                                <div id="manage-network-contacts-text">Contacts</div>
                            </div>
                            <div id="manage-network-others">
                                <div id="manage-network-others-icon"><i class="fas fa-walking"></i></div>
                                <div id="manage-network-people-text">People I Follow</div>
                            </div>
                            <div id="manage-network-others">
                                <div id="manage-network-others-icon"><i class="fas fa-users"></i></div>
                                <div id="manage-network-groups-text">Groups</div>
                            </div>
                            <div id="manage-network-others">
                                <div id="manage-network-others-icon"><i class="fas fa-file-alt"></i></div>
                                <div id="manage-network-pages-text">Pages</div>
                            </div>
                            <div id="manage-network-others">
                                <div id="manage-network-others-icon"><i class="fas fa-hashtag"></i></div>
                                <div id="manage-network-hashtags-text">Hashtags</div>
                            </div>
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
