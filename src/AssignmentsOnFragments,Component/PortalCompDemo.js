import React from 'react'
import ReactDOM from 'react-dom'

function PortalCompDemo() {
    return ReactDOM.createPortal(
        <div>
            <h3> portal demo</h3>
        </div>,document.getElementById('new-root')
    )
}

export default PortalCompDemo
