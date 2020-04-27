import React from 'react';
import { withRouter } from 'react-router-dom';

class EditHeaderModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            first_name: this.props.user.firstName,
            last_name: this.props.user.lastName,
            location: this.props.user.location
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

    handleInputFirstName(e) {
        this.setState({ first_name: e.currentTarget.value});
    }

    handleInputLastName(e) {
        this.setState({ last_name: e.currentTarget.value});
    }

    handleInputHeadline(e) {
        this.setState({ last_name: e.currentTarget.value});
    }

    handleInputLocation(e) {
        this.setState({ location: e.currentTarget.value});
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
            <div className="edit-header-modal">
                <div className="edit-header-container">
                    <div className="edit-header-top">
                        <h2 id="edit-header-edit-intro">Edit intro</h2>
                        <h2 id="edit-header-exit">X</h2>
                    </div>
                    <div className="edit-header-images">
                        <div id="edit-header-background-image"></div>
                        <div id="edit-header-profile-pic"></div>
                    </div>
                    <div className="edit-header-names-field">
                        <div className="edit-header-firstname">
                            <h3 id="edit-header-firstname-label">First Name *</h3>
                            <form id="edit-header-firstname-form">
                                <input id="edit-header-firstname-box" value={this.state.first_name} 
                                    onChange={this.handleInputFirstName.bind(this)}>
                                </input>
                            </form>
                        </div>
                        <div className="edit-header-lastname">
                            <h3 id="edit-header-lastname-label">Last Name *</h3>
                            <form id="edit-header-lastname-form">
                                <input id="edit-header-lastname-box" value={this.state.last_name}
                                    onChange={this.handleInputLastName.bind(this)}>
                                </input>
                            </form>
                        </div>
                    </div>

                    <div className="edit-header-headline">
                        <h3 id="edit-header-headline-label">Headline *</h3>
                        <form id="edit-header-headline-form">
                            <textarea id="edit-header-headline-box" value={this.state.last_name}
                                onChange={this.handleInputHeadline.bind(this)}>
                            </textarea>
                        </form>
                    </div>
                    <div className="edit-header-location">
                        <h3 id="edit-header-location-label">Location *</h3>
                        <form id="edit-header-location-form">
                            <input id="edit-header-location-box" value={this.state.location}
                                onChange={this.handleInputLocation.bind(this)}>
                            </input>
                        </form>
                    </div>
                    <div className="edit-header-submit-container">
                        <input className='edit-header-submit' type='submit' value='Save' />
                    </div>

                </div>

            </div>
        );
    }
}

export default withRouter(EditHeaderModal);
