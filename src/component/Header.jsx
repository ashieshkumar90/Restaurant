import { 
    Container,
    Nav,
    Navbar 
} from 'react-bootstrap';
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#home">Swiggy</Navbar.Brand>
                    <Nav className="">
                        <NavLink to="/" className="navLink">
                            Home
                        </NavLink>
                    
                        <NavLink to="/about" className="navLink">
                            About
                        </NavLink>
                    
                        <NavLink to="/contact" className="navLink">
                            Contact
                        </NavLink>
                    
                        <NavLink to="/menu/123" className="navLink">
                            Menu
                        </NavLink>                        
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}
export default Header;