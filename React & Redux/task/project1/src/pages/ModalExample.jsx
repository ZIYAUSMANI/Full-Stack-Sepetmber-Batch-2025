import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { X } from 'react-bootstrap-icons';

function ModalExample() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className="container p-3 mt-2">
            <h3 className="text-start text-decoration-underline mb-5">
                Modals
            </h3>
            <Button variant="primary" onClick={handleShow}>
                Subscribe
            </Button>



            <Modal
                show={show}
                backdrop="static"
                keyboard={false}
                centered
            >
                <Modal.Body className=" p-4 ">
                    <div className='d-flex  justify-content-between border-bottom  align-items-center mb-3'>
                        <h4 className="fw-semibold mb-2 ">Don't miss out</h4>
                        <Button
                            variant="light"
                            className=' rounded-0 border-0 fs-4 py-0 pb-1  text-muted'
                            onClick={handleClose}
                        >
                            x
                        </Button>
                    </div>


                    <p>Signup for our newsletter to stay up to date.</p>

                    <InputGroup className="mb-3 mt-4">
                        <Form.Control placeholder="Enter your email address" />
                        <Button variant="outline-secondary" onClick={handleClose}>
                            Subscribe
                        </Button>
                    </InputGroup>

                </Modal.Body>
            </Modal>
        </div>
    );
}

export default ModalExample;