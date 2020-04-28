import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup, receiveErrors, clearErrors, login } from '../../actions/session_actions';
import SignupForm from './signup_form';

const mapStateToProps = ({ errors }) => {

    return {
        errors: errors.session,
        formType: 'signup',
        navLink: <Link to="/login" className="navlink">Sign in</Link>,
    };

};

const mapDispatchToProps = dispatch => {

    return {
        processForm: (user) => dispatch(signup(user)),
        receiveErrors: (error) => dispatch(receiveErrors(error)),
        clearErrors: () => dispatch(clearErrors()),
        login: (user) => dispatch(login(user))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);
