import Figure from 'react-bootstrap/Figure';
import image from '../assets/reactimage.png'
import { Container } from 'react-bootstrap';
function FigureExample() {
    return (
        <Container className="p-3 mt-2">
            <h3 className="text-start text-decoration-underline mb-3">
                Figures
            </h3>
            <hr />
            <Figure>
                <Figure.Image
                    width={500}
                    height={180}
                    alt="171x180"
                    src={image}
                    thumbnail
                />
                <Figure.Caption>
                    <p className='fw-semibold fs-6 ms-1'>  Image Resource : Google.com</p>

                </Figure.Caption>
            </Figure>
        </Container>
    );
}

export default FigureExample;