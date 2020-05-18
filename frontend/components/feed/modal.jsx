import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import CreatePostFormContainer from './create_post_form'



function Modal(props) {

    const { closeModal } = props;
    let modal;
    let user;

    if (props.modal && typeof props.modal === 'object') {
        modal = props.modal.modal;


        if (props.modal.user) {
            user = props.modal.user;
        }
    } else {
        modal = props.modal;
    }



    if (!modal) {
        return null;
    }
    let component;
    switch (modal) {
        case 'create post':
            component = <CreatePostFormContainer user={user} />;
            break;
        default:
            return null;
    }


    let modalClass;
    if (modal == 'create post') {
        modalClass = 'modal-child-post';

    } else {
        modalClass = 'modal-child';
    }
    return (
        <div className="modal-background" onClick={closeModal}>
            <div className={modalClass} onClick={e => e.stopPropagation()}>
                {component}
            </div>
        </div>
    );
}


const mapStateToProps = state => {
    return {
        modal: state.entities.modal
    };
};

const mapDispatchToProps = dispatch => {
    return {
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);