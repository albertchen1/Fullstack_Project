import React from 'react';


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
                <li key={connection.id}>{connection.recipient.firstName}</li>
            ))
        } else {
            return null
        }
    }

    render() {
        return(
            <div>
                {this.renderConnections()}
            </div>
        )
    }
}

export default ConnectionList