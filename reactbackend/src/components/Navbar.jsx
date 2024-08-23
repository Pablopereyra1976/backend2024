import React from "react";
import { NavLink } from "react-router-dom";	

const Navbar = () => {
    return (
        <header>
            <h2>Brand name</h2>
            <nav>
                <NavLink to={"/"}>Home</NavLink>
                <navLink to={"/carrito"}>Carrito</navLink>
            </nav>
        </header>
    )
}

export default Navbar