import {Navbar,Nav,NavDropdown,Badge,OverlayTrigger,Tooltip } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';
import CartWidget from './CartWidget';

const NavBar = () => {
    const { totalCart, totalItemCart, cartList } = useCartContext();

    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand as={Link} to="/"><img src="../logo.png" alt="logo" /></Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                <Nav
                className="mr-auto my-2 my-lg-0"
                style={{ maxHeight: '350px' }}
                navbarScroll
                >
                <Nav.Link as={Link} to="/">Home</Nav.Link>
                <NavDropdown title="Categoria" id="navbarScrollingDropdown">
                    <NavDropdown.Item as={Link} to="/categoria/JuegosPS4">Juegos PS4</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/categoria/JuegosPS5">Juegos PS5</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item as={Link} to="/categoria/Funcos">Funcos</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/categoria/Comics">Comics</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item as={Link} to="/categoria/Manga">Manga</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Informacion" id="navbarScrollingDropdown">
                    <NavDropdown.Item as={Link} to="/">Contacto</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/">Tiendas</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/">Trabaja con nosotros</NavDropdown.Item>
                    <NavDropdown.Divider />
                </NavDropdown>
                <Nav.Link as={Link} to="/" disabled>
                    Cyber Week
                </Nav.Link>
                </Nav>
                </Navbar.Collapse>
            <Nav style={{margin: cartList.length === 0 ? '0 3rem' : ''}}>
                <Nav.Link as={Link} to="/cart">
                        <CartWidget/>
                        <OverlayTrigger placement={'bottom'} overlay={
                            <Tooltip id={`tooltip-bottom`}>
                                <Badge pill bg="success" > Total: $ {totalCart()} </Badge>
                            </Tooltip>
                            }>
                            <Badge pill bg="primary" > {totalItemCart()}</Badge>
                        </OverlayTrigger>
                </Nav.Link>
            </Nav>
        </Navbar>
    )
}

export default NavBar;