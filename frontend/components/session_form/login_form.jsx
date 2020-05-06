import React from 'react';

class LoginForm extends React.Component {
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
        this.handleDemo = this.handleDemo.bind(this);
        this.displayusererr = this.displayusererr.bind(this);
        this.displaypassworderr = this.displaypassworderr.bind(this);
    }

    displayusererr(){
        let errorOutput = "";
        this.props.errors.forEach( (ele) => {
                if(ele === 'Invalid email'){
                    errorOutput += ele;
                }
            }
        )
        return (
            <div>
                {errorOutput}
            </div>
        )
    }
    displaypassworderr() {
        let errorOutput = "";
        this.props.errors.forEach((ele) => {
            if (ele !== 'Invalid email') {
                errorOutput += ele;
            }
        }
        )
        return (
            <div>
                {errorOutput}
            </div>
        )
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
        this.props.processForm(demo) //.then(() => this.props.history.push('/feed'));
    }

    renderErrors() {
        return (
            // <ul className="login-error">
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
                
                <div className="login-form-container">
                    <form onSubmit={this.handleSubmit} className="login-form-box">
                        <br/>
                        <div className="login-logo"></div>
                        <br/>
                        <br/>
                        <br/>
                        <label className="login-welcome-back">Welcome Back</label>
                        <br/>
                        <br/>
                        <h6 className="dontmiss">Don't miss your next opportunity. Sign in to stay updated on your professional world.</h6>
                        <br />
                        
                        <div className="login-form">
                            <br />
                            <div className="floating-label-wrap">
                                <input type="text"
                                    value={this.state.username}
                                    onChange={this.update('username')}
                                    className="login-input-username"
                                    // placeholder="Email"
                                    required
                                />
                                <div className="login-username-label" >
                                    Email
                                </div>
                            </div>
                            <div className="username-error">
                                {this.displayusererr()}
                            </div>
                            <br />

                            <div className="floating-label-wrap">
                                <input type="password"
                                    value={this.state.password}
                                    onChange={this.update('password')}
                                    className="login-input-password"
                                    // placeholder="Password (6 or more characters)"
                                    required
                                />
                                <div className="login-password-label">
                                    Password
                                </div>
                            </div>

                            <div className="password-error">{this.displaypassworderr()}</div>
                            <br />


                            <br />
                            <input className="login-session-submit" type="submit" value="Sign In" />
                            <br/>
                            <br/>
                            <button className="login-session-demo" onClick={this.handleDemo}>Demo User</button>
                        </div>
                        <br/>
                        <div className="new-to-linkedlist">New to LinkedList? </div> <div className="new-join-link">{this.props.navLink}</div>
                        <br/>
                    </form>
                </div>
            </div>
        );
    }
}

export default LoginForm;



// import React from 'react';

// class LoginForm extends React.Component {
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
//             if (ele === 'Invalid email') {
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
//             if (ele !== 'Invalid email') {
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
//             username: 'demo@demo.com',
//             password: '123456'
//         };
//         this.props.processForm(demo) //.then(() => this.props.history.push('/feed'));
//     }

//     renderErrors() {
//         return (
//             <ul className="login-error">
//                 {this.props.errors.map((error, i) => (
//                     <li key={`error-${i}`}>
//                         {error}
//                     </li>
//                 ))}
//             </ul>
//         );
//     }




//     render() {
//         return (
//             <div>

//                 <div className="login-form-container">
//                     <form onSubmit={this.handleSubmit} className="login-form-box">
//                         <br />
//                         <div className="login-logo"></div>
//                         <br />
//                         <br />
//                         <br />
//                         <label className="login-welcome-back">Welcome Back</label>
//                         <br />
//                         <br />
//                         <h6 className="dontmiss">Don't miss your next opportunity. Sign in to stay updated on your professional world.</h6>
//                         <br />

//                         {/* {this.renderErrors()} */}
//                         <div className="login-form">
//                             <br />
//                             <div className="floating-label-wrap">
//                                 <input type="text"
//                                     value={this.state.username}
//                                     onChange={this.update('username')}
//                                     className="login-input-username"
//                                     // placeholder="Email"
//                                     required
//                                 />
//                                 <label className="login-username-label" >
//                                     Email
//                                 </label>
//                             </div>
//                             <div className="username-error">
//                                 {this.displayusererr()}
//                             </div>
//                             <br />

//                             <div className="floating-label-wrap">
//                                 <input type="password"
//                                     value={this.state.password}
//                                     onChange={this.update('password')}
//                                     className="login-input-password"
//                                     // placeholder="Password (6 or more characters)"
//                                     required
//                                 />
//                                 <label className="login-password-label">
//                                     Password
//                                 </label>
//                             </div>

//                             <div className="password-error">{this.displaypassworderr()}</div>
//                             <br />


//                             <br />
//                             <input className="login-session-submit" type="submit" value="Sign In" />
//                             <br />
//                             <br />
//                             <button className="login-session-demo" onClick={this.handleDemo}>Demo User</button>
//                         </div>
//                         <br />
//                         <div className="new-to-linkedlist">New to LinkedList? </div> <div className="new-join-link">{this.props.navLink}</div>
//                         <br />
//                     </form>
//                 </div>
//             </div>
//         );
//     }
// }

// export default LoginForm;
