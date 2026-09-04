import { useState } from "react";
import { Container, Row, Col, Image, Stack, OverlayTrigger, Tooltip } from "react-bootstrap";

import image from "../assets/profile3.svg";
import image1 from "../assets/profileimage1.svg";

function ImagesExample() {
    const [activeIndex, setActiveIndex] = useState(null);
    const avatars = [image, image, image, image, image];

    return (
        <div className="container p-3 mt-2">
            <h3 className="text-start text-decoration-underline mb-3">Images</h3>
            <hr />
            <Container className="mt-3">
                <Row className="gap-4">

                    <Col>
                        <h5>Avatar With Name</h5>
                        <Row className="g-2">
                            <Col className="d-flex align-items-center gap-2 small">
                                <Image src={image} roundedCircle height={30} />
                                <p className="mb-0">Radhika Parmar</p>
                            </Col>
                            <Col className="d-flex align-items-center gap-2 small">
                                <Image src={image1} roundedCircle height={30} />
                                <p className="mb-0">Rajkumar Jadeja</p>
                            </Col>
                        </Row>
                    </Col>

                    <Col>
                        <h5>Avatar Sizes</h5>
                        <Stack direction="horizontal" gap={2}>
                            <Image src={image} roundedCircle height={20} />
                            <Image src={image} roundedCircle height={30} />
                            <Image src={image} roundedCircle height={40} />
                            <Image src={image} roundedCircle height={50} />
                            <Image src={image} roundedCircle height={60} />
                            <Image src={image} roundedCircle height={70} />
                        </Stack>
                    </Col>

                    <Col>
                        <h5>Avatar Group</h5>

                        <div className="d-flex align-items-center">
                            {avatars.map((img, index) => (
                                <OverlayTrigger
                                    key={index}
                                    placement="top"
                                    overlay={
                                        <Tooltip id={`tooltip-${index}`}>
                                            Avatar {index + 1}
                                        </Tooltip>
                                    }
                                >
                                    <span
                                        className="d-inline-block"
                                        onMouseEnter={() => setActiveIndex(index)}
                                        onMouseLeave={() => setActiveIndex(null)}
                                        style={{
                                            marginLeft: index !== 0 ? "-12px" : "0px",
                                            zIndex: activeIndex === index ? 10 : 1,
                                            position: "relative",
                                            cursor: "pointer",
                                        }}
                                    >
                                        <Image src={img} roundedCirc height={30} />
                                    </span>
                                </OverlayTrigger>
                            ))}
                        </div>
                    </Col>

                </Row>
            </Container>
        </div>
    );
}

export default ImagesExample;