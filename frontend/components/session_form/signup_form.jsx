import React from 'react';

class SignupForm extends React.Component {
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
        this.handleDemo = this.handleDemo.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    componentWillUnmount() {
        this.props.clearErrors();
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

    handleDemo(e) {
        e.preventDefault();
        const demo = {
            username: 'demo@demo.com',
            password: '123456'
        };
        this.props.login(demo) //.then(() => this.props.history.push('/feed'));
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li className="signup-errors" key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        scroll(0, 0)  //opens at top of page instead of scrolled part of the way down
        return (
            <div className="signup-form-container">
                <div className="signup-logo"></div>
                <form onSubmit={this.handleSubmit} className="signup-form-box">
                    <h2 className='make-the-most'>Make the most of your professional life</h2>
                    <div className="signup-form">
                        <div className="signup-errors-list">{this.renderErrors()}</div>

                        <label className="signup-email-label">Email/Username</label>
                            <input type="text"
                            value={this.state.username}
                            onChange={this.update('username')}
                            className="signup-input"
                            />
                        <label className="signup-password-label">Password (6 or more characters)</label>
                            <input type="password"
                                value={this.state.password}
                                onChange={this.update('password')}
                                className="signup-input"
                            />
                        <label className="signup-fname-label">First Name</label>
                                <input type="text"
                                value={this.state.first_name}
                                onChange={this.update('first_name')}
                                className="signup-input"
                            />
                        <label className="signup-lname-label">Last Name</label>
                            <input type="text"
                                value={this.state.last_name}
                                onChange={this.update('last_name')}
                                className="signup-input"
                            />
                        <label className="signup-location-label" >Location</label>
                            <input type="text"
                                value={this.state.location}
                                onChange={this.update('location')}
                                className="signup-input"
                            />
                        <label className="signup-headline-label" >Headline</label>
                            <input type="text"
                                    value={this.state.headline}
                                    onChange={this.update('headline')}
                                    className="signup-input"
                                />
                        <div className='signup-bottom-buttons'>
                            <input className="session-submit" type="submit" value="Join" />
                            <button className='session-demo' onClick={this.handleDemo}>Demo User</button>
                            <br/>
                            <div className='already-linkedlist-button'>
                                <div className="already-on-linkedlist">Already on LinkedList? </div>
                                <div className="already-signin-link">&nbsp;{this.props.navLink}</div>
                            </div>
                            
                        </div>

                    </div>
                </form>

                
            </div>
        );
    }
}

export default SignupForm;


