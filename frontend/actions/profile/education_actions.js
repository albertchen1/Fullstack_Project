// import * as APIUtil from "../util/session_api_util";
import * as APIUtil from '../../util/profile/education_api_util';
export const RECEIVE_ALL_EDUCATION = 'RECEIVE_ALL_EDUCATION';
export const RECEIVE_EDUCATION = 'RECEIVE_EDUCATION';

export const receiveEducations = (educations) => ({
    type: RECEIVE_ALL_EDUCATION,
    educations
});

export const receiveEducation = (education) => ({
    type: RECEIVE_EDUCATION,
    education
})

export const fetchEducation = (userId) => dispatch => (
    APIUtil.fetchEducation(userId)
        .then(educations => dispatch(receiveEducations(educations)))
)


export const createEducation = (education) => dispatch => (
    APIUtil.createEducation(education)
        // .then(comments => dispatch(receiveAllComments(comments)))
        .then(education => dispatch(receiveEducation(education)))
)

export const updateEducation = education => dispatch => (
    APIUtil.updateEducation(education)
        .then(educations => dispatch(receiveEducations(educations)))
)

export const deleteEducation = (educationId) => dispatch => (
    APIUtil.deleteEducation(educationId)
        .then((educations) => dispatch(receiveEducations(educations)))
)