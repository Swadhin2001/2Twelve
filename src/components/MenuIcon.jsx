import React from 'react'

function MenuIcon() {
    return (
        <>
            <div className="menu-icon d-flex align-items-baseline">
                <div className="text-menu p-relative  font-heading text-transform-upper">
                    <div className="p-absolute text-button">Menu</div>
                    <div className="p-absolute text-open">Open</div>
                    <div className="p-absolute text-close">Close</div>
                </div>
                <div className="icon-m" data-dsn="parallax" data-dsn-move={10}>
                    <span className="menu-icon-line p-relative d-inline-block icon-top" />
                    <span className="menu-icon-line p-relative d-inline-block icon-center" />
                    <span className="menu-icon-line p-relative d-block icon-bottom" />
                </div>
            </div>

        </>
    )
}

export default MenuIcon