import Card from 'react-bootstrap/Card';
import { Blogdata } from '../data/Blogdata';
import { NavLink, useLocation } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import HighlightText from './Highlighttext';

function BlogSearchDetail() {
    const data = useLocation()
    const [searchValue, setSearchValue] = useState(data.state.search);
    const searchdata = Blogdata.filter(
        (item) =>
            item.title.toLowerCase().includes(searchValue.toLowerCase()) ||
            item.body.toLowerCase().includes(searchValue.toLowerCase())
    );

    return (
        <Row>
            <h1 className="mb-4 mt-3 text-decoration-underline">Search Blogs</h1>

            <InputGroup className="mb-3">
                <Form.Control
                    placeholder="Enter blog name to read"
                    aria-label="Search data"
                    aria-describedby="basic-addon2"
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                />

            </InputGroup>
            <h1>{searchdata.length === 0 ? "Blog not found" : ""}</h1>
            {searchdata.map((item) => {
                return (
                    <Col md={4} className="mb-3" key={item.id}>
                        <Card className="h-100">
                            <Card.Img variant="top" src={item.image} />

                            <Card.Body>
                                <Card.Title className="small">
                                    <HighlightText text={item.title} search={searchValue} />
                                </Card.Title>

                                <NavLink
                                    to={"/blog/" + item.id}
                                    state={{ search: searchValue }}
                                >
                                    Read more
                                </NavLink>
                            </Card.Body>
                        </Card>
                    </Col>
                );
            })}

        </Row>
    );
}

export default BlogSearchDetail;