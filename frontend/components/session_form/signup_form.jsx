import React from 'react';

class SignupForm extends React.Component {
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

    // handleDemo(e) {
    //     e.preventDefault();
    //     const demo = {
    //         username: `demo${Math.random() * 100000000}@demo.com`,
    //         password: '123456',
    //         first_name: 'Albert',
    //         last_name: 'Chen',
    //         location: 'San Francisco Bay Area',
    //         headline: 'Software Engineer'
    //     };
    //     this.props.processForm(demo) //.then(() => this.props.history.push('/feed'));
    // }
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
                <br/>
                <br/>
                <form onSubmit={this.handleSubmit} className="signup-form-box">
                    Make the most of your professional life
                <br />
                <br />
                    {/* Please {this.props.formType} or {this.props.navLink} */}

                    
                    <div className="signup-form">
                        <div className="signup-errors">{this.renderErrors()}</div>
                        <br/>
                        <label className="signup-email-label">Email/Username</label>
                        <br/>
                        <label>
                            <input type="text"
                                value={this.state.username}
                                onChange={this.update('username')}
                                className="signup-input"
                                // placeholder="Email/Username"
                            />
                        </label>
                        <br/>
                        <br/>
                        <label className="signup-password-label">Password (6 or more characters)</label>
                        <br/>
                        <label>
                            <input type="password"
                                value={this.state.password}
                                onChange={this.update('password')}
                                className="signup-input"
                                // placeholder="Password (6 or more characters)"
                            />
                        </label>
                        <br/>
                        <br/>
                        <label className="signup-fname-label">First Name</label>
                        <br/>
                        <label>
                            <input type="text"
                                value={this.state.first_name}
                                onChange={this.update('first_name')}
                                className="signup-input"
                                // placeholder="First Name"
                            />
                        </label>
                        <br />
                        <br/>
                        <label className="signup-lname-label">Last Name</label>
                        <br/>
                        <label>
                            <input type="text"
                                value={this.state.last_name}
                                onChange={this.update('last_name')}
                                className="signup-input"
                                // placeholder="Last Name"
                            />
                        </label>
                        <br />
                        <br/>
                        <label className="signup-location-label" >Location</label>
                        <br/>
                        <label>
                            <input type="text"
                                value={this.state.location}
                                onChange={this.update('location')}
                                className="signup-input"
                                // placeholder="Location"
                            />
                        </label>
                        <br />

                        <br />
                        <input className="session-submit" type="submit" value="Join" />
                        <br />
                        <br />
                        <button className='session-demo' onClick={this.handleDemo}>Demo User</button>
                        <br/>
                        <br/>

                        <div className="already-on-linkedlist">Already on LinkedList? </div>
                        <div className="already-signin-link">{this.props.navLink}</div>
                    </div>
                </form>
                <br />
                
            </div>
        );
    }
}

export default SignupForm;




// import React from 'react';

// class SignupForm extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             username: '',
//             password: '',
//             first_name: '',
//             last_name: '',
//             location: '',
//         };
//         this.handleSubmit = this.handleSubmit.bind(this);
//         this.handleDemo = this.handleDemo.bind(this);
//         this.displayusererr = this.displayusererr.bind(this);
//         this.displaypassworderr = this.displaypassworderr.bind(this);
//     }

//     displayusererr() {
//         let errorOutput = "";
//         this.props.errors.forEach((ele) => {
//             if (ele === 'Username is invalid') {
//                 errorOutput += ele;
//             }
//         }
//         )
//         return (
//             <div>
//                 {errorOutput}
//             </div>
//         )
//     }
//     displaypassworderr() {
//         let errorOutput = "";
//         this.props.errors.forEach((ele) => {
//             if (ele !== 'Username is invalid') {
//                 errorOutput += ele;
//             }
//         }
//         )
//         return (
//             <div>
//                 {errorOutput}
//             </div>
//         )
//     }


//     update(field) {
//         return e => this.setState({
//             [field]: e.currentTarget.value
//         });
//     }

//     componentWillUnmount() {
//         this.props.clearErrors();
//     }

//     handleSubmit(e) {
//         e.preventDefault();
//         const user = Object.assign({}, this.state);
//         this.props.processForm(user);
//     }

//     handleDemo() {
//         const demo = {
//                         username: `demo${Math.random() * 100000000}@demo.com`, 
//                         password:'123456', 
//                         first_name:'Demo', 
//                         last_name:'User', 
//                         location:'San Francisco Bay Area', 
//                         headline: 'Software Engineer' };
//         this.props.processForm(demo).then(() => this.props.history.push('/feed')); 
//     }

//     renderErrors() {
//         return (
//             <ul>
//                 {this.props.errors.map((error, i) => (
//                     <li className="signup-errors" key={`error-${i}`}>
//                         {error}
//                     </li>
//                 ))}
//             </ul>
//         );
//     }

//     render() {
//         return (
//             <div>
                
                
//                 <div className="signup-form-container">
//                     <form onSubmit={this.handleSubmit} className="signup-form-box">
//                         Make the most of your professional life
//             <br />
//                         {/* Please {this.props.formType} or {this.props.navLink} */}

//                         {/* {this.renderErrors()} */}
//                         <div className="signup-form">
//                             <br />
//                             <label>
//                                 <input type="text"
//                                     value={this.state.username}
//                                     onChange={this.update('username')}
//                                     className="signup-input"
//                                     placeholder="Email/Username"
//                                 />
//                             </label>
//                             <div className="username-error">
//                                 {this.displayusererr()}
//                             </div>
//                             <br />
//                             <label>
//                                 <input type="password"
//                                     value={this.state.password}
//                                     onChange={this.update('password')}
//                                     className="signup-input"
//                                     placeholder="Password (6 or more characters)"
//                                 />
//                             </label>
//                             <div className="password-error">{this.displaypassworderr()}</div>
//                             <br/>


//                             <label>
//                                 <input type="text"
//                                     value={this.state.first_name}
//                                     onChange={this.update('first_name')}
//                                     className="signup-input"
//                                     placeholder="First Name"
//                                 />
//                             </label>
//                             <br />
//                             <br />

//                             <label>
//                                 <input type="text"
//                                     value={this.state.last_name}
//                                     onChange={this.update('last_name')}
//                                     className="signup-input"
//                                     placeholder="Last Name"
//                                 />
//                             </label>
//                             <br />
//                             <br />

//                             <label>
//                                 <input type="text"
//                                     value={this.state.location}
//                                     onChange={this.update('location')}
//                                     className="signup-input"
//                                     placeholder="Location"
//                                 />
//                             </label>
//                             <br />
//                             <br />

//                             <br />
//                             <input className="session-submit" type="submit" value="Join" />
//                             <br/>
//                             <br/>
//                             <button className='session-demo' onClick={this.handleDemo}>Demo User</button>
//                         </div>
//                     </form>
//                     <br />
//                     <label className="already-on-linkedlist">Already on LinkedList? {this.props.navLink}</label>
//                 </div>
//                 {/* <img className="splash_pic1" src={window.splash_pic1} />
//                 <img className="splash_pic2" src={window.splash_pic2} /> */}
//             </div>
//         );
//     }
// }

// export default SignupForm;
