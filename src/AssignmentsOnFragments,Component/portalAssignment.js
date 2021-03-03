import React from 'react'
import ReactDOM from 'react-dom'


function PortalAssignmentDemo() {
    return ReactDOM.createPortal(
        <div>
            {/* <ToolTip active={true} parent="#parent" position="right" arrow="center">
             Awesome Content That Never Cut Of Its parent
            </ToolTip> */}
        </div>,document.getElementById('my')
    )
}

export default PortalAssignmentDemo