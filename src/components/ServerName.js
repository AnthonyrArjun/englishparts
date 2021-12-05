import React, { Component } from 'react'

export class ServerName extends Component {
    render() {
        return (
            <div className="serverName small text-muted container">
                SPWEB49
                <input type="hidden" name="Vsnum" id="Vsnum" defaultValue="V7.429" />
            </div>

        )
    }
}

export default ServerName
