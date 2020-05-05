import React from "react"
import { withRouter } from 'react-router-dom';
import NavbarContainer from '../nav_bar/navbar_container';
import EditHeaderModal from '../../components/user/profile_modal/edit_header_modal';
import EditAboutModal from '../../components/user/profile_modal/edit_about_modal';
import EditExperienceModal from '../../components/user/profile_modal/edit_experience_modal';
import EditEducationModal from '../../components/user/profile_modal/edit_education_modal';
import Education from '../../components/user/profile_modal/education';
import Experience from '../../components/user/profile_modal/experience';


class Profile extends React.Component {

    componentDidMount() {

        this.props.fetchUser(this.props.user.id)
        this.props.fetchEducation(this.props.user.id)
        this.props.fetchExperience(this.props.user.id)
    }

    // componentDidUpdate(prevProps) {
    //     if (prevProps.match.params.userId != this.props.match.params.userId) {
    //         this.props.fetchUser(this.props.match.params.userId);
    //     }

    // }
    
    constructor(props) {
        super(props);
        // this.state = {
        //     username: this.props.user.username,
        //     first_name: this.props.user.first_name,
        //     last_name: this.props.user.last_name,
        //     location: this.props.user.location
        // };
        this.state = {
            header: false,
            about: false,
            experience: false, 
            education: false
        }
        // this.renderEditAbout = this.renderEditAbout.bind(this)
        // this.renderEditEducation = this.renderEditEducation.bind(this)
        // this.renderEditExperience = this.renderEditExperience.bind(this)
        // this.renderEditHeader = this.renderEditHeader.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.openEditModal = this.openEditModal.bind(this)
        this.closeUpdate = this.closeUpdate.bind(this)
    }

    closeUpdate(field) {
        this.setState({[field]: false})
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        let user = {
            id: this.props.user.id,
            summary: this.state.summary,
            first_name: this.state.firstName,
            last_name: this.state.lastName,
            headline: this.state.headline
        }
        this.props.updateUser(user);
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    renderEducation() {
        if (this.props.educations.length > 0) {
            return (
                this.props.educations.map((education) => (
                    // <div key={education.id}>{education.school}</div>
                    <Education education={education} updateEducation={this.props.updateEducation}/>
                ))
            )
        } else {
            return null
        }
    }
    renderExperience() {
        if (this.props.experiences.length > 0) {
            return (
                this.props.experiences.map((experience) => (
                    // <div key={experience.id}>{experience.title}</div>
                    <Experience experience={experience} updateExperience={this.props.updateExperience}/>
                ))
            )
        } else {
            return null
        }
    }

    openEditModal(topic) {
        console.log(topic)
        this.setState({[topic]: true})
    }

    renderEditHeader() {
        if (this.state.header) {
            return (
                <EditHeaderModal user={this.props.user} updateUser={this.props.updateUser} close={this.closeUpdate}/>
                // null
            )
        }else {
            return null
        }
    }
    
    renderEditAbout() {
        if (this.state.about) {
            return (
                <EditAboutModal user={this.props.user} updateUser={this.props.updateUser} close={this.closeUpdate}/>
            )
        }else {
            return null
        }
    }

    
    render() {
        // if (!this.props.user) {
        //     return null;
        // }

        // let isCurrentUser = true;
        // if (this.props.user.id != this.props.currentUserId) {
        //     isCurrentUser = false;
        // }



        // const [isModal, setModal] = React.useState(false);


        return (
            <div className="profile-page">
                <NavbarContainer />
                <div className="profile-top"></div>
                <div className="profile-header-container">
                    <div className="profile-header-background"></div>
                    <div className="profile-header-pic"></div>
                    
                    <div className="profile-header-info">
                        <div className="profile-header-name-edit-line">
                            <div id="profile-header-name">{this.props.user.firstName}&nbsp;{this.props.user.lastName}</div>
                            <div id="profile-header-edit-icon" onClick={() => this.openEditModal('header')}><i className="fas fa-pencil-alt"></i></div>
                        </div>
                        
                        <div id="profile-header-title">{this.props.user.headline}</div>
                        <div id="profile-header-location"> {this.props.user.location}</div>
                    </div>
                </div>
                <div className="profile-about-container">
                    <div className="profile-about-header">
                        <h4 id="about-title">About</h4>
                        <div id="profile-about-edit-icon"onClick={() => this.openEditModal('about')}><i className="fas fa-pencil-alt"></i></div>
                    </div>
                    <div className="profile-about-content">{this.props.user.summary}</div>
                </div>
                <div className="profile-experience-container">
                    <div className="profile-experience-header">
                        <h4 id="experience-title">Experience</h4>
                        <div id="add-experience-icon"><i className="fas fa-plus" onClick={e => alert("Feature coming soon!")}></i></div>
                    </div>
                    {/* <div id="profile-experience-edit-icon" onClick={() => this.openEditModal('experience')}><i className="fas fa-pencil-alt"></i></div> */}
                    <div className="profile-experience-list">{this.renderExperience()}</div>
                </div>
                <div className="profile-education-container">
                    <div className="profile-education-header">
                        <h4 id="education-title">Education</h4>
                        <div id="add-education-icon"><i className="fas fa-plus" onClick={e => alert("Feature coming soon!")}></i></div>
                    </div>
                    {/* <div id="profile-education-edit-icon" onClick={() => this.openEditModal('education')}><i className="fas fa-pencil-alt"></i></div> */}
                    <div className="profile-education-list">{this.renderEducation()}</div>
                </div>
                {this.renderEditAbout()}
                {this.renderEditHeader()}
            </div>

        )
    }
}
export default withRouter(Profile)