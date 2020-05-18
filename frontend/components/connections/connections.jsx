import React from 'react';
import { Link } from 'react-router-dom';
import NavbarContainer from '../nav_bar/navbar_container';



class Connections extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderRequests = this.renderRequests.bind(this)
        this.acceptRequest = this.acceptRequest.bind(this)
        this.deleteRequest = this.deleteRequest.bind(this)
    }

    componentDidMount() {
        this.props.fetchAllRequests(this.props.user.id)
        this.props.fetchAllConnections(this.props.user.id)
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    acceptRequest(request) {
        let connection = {
            user_id: request.userId,
            recipient_id: request.recipientId
        }
        this.props.createConnection(connection)
        this.props.deleteRequest(request.id)
    }

    deleteRequest(id) {
        this.props.deleteRequest(id)
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
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

    renderRequests() {
        if (this.props.requests.length > 0) {
            return this.props.requests.map(request => (
                <div className="invitations-list-container">
                    <div className={`invitations-${request.sender.firstName}-pic`}></div>
                    <div className="invitations-user-info">
                        <h4 id="invitations-name">{request.sender.firstName}&nbsp;{request.sender.lastName}</h4>
                        <div className="invitations-headline-buttons">
                            <h4 id="invitations-headline">{request.sender.headline}</h4>
                            <button id="invitations-ignore-button" onClick={() => this.deleteRequest(request.id)}>Ignore</button>
                            <button id="invitations-accept-button" onClick={() => this.acceptRequest(request)}>Accept</button>
                        </div>
                    </div>
                </div>
            ))
        } else {
            return null
        }
    }

    render() {
        return (
            <div>
                <NavbarContainer />

                <div className="connections-page">
                    <div className="manage-network-container">
                        <div className="manage-network-info">
                            <h3 id="manage-network-title">Manage Network</h3>
                            <Link to="/connection_list">
                                <div id="manage-network-connections">
                                    <div id="manage-network-connections-icon"><i className="fas fa-user-friends"></i></div>
                                    <h3 id="manage-network-connections-text">Connections</h3>
                                    <h3 id="manage-network-connections-number">{this.props.connections.length}</h3>
                                </div>
                            </Link>
                            {/* <div id="manage-network-others">
                                <div id="manage-network-others-icon"><i className="fas fa-address-book"></i></div>
                                <div id="manage-network-contacts-text">Contacts</div>
                            </div>
                            <div id="manage-network-others">
                                <div id="manage-network-others-icon"><i className="fas fa-walking"></i></div>
                                <div id="manage-network-people-text">People I Follow</div>
                            </div>
                            <div id="manage-network-others">
                                <div id="manage-network-others-icon"><i className="fas fa-users"></i></div>
                                <div id="manage-network-groups-text">Groups</div>
                            </div>
                            <div id="manage-network-others">
                                <div id="manage-network-others-icon"><i className="fas fa-file-alt"></i></div>
                                <div id="manage-network-pages-text">Pages</div>
                            </div>
                            <div id="manage-network-others">
                                <div id="manage-network-others-icon"><i className="fas fa-hashtag"></i></div>
                                <div id="manage-network-hashtags-text">Hashtags</div>
                            </div> */}
                        </div>
                    </div>
                    <div className="invitations-container">
                        <div className="invitations-header-container">
                            <h4 id="connections-list-label">Invitations</h4>
                        </div>
                        <div className="invitations-list">
                            {this.renderRequests()}
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default Connections;
