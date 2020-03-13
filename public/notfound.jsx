import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
    <div >
        <Link to="/" className="header-link">
            <div className="header-logo"></div>
        </Link>

        <h1 class="notfound-content">
            
            <br/>
            <br/>
            <h2 class="header-pagenotfound">Page Not Found</h2>
            <br/>
            <h3 class="body-pagenotfound">Uh oh, we can’t seem to find the page you’re looking for.  Try going back to the home page.</h3>
            <br/>
            <h2 class="link-returnhome">
                <Link to="/">
                    <div className="button-returnhome"></div>
                </Link>
            </h2>
            <div className="telescope"></div>
        </h1>

    </div>
);
export default NotFound;