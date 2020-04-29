import React from 'react';
import { withRouter } from 'react-router-dom';
import EditExperienceModal from './edit_experience_modal';


class Experience extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            edit: false
        };
        // this.handleSubmit = this.handleSubmit.bind(this);
        this.renderEdit = this.renderEdit.bind(this)
        this.openEdit = this.openEdit.bind(this)
        this.closeEdit = this.closeEdit.bind(this)
    }

    openEdit() {
        this.setState({ edit: true })
    }
    closeEdit() {
        this.setState({ edit: false })
    }

    renderEdit() {
        if (this.state.edit) {
            return (
                <EditExperienceModal experience={this.props.experience} close={this.closeEdit} />
            )
        } else {
            return null
        }
    }

    // update(field) {
    //     return e => this.setState({
    //         [field]: e.currentTarget.value
    //     });
    // }

    // handleInputSchool(e) {
    //     this.setState({ user: e.currentTarget.value });
    // }

    // handleInputDegree(e) {
    //     this.setState({ user: e.currentTarget.value });
    // }

    // handleInputFieldStudy(e) {
    //     this.setState({ user: e.currentTarget.value });
    // }

    // handleInputStartYear(e) {
    //     this.setState({ user: e.currentTarget.value });
    // }

    // handleInputEndYear(e) {
    //     this.setState({ user: e.currentTarget.value });
    // }

    // handleInputDescription(e) {
    //     this.setState({ user: e.currentTarget.value });
    // }

    // handleSubmit(e) {
    //     e.preventDefault();
    //     const user = Object.assign({}, this.state);
    //     this.props.processForm(user).then(this.props.closeModal);
    // }

    // renderErrors() {
    //     return (
    //         // <ul>
    //         //     {this.props.errors.map((error, i) => (
    //         //         <li key={`error-${i}`}>
    //         //             {error}
    //         //         </li>
    //         //     ))}
    //         // </ul>
    //         null
    //     );
    // }

    render() {
        let experience = this.props.experience
        return (
            <div className="profile-experience-list-container">
                <div className="profile-experience-pic"></div>
                <div className="profile-experience-info">
                    <div id="profile-experience-edit-icon" onClick={this.openEdit}><i className="fas fa-pencil-alt"></i></div>
                    <h3 id="profile-experience-info-school">{experience.title}</h3>
                    <h4 id="profile-experience-info-fieldstudy" >{experience.company}</h4>
                    <h5 id="profile-experience-info-start-date" >{experience.startDateMonth}</h5>
                    <h5 id="profile-experience-info-end-date" >{experience.startDateYear}</h5>
                    <h5 id="profile-experience-info-description" >{experience.endDateMonth}</h5>
                    <h5 id="profile-experience-info-description" >{experience.endDateYear}</h5>
                </div>
                {this.renderEdit()}
            </div>

        );
    }
}

export default withRouter(Experience);
