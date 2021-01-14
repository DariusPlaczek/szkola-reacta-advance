import React from 'react'

import NavLinks from './NavLinks';

function NavMenu({ styles, isActive }) {
    return (
        <>
        <NavLinks linkStyle={styles} isActive={isActive} linkName="Home" linkTo="/" />
        <NavLinks linkStyle={styles} isActive={isActive} linkName="Users" linkTo="/users" />
        </>
    )
}

export default NavMenu
