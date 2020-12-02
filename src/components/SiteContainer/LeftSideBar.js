import React from 'react'

import NavMenu from '../Utils/Navigation/NavMenu'

function LeftSideBar() {
    return (
        <div className="leftsidebar">
            <NavMenu styles="link slide-right" isActive="is-active" />
        </div>
    )
}

export default LeftSideBar
