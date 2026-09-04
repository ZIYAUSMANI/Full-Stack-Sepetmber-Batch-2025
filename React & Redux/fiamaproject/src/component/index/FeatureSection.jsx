import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { featureData } from '../../data/bannerdata';



const FeatureSection = () => {
    return (
        <section className="feature">
            <Container className="feature-area">
                <Row className="feature-wrap g-0">
                    {featureData.map((item) => (
                        <Col key={item.id} xs={12} md={6} lg={3}>
                            <div className="feature-item text-center text-md-start justify-content-center justify-content-md-start ">
                                <div className="feature-icon">
                                    <img src={item.icon} alt={item.title} />
                                </div>
                                <div className="feature-info">
                                    <h4>{item.title}</h4>
                                    <p>{item.description}</p>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default FeatureSection;