import React from 'react';
import NavbarContainer from '../nav_bar/navbar_container';


class ConnectionList extends React.Component {

    constructor(props) {
        super(props)
        this.renderConnections = this.renderConnections.bind(this)
    }

    componentDidMount() {
        this.props.fetchAllConnections(this.props.user.id)
            .then(() => console.log(this.props))
    }

    renderConnections() {
        if (this.props.connections.length > 0) {
            return this.props.connections.map(connection => (
                <div className="connection-list-container">
                    <div className={`invitations-${connection.recipient.firstName}-pic`}></div>
                    <div className="connection-list-user-info">
                        <h4 id="connection-list-name">{connection.recipient.firstName}&nbsp;{connection.recipient.lastName}</h4>
                        <div className="connection-list-headline-row">
                            <h4 id="connection-list-headline">{connection.recipient.headline}</h4>
                            <button id="connection-list-message-button" onClick={e => alert("Feature coming soon!")}>Message</button>
                        </div>
                        <h4 id="connection-list-time">Connected 1m ago</h4>
                    </div>
                </div>

                // <li key={connection.id}>{connection.recipient.firstName}</li>
            ))
        } else {
            return null
        }
    }

    render() {
        return(
            <div>
                <NavbarContainer />
                <div className='connection-list-page'>
                    <div className="connection-list-page-container">
                        <div className="connection-list-header-container">
                            <h4 id="connection-list-label">{this.props.connections.length} Connections</h4>
                        </div>
                        <div className="connection-list">
                            {this.renderConnections()}
                        </div>
                    </div>
                </div>
                
            </div>


        )
    }
}

export default ConnectionList