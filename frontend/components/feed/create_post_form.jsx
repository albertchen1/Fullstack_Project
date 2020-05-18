import React from 'react';
import { connect } from 'react-redux';
import { createPost } from '../../actions/post_actions';
import { closeModal } from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => {
    const post = { body: '' };
    // state.users is current user 
    const user = state.entities.users;
    //ownProps.user is undefined 
    // const user = ownProps.user;
    return {
        post,
        user,
    }

}

const mapDispatchToProps = (dispatch) => {
    return {
        createPost: post => dispatch(createPost(post))
    }
}

class CreatePostForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            body: ''
        }
        this.state = this.props.post;
        this.state.photoFile = null;
        this.handleSubmit = this.handleSubmit.bind(this)

    }

    update(field) {
        return (e) => {
            this.setState({ [field]: e.target.value });
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        let form = {
            body: this.state.body
        }
        this.props.createPost(form)
        .then(() => {
            this.setState({body: ''})
            this.props.closeModal();
        })

    }

    handleInput(e) {
        this.setState({ body: e.currentTarget.value });
    }
    handleFile(e) {
        this.setState({ photoFile: e.currentTarget.files[0] });


    }


    render() {
        let that = this;
        window.onclick = function(e) {
            if (!e.target.matches(".create-post-modal-show")) {
                // console.log("not matching")
                // that.props.closeModal();
            } else {
                // console.log("dont close")
            }
        }
        return (

                <div className="create-post-outer">
                    <div className='create-post-header'>
                        <div className="create-a-post">Create a post</div>
                        <div onClick={this.props.closeModal} className="close-post-x">X</div>
                    </div>
                    <div className="create-post-pic-name">
                        <div id="create-post-pic"></div>
                        <div id="create-post-name-anyone">
                            <div id="create-post-name">Albert Chen</div>
                            <div id="create-post-anyone"><i className="fas fa-globe-americas"></i>Anyone<i className="fas fa-sort-down"></i></div>
                        </div>
                        
                    </div>

                    <form onSubmit={this.handleSubmit.bind(this)}>
                        <textarea 
                            className='create-post-form'
                            type='text'
                            value={this.state.body}
                            onChange={this.handleInput.bind(this)}
                            placeholder='What do you want to talk about?' />
                        <br />
                        <br />

                        <div className='create-post-bottom'>
                            <div className='post-form-icons'>
                                <div className='icon-post-form'>
                                    {/* <div id="icon-post-form-each"><i className="fas fa-camera"></i></div>
                                    <div id="icon-post-form-each"><i className="fas fa-video"></i></div>
                                    <div id="icon-post-form-each"><i className="fas fa-file-alt"></i></div> */}

                                    <input className='post-modal-submit' type='submit' value='Post' />

                                </div>
                                    {/* <input
                                        id='icon-submit-file'
                                        type='file'
                                        onChange={this.handleFile.bind(this)}
                                    /> */}
                            </div>

                        </div>
                    </form>
                </div>


        )
    }





}

export default connect(mapStateToProps, mapDispatchToProps)(CreatePostForm);