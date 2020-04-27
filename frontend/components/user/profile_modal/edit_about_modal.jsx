import React from 'react';
import { withRouter } from 'react-router-dom';

class EditAboutModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // first_name: this.props.user.firstName,
            // last_name: this.props.user.lastName,
            // location: this.props.user.location
            user: this.props.user
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        console.log(this.props.user)
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleInput(e) {
        this.setState({ user: e.currentTarget.value });
    }


    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user).then(this.props.closeModal);
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
            <div className="edit-about-modal">
                <div className="edit-about-container">
                    <div className="edit-about-top">
                        <h2 id="edit-about-title">Edit about</h2>
                        <h2 id="edit-about-exit">X</h2>
                    </div>
                    

                    <div className="edit-about-summary">
                        <h3 id="edit-about-summary-label">Summary </h3>
                        <form id="edit-about-summary-form">
                            <textarea id="edit-about-summary-box" value={this.state.user}
                                onChange={this.handleInput.bind(this)}>
                            </textarea>
                        </form>
                    </div>
                    <div className="edit-about-submit-container">
                        <input className='edit-about-submit' type='submit' value='Save' />
                    </div>

                </div>

            </div>
        );
    }
}

export default withRouter(EditAboutModal);
