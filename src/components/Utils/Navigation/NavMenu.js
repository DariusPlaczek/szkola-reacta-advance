import React from 'react'

import NavLinks from './NavLinks';

function NavMenu({ styles, isActive }) {
    return (
        <>
        <NavLinks linkStyle={styles} isActive={isActive} linkName="Home" linkTo="/" />
        <NavLinks linkStyle={styles} isActive={isActive} linkName="Users" linkTo="/users" />
        <NavLinks linkStyle={styles} isActive={isActive} linkName="Test" linkTo="/tests" />
        </>
    )
}

export default NavMenu
