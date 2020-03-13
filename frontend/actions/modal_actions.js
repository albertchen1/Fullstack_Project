export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

export const openModal = (modal, props = {}) => {
    if (props.user) {
        const user = props.user;
        return {
            type: OPEN_MODAL,
            modal,
            user
        }

    } else {
        return {
            type: OPEN_MODAL,
            modal
        };
    }
};

export const closeModal = () => {
    return {
        type: CLOSE_MODAL
    };
};