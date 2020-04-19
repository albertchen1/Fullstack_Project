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
        // this.handleSubmit = this.handleSubmit.bind(this); 
        this.state = {
            body: ''
        }
        this.state = this.props.post;
        this.state.photoFile = null;
        this.handleSubmit = this.handleSubmit.bind(this)
        // this.validateSubmit = this.validateSubmit.bind(this); 
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
            this.props.closeModal();
        })




        // const formData = new FormData();
        // formData.append('post[body]', this.state.body);
        // formData.append('post[photo]', this.state.photoFile);
        // $.ajax({
        //     url: 'api/posts', 
        //     method: 'POST', 
        //     data: formData, 
        //     contentType: false, 
        //     processDate: false
        // });
        // this.props.createPost(form).then(() => this.props.closeModal());

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
            console.log(e.target)
            if (!e.target.matches(".create-post-modal-show")) {
                console.log("not matching")
                // that.props.closeModal();
            } else {
                console.log("dont close")
            }
        }
        return (
            <div className="create-post-outer">
                <div className='create-post-header'>
                    <div onClick={this.props.closeModal} className="close-post-x">X</div>
                </div>

                <form onSubmit={this.handleSubmit.bind(this)}>
                    <input 
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
                                <div className='icon-submit-file'>
                                    {/* <i className="fas fa-camera">
                                </i> */}

                                    <input
                                        id='icon-post-form'
                                        type='file'
                                        onChange={this.handleFile.bind(this)} />
                                </div>


                            </div>
                            {/* <div className='icon-post-form'><i className="fas fa-video"></i></div>
                            <div className='icon-post-form'><i className="fas fa-file-alt"></i></div>
                              */}
                        </div>


                        <input className='post-modal-submit' type='submit' value='Post' />
                    </div>

                </form>
            </div>
        )
    }





}

export default connect(mapStateToProps, mapDispatchToProps)(CreatePostForm);