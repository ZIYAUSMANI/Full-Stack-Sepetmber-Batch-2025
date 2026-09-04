import React from 'react';
import { Carousel, Container, Row, Col, Button } from 'react-bootstrap';
import { slideData } from '../../data/bannerdata';



const HeroSlider = () => {
    return (
        <section className="home">
            <Carousel
                fade={false}
                controls={true}
                indicators={true}
                interval={5000}
                prevIcon={<span className="carousel-control-custom-icon">&#10094;</span>}
                nextIcon={<span className="carousel-control-custom-icon">&#10095;</span>}
                className="hero-carousel"
            >
                {slideData.map((slide) => (
                    <Carousel.Item key={slide.id}>
                        {/* Direct Image Element handling image entirely in component */}
                        <img
                            className="d-block w-100 position-absolute top-0 start-0 h-100 object-fit-cover"
                            src={slide.image}
                            alt={slide.imageAlt}
                        />

                        {/* Slide Text Overlay */}
                        <div className="slider-inner position-relative z-1">
                            <Container fluid="lg">
                                <Row>
                                    <Col lg={12}>
                                        <div className="slider-info">
                                            <h1 className="slide-title animate__fadeInUp animate__animated">
                                                {slide.title}
                                            </h1>
                                            <h6 className="slide-sub-title animate__fadeInUp animate__animated">
                                                {slide.subTitle}
                                            </h6>
                                            <div className="slide-brief animate__fadeInUp animate__animated">
                                                <p>{slide.description}</p>
                                            </div>
                                            <div className="btn-wrapper">
                                                <Button
                                                    href={slide.buttonLink}
                                                    className="btn-round theme-btn-1"
                                                >
                                                    {slide.buttonText}
                                                </Button>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </Carousel.Item>
                ))}
            </Carousel>
        </section>
    );
};

export default HeroSlider;