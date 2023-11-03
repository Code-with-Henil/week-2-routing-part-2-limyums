import { Link, NavLink } from "react-router-dom";

function LinkMenu() {
    return (
        <>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>

            <NavLink exact to="/product" activeClassName="active-link">
                Products
            </NavLink>
            <NavLink to="/service" activeClassName="active-link">
                Services
            </NavLink>
            <NavLink to="/contact" activeClassName="active-link">
                Contact
            </NavLink>
            <NavLink to="/recipe" activeClassName="active-link">
                Recipe
            </NavLink>
            <NavLink to="/signup" activeClassName="active-link">
                Sign Up
            </NavLink>
            <NavLink to="/login" activeClassName="active-link">
                Log In
            </NavLink>
        </>
    )
}

export default LinkMenu;
