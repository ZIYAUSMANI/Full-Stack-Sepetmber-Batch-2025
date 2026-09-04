import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {
    FaMapMarkerAlt,
    FaPhoneAlt,
    FaEnvelope,
    FaFacebookF,
    FaTwitter,
    FaLinkedinIn,
    FaInstagram
} from 'react-icons/fa';
import image from "../assets/image/payment-6.webp"
import { NavLink } from 'react-router-dom';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer-area">
            <div className="footer-top-area">
                <Container>
                    <Row>
                        {/* My Account */}
                        <Col xl={2} md={6} sm={6} xs={12}>
                            <div className="footer-widget">
                                <h4 className="footer-title">My Account</h4>
                                <div className="footer-menu">
                                    <ul>
                                        <li><NavLink to="/account">My account</NavLink></li>
                                        <li><NavLink to="/checkout">Checkout</NavLink></li>
                                        <li><a href="pages/contact.html">Contact us</a></li>
                                        <li><NavLink to="/cart">Shopping Cart</NavLink></li>
                                        <li><NavLink to="/wishlist"> Wishlist</NavLink></li>
                                    </ul>
                                </div>
                            </div>
                        </Col>

                        {/* Quick Links */}
                        <Col xl={2} md={6} sm={6} xs={12}>
                            <div className="footer-widget">
                                <h4 className="footer-title">Quick Links</h4>
                                <div className="footer-menu">
                                    <ul>
                                        <li><a href="#">Store Location</a></li>
                                        <li><a href="pages/contact.html">Orders Tracking</a></li>
                                        <li><a href="pages/shop-details.html">Size Guide</a></li>
                                        <li><a href="pages/account.html">My account</a></li>
                                        <li><a href="pages/faq.html">FAQs</a></li>
                                    </ul>
                                </div>
                            </div>
                        </Col>

                        {/* Information */}
                        <Col xl={2} md={6} sm={6} xs={12}>
                            <div className="footer-widget">
                                <h4 className="footer-title">Information</h4>
                                <div className="footer-menu">
                                    <ul>
                                        <li><a href="pages/contact.html">Privacy Page</a></li>
                                        <li><a href="pages/about.html">About Us</a></li>
                                        <li><a href="pages/contact.html">Careers</a></li>
                                        <li><a href="pages/faq.html">Delivery Information</a></li>
                                        <li><a href="pages/contact.html">Terms and Conditions</a></li>
                                    </ul>
                                </div>
                            </div>
                        </Col>

                        {/* Customer Service */}
                        <Col xl={2} md={6} sm={6} xs={12}>
                            <div className="footer-widget">
                                <h4 className="footer-title">Customer Service</h4>
                                <div className="footer-menu">
                                    <ul>
                                        <li><a href="pages/shop-details.html">Shipping Policy</a></li>
                                        <li><a href="pages/contact.html">Help &amp; Contact Us</a></li>
                                        <li><a href="pages/account.html">Returns &amp; Refunds</a></li>
                                        <li><a href="pages/shop.html">Online Stores</a></li>
                                        <li><a href="pages/contact.html">Terms and Conditions</a></li>
                                    </ul>
                                </div>
                            </div>
                        </Col>

                        {/* About Our Shop */}
                        <Col xl={4} md={6} sm={6} xs={12}>
                            <div className="footer-widget footer-about-widget">
                                <h4 className="footer-title">About Our Shop</h4>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                    incididunt ut labore et dolore
                                </p>
                                <div className="footer-address">
                                    <ul>
                                        <li className='m-0'>
                                            <div className="footer-address-icon"><FaMapMarkerAlt className='mb-2' /></div>
                                            <div className="footer-address-info">
                                                <p>Brooklyn, New York, United States</p>
                                            </div>
                                        </li>
                                        <li className='m-0'>
                                            <div className="footer-address-icon"><FaPhoneAlt className='mb-2' /></div>
                                            <div className="footer-address-info">
                                                <a href="tel:+0123456789">+0123-456789</a>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="footer-address-icon"><FaEnvelope /></div>
                                            <div className="footer-address-info">
                                                <a href="mailto:example@example.com">example@example.com</a>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="footer-payment-img mt-3">
                                    <img src={image} alt="Payment Methods" />
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* Copyright Bar */}
            <div className="copyright-area">
                <Container className="border-top-2">
                    <Row className="align-items-center">
                        <Col md={6} xs={12}>
                            <div className="footer-copyright-left">
                                <div className="copyright-design">
                                    <p>© <span id="currentYear">{currentYear}</span> - Just For You</p>
                                </div>
                            </div>
                        </Col>
                        <Col md={6} xs={12}>
                            <div className="footer-copyright-right text-md-end text-center">
                                <div className="social-media">
                                    <ul>
                                        <li><a href="#"><FaFacebookF /></a></li>
                                        <li><a href="#"><FaTwitter /></a></li>
                                        <li><a href="#"><FaLinkedinIn /></a></li>
                                        <li><a href="#"><FaInstagram /></a></li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </footer>
    );
};

export default Footer;