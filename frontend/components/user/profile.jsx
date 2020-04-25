import React from "react"
import { withRouter } from 'react-router-dom';
import NavbarContainer from '../nav_bar/navbar_container';
// import ExperienceItemIndex from "../experience_items/experience_item_index";
// import EducationItemIndex from '../education_items/education_item_index';
// import SkillsIndex from '../skills/skills_index';

// import ProfileSummary from './profile_summary';
// import ProfileAbout from './profile-about';
// import ProfileNavbar from './profile_nav';

class Profile extends React.Component {

    componentDidMount() {
        console.log(this.props)
        this.props.fetchUser(this.props.user[0].id);
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

    openEditModal(topic) {
        console.log(topic)
        this.setState({[topic]: true})
    }

    renderEditHeader() {
        if (this.state.header) {
            return (
                // <EditHeaderModal user={this.props.user}/>
                // <input value={this.props.user.first_name}>
                null
            )
        }else {
            return null
        }
    }
    renderEditExperience() {
        if (this.state.header) {
            return (
                // <EditExperienceModal />
                null
            )
        }else {
            return null
        }
    }
    renderEditEducation() {
        if (this.state.header) {
            return (
                // <EditEducationModal />
                null
            )
        }else {
            return null
        }
    }
    renderEditAbout() {
        if (this.state.header) {
            return (
                // <EditAboutModal />
                null
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
                        <div id="add-experience-icon"><i className="fas fa-plus"></i></div>
                    </div>
                    <div id="profile-experience-edit-icon" onClick={() => this.openEditModal('experience')}><i className="fas fa-pencil-alt"></i></div>
                </div>
                <div className="profile-education-container">
                    <div className="profile-education-header">
                        <h4 id="education-title">Education</h4>
                        <div id="add-education-icon"><i className="fas fa-plus"></i></div>
                    </div>
                    <div id="profile-education-edit-icon" onClick={() => this.openEditModal('education')}><i className="fas fa-pencil-alt"></i></div>
                </div>


                {/* <ProfileNavbar users={this.props.users} currentUserId={this.props.currentUserId} />

                <div className='profile'>


                    <div className='profile-summary'>
                        <ProfileSummary user={this.props.user} isCurrentUser={isCurrentUser} />
                    </div>

                    <div className='profile-about'>
                        <ProfileAbout user={this.props.user} isCurrentUser={isCurrentUser} />
                    </div>

                    <div className='experience-item-container'>
                        <ExperienceItemIndex userId={this.props.user.id} isCurrentUser={isCurrentUser} />
                    </div>

                    <div className='education-item-container'>
                        <EducationItemIndex userId={this.props.user.id} isCurrentUser={isCurrentUser} />
                    </div>

                    <div className='education-item-container'>
                        <SkillsIndex userId={this.props.user.id} isCurrentUser={isCurrentUser} />
                    </div>


                </div> */}
                {this.renderEditAbout()}
                {this.renderEditExperience()}
                {this.renderEditEducation()}
                {this.renderEditHeader()}
            </div>

        )
    }
}
export default withRouter(Profile)