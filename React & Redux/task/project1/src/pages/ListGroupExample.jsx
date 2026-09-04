import { Card, ListGroup, Row, Col, Container } from "react-bootstrap";
import { Facebook, Instagram, Youtube, TwitterX, Linkedin } from "react-bootstrap-icons";

function ListGroupExample() {

    const socialData = [
        { name: "Facebook", icon: Facebook, percent: "20%" },
        { name: "Instagram", icon: Instagram, percent: "20%" },
        { name: "YouTube", icon: Youtube, percent: "20%" },
        { name: "TwitterX", icon: TwitterX, percent: "20%" },
        { name: "LinkedIn", icon: Linkedin, percent: "20%" }
    ];

    return (
        <Container className='p-3 mt-2'>

            <h3 className="text-start text-decoration-underline mb-3">ListGroup</h3>
            <hr />

            <Card className="shadow-sm" style={{ width: "24rem" }}>
                <Card.Body>
                    <Card.Title className="fw-semibold fs-4 mb-3">
                        Social Media Traffic
                    </Card.Title>

                    <ListGroup variant="flush">

                        {socialData.map((item, index) => {
                            const Icon = item.icon;
                            return (
                                <ListGroup.Item key={index}>
                                    <Row className="align-items-center">
                                        <Col className="d-flex align-items-center gap-2">
                                            <Icon size={20} className="text-primary" />
                                            {item.name}
                                        </Col>
                                        <Col xs="auto">{item.percent}</Col>
                                    </Row>
                                </ListGroup.Item>
                            );
                        })}

                    </ListGroup>

                </Card.Body>
            </Card>

        </Container>
    );
}

export default ListGroupExample;