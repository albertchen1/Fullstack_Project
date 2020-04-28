import React from 'react';
import { withRouter } from 'react-router-dom';

class Education extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: this.props.user
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
            <div className="profile-education-container">
                <div className="profile-education-pic"></div>
                <div className="profile-education-info">
                    <h3 id="profile-education-info-title" value={this.state.user}>title</h3>
                    <h4 id="profile-education-info-company" value={this.state.user}>company</h4>
                    <h5 id="profile-education-info-dates" value={this.state.user}>dates</h5>
                    <h5 id="profile-education-info-location" value={this.state.user}>location</h5>
                </div>
            </div>

        );
    }
}

export default withRouter(Education);
