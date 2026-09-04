import Card from 'react-bootstrap/Card';
import { Blogdata } from '../data/Blogdata';
import { NavLink, useNavigate } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

function BlogListing() {
    const [searchValue, setSearchValue] = useState('');
    const navigate = useNavigate();

    const handlemoveto = () => {
        navigate('/blog/detail', {
            state: {
                search: searchValue
            }
        });
    };

    return (
        <Row>
            <h1 className="mb-4 mt-3 text-decoration-underline">Blogs</h1>

            <InputGroup className="mb-3">
                <Form.Control
                    placeholder="Enter blog name to read"
                    aria-label="Search data"
                    aria-describedby="basic-addon2"
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                />
                <Button variant="secondary" id="button-addon2" onClick={handlemoveto}>
                    Search
                </Button>
            </InputGroup>
            {Blogdata.map((item) => {
                return (
                    <Col md={4} className="mb-3" key={item.id}>
                        <Card className="h-100">
                            <Card.Img variant="top" src={item.image} />

                            <Card.Body>
                                <Card.Title className="small">
                                    {item.title}
                                </Card.Title>

                                <NavLink to={"/blog/" + item.id}>Read more</NavLink>
                            </Card.Body>
                        </Card>
                    </Col>
                );
            })}

        </Row>
    );
}

export default BlogListing;