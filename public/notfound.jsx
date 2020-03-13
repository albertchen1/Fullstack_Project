import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
    <div >
        <Link to="/" className="header-link">
            <div className="header-logo"></div>
        </Link>

        <h1 className="notfound-content">
            
            <br/>
            <br/>
            <h2 className="header-pagenotfound">Page Not Found</h2>
            <br/>
            <h3 className="body-pagenotfound">Uh oh, we can’t seem to find the page you’re looking for.  Try going back to the home page.</h3>
            <br/>
            <h2 className="link-returnhome">
                <Link to="/">
                    <div className="button-returnhome"></div>
                </Link>
            </h2>
            <div className="telescope"></div>
        </h1>

    </div>
);
export default NotFound;