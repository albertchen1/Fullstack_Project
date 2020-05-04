import React from 'react';
import { Link } from 'react-router-dom';
import { render } from 'react-dom';
// import { Route, Redirect, withRouter } from 'react-router-dom';

const Navbar = ({ currentUser, logout }) => {
    const sessionLinks = () => (
        <nav className="login-signup">
            <div>
                <Link to="/" className="header-link">
                    <div className="header-logo"></div>
                </Link>
            </div>
            <br/>
            <button className="navbar-signup-button">
                <Link to="/signup">Join now</Link>
            </button>
            &nbsp; &nbsp;
            <button className="navbar-login-button">
                <Link to="/login">Sign in</Link>
            </button>
        </nav>
    );

    const welcomePage = () => (
        <div className="welcome-navbar">
            
            <Link to="/feed" className="header-link">
                <div className="list-logo"></div>
            </Link>
                
            <hgroup className="welcome-header">
                    <Link to="/feed" >
                        <div className="navbar-icons">
                            <i className="fas fa-home"></i>
                            <br/>
                            <div id="navbar-icon-label">Home</div>
                        </div>
                    </Link>
                    <Link to="/connections" >
                        <div className="navbar-icons">
                            <i className="fas fa-user-friends"></i>
                            <br/>
                        <div id="navbar-icon-label">My Network</div>
                        </div>
                    </Link>
                    <Link to="/jobs" >
                        <div className="navbar-icons">
                            <i className="fas fa-suitcase" onClick={e => alert("Feature coming soon!")}></i>
                            <br/>
                        <div id="navbar-icon-label">Jobs</div>
                        </div>
                    </Link>
                    <Link to="/messaging" >
                        <div className="navbar-icons">
                            <i className="fas fa-envelope" onClick={e => alert("Feature coming soon!")}></i>
                            <br/>
                            <div id="navbar-icon-label">Messaging</div>
                        </div>
                    </Link>
                    <Link to="/notifications" >
                        <div className="navbar-icons">
                            <i className="fas fa-bell" onClick={e => alert("Feature coming soon!")}></i>
                            <br/>
                        <div id="navbar-icon-label">Notifications</div>
                        </div>
                    </Link>

                    {/* <button className="header-button-logout" onClick={logout}>Log Out</button> */}
            
                    <div className="navbar-profile">
                        <div className="navbar-pic"></div>

                        <div className="nav-dropdown">
                            Me &nbsp;<i className='fa fa-caret-down'></i>
                            <div className='dropdown-content'>
                                {/* <Link to={`/git/${this.props.currentUser.id}`}>View Profile</Link> */}
                                <Link to="/profile" >
                                    <div className="view-profile">View Profile</div>
                                </Link>
                                <Link to='/'>  <div className="header-button-logout" onClick={logout}>Sign Out</div> </Link>

                            </div> 
                        </div>
                    </div>

            </hgroup>
        </div>
    );


    if (currentUser) {
        return (
            <div className="welcome-page">
                    {welcomePage()}
            </div>
        )
    } else {
        return (
            <div>
                <header className="page-header">
                    {sessionLinks()}
                </header>

            </div>
        )
    }
};


export default Navbar;