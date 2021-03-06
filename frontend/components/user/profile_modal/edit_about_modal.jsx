import React from 'react';
import { withRouter } from 'react-router-dom';


class EditAboutModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.user.id,
            summary: this.props.user.summary
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
        this.props.updateUser(user).then(this.props.close('about'));
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
            <div className="modal">
                <div className="edit-about-modal modal-dialog">
                    <div className="edit-about-container">
                        <div className="edit-about-top">
                            <h2 id="edit-about-title">Edit about</h2>
                            <h2 id="edit-about-exit" onClick={() => this.props.close('about')}>X</h2>
                        </div>
                        

                        <div className="edit-about-summary">
                            <h3 id="edit-about-summary-label">Summary </h3>
                            <form id="edit-about-summary-form">
                                <textarea id="edit-about-summary-box" value={this.state.summary}
                                    onChange={this.update('summary')}>
                                </textarea>
                            </form>
                        </div>
                        <div className="edit-about-submit-container">
                            <input className='edit-about-submit' type='submit' value='Save' onClick={this.handleSubmit} />
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(EditAboutModal);
