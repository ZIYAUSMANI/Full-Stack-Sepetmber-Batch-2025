import { Outlet } from "react-router-dom";
import MainNavigation from "../component/MainNavigation";
import { Container, Row, Col } from "react-bootstrap";

function RootLayout() {
    return (
        <Container className="p-1">
            <Row className="mt-3">
                <Col md={3} >
                    <h2 className="text-center">Assignment</h2>
                    <MainNavigation />
                </Col>

                <Col md={9} className="bg-light p-2">
                    <Outlet />
                </Col>
            </Row>
        </Container>
    );
}

export default RootLayout;