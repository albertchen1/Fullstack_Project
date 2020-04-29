import React from "react"
import { withRouter } from 'react-router-dom';
import NavbarContainer from '../nav_bar/navbar_container';
// import EditHeaderModal from '../../components/user/profile_modal/edit_header_modal_container';
import EditHeaderModal from '../../components/user/profile_modal/edit_header_modal';
import EditAboutModal from '../../components/user/profile_modal/edit_about_modal';
import EditExperienceModal from '../../components/user/profile_modal/edit_experience_modal';
import EditEducationModal from '../../components/user/profile_modal/edit_education_modal';
import Education from '../../components/user/profile_modal/education';
import Experience from '../../components/user/profile_modal/experience';
// import {Modal1} from '../../components/feed/modal';

class Profile extends React.Component {

    componentDidMount() {
        console.log(this.props)
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
        this.handleSubmit = this.handleSubmit.bind(this);
        this.openEditModal = this.openEditModal.bind(this)
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
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
                    <Experience experience={experience}/>
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
                <EditHeaderModal user={this.props.user} updateUser={this.props.updateUser}/>
                // null
            )
        }else {
            return null
        }
    }
    
    renderEditAbout() {
        if (this.state.about) {
            return (
                <EditAboutModal user={this.props.user} updateUser={this.props.updateUser}/>
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

                <div className="profile-header-container">
                    <div className="profile-header-background"></div>
                    <div className="profile-header-pic"></div>
                    
                    <div className="profile-header-info">
                        <div className="profile-header-name-edit-line">
                            <div id="profile-header-name">Albert Chen</div>
                            <div id="profile-header-edit-icon" onClick={() => this.openEditModal('header')}><i className="fas fa-pencil-alt"></i></div>
                        </div>
                        
                        <div id="profile-header-title">Software Engineer | React | Redux | Ruby on Rails | JavaScript | Node.js | SQL | Python | Java</div>
                        <div id="profile-header-location">United States</div>
                    </div>
                </div>
                <div className="profile-about-container">
                    <div className="profile-about-header">
                        <h4 id="about-title">About</h4>
                        <div id="profile-about-edit-icon"onClick={() => this.openEditModal('about')}><i className="fas fa-pencil-alt"></i></div>
                    </div>
                    <div className="profile-about-content">I am a software engineer.</div>
                </div>
                <div className="profile-experience-container">
                    <div className="profile-experience-header">
                        <h4 id="experience-title">Experience</h4>
                        <div id="add-experience-icon"><i className="fas fa-plus">


                            {/* <React.Fragment>
                                <button onClick={() => setModal(true)}>Click Here</button>
                                <Modal1
                                    isVisible={isModal}
                                    title="Modal Title"
                                    content={<p>Add your content here</p>}
                                    footer={<button>Cancel</button>}
                                    onClose={() => setModal(false)}
                                />
                            </React.Fragment> */}



                        </i></div>
                    </div>
                    {/* <div id="profile-experience-edit-icon" onClick={() => this.openEditModal('experience')}><i className="fas fa-pencil-alt"></i></div> */}
                    {this.renderExperience()}
                </div>
                <div className="profile-education-container">
                    <div className="profile-education-header">
                        <h4 id="education-title">Education</h4>
                        <div id="add-education-icon"><i className="fas fa-plus"></i></div>
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