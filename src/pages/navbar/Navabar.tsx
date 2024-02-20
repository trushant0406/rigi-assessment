import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <header>
            <NavLink
                to="/"
            >
                Home
            </NavLink>
        </header>
    )
}

export default Navbar;