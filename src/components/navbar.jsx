import { Button, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavbarComponent = ({ cart }) => {
    const total = cart.reduce((acc, pizza) => acc + pizza.price * pizza.quantity, 0);
    const token = false; // Simulación de autenticación

    return (
        <Navbar bg="dark" variant="dark" expand="lg" className="p-3">
            <Navbar.Brand className="ms-3">Pizzería Mamma Mía</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <Link to="/">
                        <Button variant="outline-light" className="me-2">🍕 Home</Button>
                    </Link>
                    {token ? (
                        <>
                            <Button variant="outline-light" className="me-2">🔓 Profile</Button>
                            <Button variant="outline-light" className="me-2">🔒 Logout</Button>
                        </>
                    ) : (
                        <>
                            <Link to="/login">
                                <Button variant="outline-light" className="me-2">🔐 Login</Button>
                            </Link>
                            <Link to="/register">
                                <Button variant="outline-light" className="me-2">🔐 Register</Button>
                            </Link>
                        </>
                    )}
                    <Link to="/cart">
                         <Button variant="outline-info" className="me-2">
                         🛒 Total: ${total.toLocaleString()}
                         </Button>
                    </Link>



                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavbarComponent;
