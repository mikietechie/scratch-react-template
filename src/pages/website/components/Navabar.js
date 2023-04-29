import { Nav, NavLink, Navbar } from "react-bootstrap";
import { AuthContext } from "../../../contexts/AuthContext";
import { Link } from "react-router-dom";
import { useContext } from "react";

export default function Navabar() {
    const { user } = useContext(AuthContext)

    return (
        <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark" className="p-3">
            <Navbar.Brand as={Link} to="/">React Auth</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" data-bs-target="#navbarScroll" />
            <Navbar.Collapse id="navbarScroll" className="justify-content-md-end">
                <Nav>
                    <NavLink eventKey={1} to="/" as={Link}>Home</NavLink>
                    <NavLink eventKey={1} to="/contact" as={Link}>Contact</NavLink>
                    {
                        user ? <NavLink eventKey={3} to="/admin" as={Link}>Admin</NavLink>
                        : <NavLink eventKey={3} to="/login" as={Link}>Login</NavLink>
                    }
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}