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

    // componentDidMount() {
    //     this.props.fetchUser(this.props.match.params.userId);
    // }

    // componentDidUpdate(prevProps) {
    //     if (prevProps.match.params.userId != this.props.match.params.userId) {
    //         this.props.fetchUser(this.props.match.params.userId);
    //     }

    // }
    
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            first_name: '',
            last_name: '',
            location: ''
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
                    <div className="profile-header-info"></div>
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
            </div>

        )
    }
}
export default withRouter(Profile)