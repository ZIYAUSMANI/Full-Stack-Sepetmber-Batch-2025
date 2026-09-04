import { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Globe, Envelope, Phone } from "react-bootstrap-icons";

function OffcanvasExample() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className="container p-3 mt-2">
            <h3 className="text-start text-decoration-underline mb-5">
                Offcanvas
            </h3>
            <Navbar expand="lg" className="bg-body-tertiary border rounded-2">
                <Container>
                    <Navbar.Brand href="#home" className="bg-dark px-2 text-white">
                        RB
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />

                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>

                            <Nav.Link href="#link">Link</Nav.Link>

                            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">
                                    Action
                                </NavDropdown.Item>

                                <NavDropdown.Item href="#action/3.2">
                                    Another action
                                </NavDropdown.Item>

                                <NavDropdown.Item href="#action/3.3">
                                    Something
                                </NavDropdown.Item>

                                <NavDropdown.Divider />

                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>

                        <Button variant="primary" className="me-3">
                            Login
                        </Button>

                        <Button variant="outline-primary" className="me-3">
                            Sign Up
                        </Button>

                        <Button variant="dark" onClick={handleShow}>
                            Contact
                        </Button>
                    </Navbar.Collapse>

                    <Offcanvas show={show} onHide={handleClose} placement="end">

                        <Offcanvas.Body>
                            <div className='d-flex  justify-content-between border-bottom  align-items-center mb-3'>
                                <h4 className="fw-semibold mb-2 ">Contact Us</h4>
                                <Button
                                    variant="light"
                                    className=' rounded-0 border-0 fs-4 py-0 pb-1  text-muted'
                                    onClick={handleClose}
                                >
                                    x
                                </Button>
                            </div>
                            <h1 className="fs-3 fw-seimbold mb-3">
                                We are here to help you!
                            </h1>
                            <hr />
                            <h3 className="fw-semibold mb-5">
                                Indixpert
                            </h3>

                            <div className="mb-5">
                                <h5 className="text-secondary fw-semibold d-flex align-items-center mb-2">
                                    <Globe size={24} className="me-2" />
                                    Our Offices :
                                </h5>

                                <p className="fs-6 mb-1">
                                    1: Hyderabad, Telangana, India
                                </p>

                                <p className="fs-6 mb-0">
                                    2: Gurugram, Haryana, India
                                </p>
                            </div>

                            <div className="mb-5">
                                <h5 className="text-secondary fw-semibold d-flex align-items-center mb-2">
                                    <Envelope size={24} className="me-2" />
                                    Email
                                </h5>

                                <p className="fs-6 mb-0">
                                    contact@indixpert.com
                                </p>
                            </div>

                            <div>
                                <h5 className="text-secondary fw-semibold d-flex align-items-center mb-2    ">
                                    <Phone size={24} className="me-2" />
                                    Phone
                                </h5>

                                <p className="fs-6 mb-0">
                                    (+91) 778 899 2897
                                </p>
                            </div>
                        </Offcanvas.Body>
                    </Offcanvas>
                </Container>
            </Navbar>
        </div>
    );
}

export default OffcanvasExample;