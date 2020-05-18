import React from 'react';
import { withRouter } from 'react-router-dom';
import EditExperienceModal from './edit_experience_modal';


class Experience extends React.Component {
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
        this.setState({ edit: true })
    }
    closeEdit() {
        this.setState({ edit: false })
    }

    renderEdit() {
        if (this.state.edit) {
            return (
                <EditExperienceModal experience={this.props.experience} close={this.closeEdit} updateExperience={this.props.updateExperience}/>
            )
        } else {
            return null
        }
    }


    render() {
        let experience = this.props.experience
        return (
            <div className="profile-experience-list-container">
                <div className="profile-experience-pic"></div>
                <div className="profile-experience-info">
                    <div className="profile-experience-icon-title">
                        <h3 id="profile-experience-info-title">{experience.title}</h3>
                        <div id="profile-experience-edit-icon" onClick={this.openEdit}><i className="fas fa-pencil-alt"></i></div>
                    </div>
                    
                    <h4 id="profile-experience-info-company" >{experience.company}</h4>
                    
                    <div className="profile-experience-info-dates">
                        <h5 id="profile-experience-info-start-date-month" >{experience.startDateMonth}&nbsp;</h5>
                        <h5 id="profile-experience-info-start-date-year" >{experience.startDateYear} - </h5>
                        <h5 id="profile-experience-info-end-date-month" >&nbsp;{experience.endDateMonth}&nbsp;</h5>
                        <h5 id="profile-experience-info-end-date-year" >{experience.endDateYear}</h5>
                        
                    </div>
                    <h4 id="profile-experience-info-location" >{experience.location}</h4>
                    <h5 id="profile-experience-info-description" >{experience.description}</h5>
                </div>
                {this.renderEdit()}
            </div>

        );
    }
}

export default withRouter(Experience);
