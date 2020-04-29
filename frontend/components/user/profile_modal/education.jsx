import React from 'react';
import { withRouter } from 'react-router-dom';
import EditEducationModal from './edit_education_modal';

class Education extends React.Component {
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
        this.setState({edit: true})
    }
    closeEdit() {
        this.setState({edit: false})
    }

    renderEdit() {
        if (this.state.edit) {
            return (
                <EditEducationModal education={this.props.education} close={this.closeEdit} updateEducation={this.props.updateEducation}/>
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
        let education = this.props.education
        return (
            <div className="profile-education-list-container">
                <div className="profile-education-pic"></div>
                <div className="profile-education-info">
                    <div id="profile-education-edit-icon" onClick={this.openEdit}><i className="fas fa-pencil-alt"></i></div>
                    <h3 id="profile-education-info-school">{education.school}</h3>
                    <h4 id="profile-education-info-fieldstudy" >{education.fieldStudy}</h4>
                    <h5 id="profile-education-info-start-date" >{education.startYear}</h5>
                    <h5 id="profile-education-info-end-date" >{education.endYear}</h5>
                    <h5 id="profile-education-info-description" >{education.description}</h5>
                </div>
                {this.renderEdit()}
            </div>

        );
    }
}

export default withRouter(Education);
