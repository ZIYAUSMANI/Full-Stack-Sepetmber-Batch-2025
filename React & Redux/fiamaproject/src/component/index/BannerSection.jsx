import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const BannerSection = ({ banners, largeBanner = false }) => {
    return (
        <section className="banner-area py-3 px-0">
            <Container className='px-3 px-sm-0'>
                <Row className="justify-content-between g-4 ">
                    {banners.map((banner) => (
                        <Col
                            key={banner.id}
                            lg={largeBanner ? 6 : 4}
                            md={6}
                            xs={12}
                        >
                            <div className="banner-item">
                                <div className="banner-img">
                                    <NavLink to="/shop">
                                        <img
                                            src={banner.image}
                                            alt={banner.alt}
                                        />
                                    </NavLink>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default BannerSection;