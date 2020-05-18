import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../nav_bar/navbar';



class Splash extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            first_name: '',
            last_name: '',
            location: '',
            headline: ''
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
        return (
            <div>
                <Navbar />

                <img className="splash_pic1" src={window.splash_pic1} />
                <h1 className="welcome-message">Welcome to your professional community</h1>
                <div className="container_splash_pic2">
                    <img className="splash_pic2" src={window.splash_pic2} />  
                    <div className="message_splash_pic2">Join your colleagues, classmates, and friends on LinkedList.</div>
                    <button className="alternative-signup-button" type="button" >
                        <Link to="/signup" >Get Started</Link>
                    </button>
                </div>
            </div>
        );
    }
}

export default Splash;
