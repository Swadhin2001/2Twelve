import React from 'react'
import MenuIcon from './MenuIcon'
import Logo from './Logo'
import Nav from './Nav'

function Menu() {
    return (
        <>
            <div class="site-header dsn-load-animate dsn-container">
                <div class="extend-container d-flex w-100 align-items-baseline justify-content-between align-items-end">
                    <MenuIcon />
                    <Logo />
                    <Nav />
                </div>
            </div>
        </>
    )
}

export default Menu