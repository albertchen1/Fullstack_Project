import React from 'react';
import { withRouter } from 'react-router-dom';
import EditEducationModal from './edit_education_modal';

class Education extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            edit: false
        };
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

    render() {
        let education = this.props.education
        return (
            <div className="profile-education-list-container">
                <div className={`profile-education-${education.school.split(' ')[0]}-pic`}></div>
                <div className="profile-education-info">
                    <div className="profile-education-school-edit-icon">
                        <h3 id="profile-education-info-school">{education.school}</h3>
                        <div id="profile-education-edit-icon" onClick={this.openEdit}><i className="fas fa-pencil-alt"></i></div>
                    </div>
                    <h4 id="profile-education-info-degree" >{education.degree}</h4>
                    <h4 id="profile-education-info-fieldstudy" >{education.fieldStudy}</h4>
                    <div className="profile-education-info-dates">
                        <h5 id="profile-education-info-start-date" >{education.startYear}</h5>
                        <h5>&nbsp;-&nbsp;</h5>
                        <h5 id="profile-education-info-end-date" >{education.endYear}</h5>
                    </div>
                    
                    <h5 id="profile-education-info-description" >{education.description}</h5>
                </div>
                {this.renderEdit()}
            </div>

        );
    }
}

export default withRouter(Education);
