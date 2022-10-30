import React from 'react'

const Navbar = ({getpersonData}) => {
    return(
    <nav className="navbar">
        <div className="logo"><p>Users Details</p></div>
        <button type="button" onClick={() =>getpersonData(1)}>Click here</button>
    </nav>
    )
}

export default Navbar;
