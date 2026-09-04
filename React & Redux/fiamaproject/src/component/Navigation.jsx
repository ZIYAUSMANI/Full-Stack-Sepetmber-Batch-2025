import React, { useEffect, useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import logo from "../assets/image/logo.webp";
import { NAV_ITEMS } from "../data/Navigationdata";

const Navigation = () => {
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 250);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <Navbar
            expand="lg"
            className={`custom-navbar bg-white d-none d-lg-block ${isSticky ? "sticky-active" : "hero-active"
                }`}
        >
            <Container>
                {/* Logo */}
                <Navbar.Brand
                    as={NavLink}
                    to="/"
                    className="navbar-logo"
                >
                    <img src={logo} alt="logo" />
                </Navbar.Brand>

                {/* Simple Navigation */}
                <Nav className="align-items-center nav-links-container">
                    {NAV_ITEMS.map((item) => (
                        <Nav.Link
                            key={item.id}
                            as={NavLink}
                            to={item.to}
                            className="mx-3"
                        >
                            {item.title}
                        </Nav.Link>
                    ))}
                </Nav>
            </Container>
        </Navbar>
    );
};

export default Navigation;