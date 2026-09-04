import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import Popover from 'react-bootstrap/Popover';
function OverlaysExample() {
    return (
        <Container className='p-3 mt-2'>

            <h3 className="text-start text-decoration-underline mb-3">Overlays</h3>
            <div className='my-5'>
                {['top', 'right', 'bottom', 'left'].map((placement) => (
                    <OverlayTrigger
                        trigger="click"
                        key={placement}
                        placement={placement}
                        overlay={
                            <Popover id={`popover-positioned-${placement}`}>
                                <Popover.Header as="h3">{`Popover ${placement}`}</Popover.Header>
                                <Popover.Body>
                                    <strong>Holy guacamole!</strong> Check this info.
                                </Popover.Body>
                            </Popover>
                        }
                    >
                        <Button variant="outline-secondary" className='me-3'>Popover on {placement}</Button>
                    </OverlayTrigger>
                ))}
            </div>
            <hr />
            <div className='mt-5'>
                {['top', 'right', 'bottom', 'left'].map((placement) => (
                    <OverlayTrigger
                        key={placement}
                        placement={placement}
                        overlay={
                            <Tooltip id={`tooltip-${placement}`}>
                                Tooltip on <strong>{placement}</strong>.
                            </Tooltip>
                        }
                    >
                        <Button variant="secondary" className='me-3'>Tooltip on {placement}</Button>
                    </OverlayTrigger>
                ))}
            </div>
        </Container>
    );
}
export default OverlaysExample