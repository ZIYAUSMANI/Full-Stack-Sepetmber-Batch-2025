import { useState } from 'react';
import { Button, Container, Card, Badge, ProgressBar, Row, Col } from 'react-bootstrap';

function ProgressBarExample() {
    const [now, setNow] = useState(5);

    const increase = () => {
        setNow((prev) => Math.min(prev + 5, 100));
    };

    const decrease = () => {
        setNow((prev) => Math.max(prev - 5, 0));
    };

    return (
        <Container className='p-3 mt-2'>
            <h3 className="text-start text-decoration-underline mb-3">ProgressBars</h3>
            completed: {now}
            <hr />

            <div className='mb-4 d-flex gap-4'>
                <Button variant="primary" onClick={increase}>
                    Progress +5%
                </Button>

                <Button variant="primary" onClick={decrease}>
                    Progress -5%
                </Button>
            </div>

            <ProgressBar now={now} label={`${now}%`} variant="success" animated />

            <ProgressBar now={now} className='mt-2' variant="danger" animated style={{ height: "9px" }} />


            <Card className="shadow-sm mt-4" style={{ width: "18rem" }}>
                <Card.Body>
                    <Card.Title className="fw-semibold fs-4">
                        Bootstrap Dashboard Application
                    </Card.Title>

                    <Card.Subtitle className="mb-2 text-muted fw-normal ">
                        Web Development
                    </Card.Subtitle>

                    <Card.Text className="mt-3 text-dark">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </Card.Text>


                    <Badge bg="info" className="mb-3">
                        In Progress
                    </Badge>


                    <ProgressBar now={now} label={`${now}%`} animated variant="info" />

                </Card.Body>


                <Card.Footer>
                    <Row className="text-center">
                        <Col className="p-3 border-end">
                            <div className="text-muted fw-semibold">Due Date:</div>
                            <div className="fw-semibold">1 Jan, 2022</div>
                        </Col>

                        <Col className="p-3">
                            <div className="text-muted fw-semibold">Budget:</div>
                            <div className="fw-semibold">$123,000</div>
                        </Col>
                    </Row>
                </Card.Footer>
            </Card>

        </Container>
    );
}

export default ProgressBarExample;