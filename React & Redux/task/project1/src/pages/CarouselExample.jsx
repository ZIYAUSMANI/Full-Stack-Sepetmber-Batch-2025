import { Fragment, useRef, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import image1 from '../assets/banner1.jpg'
import image2 from '../assets/banner2.jpg'
import image3 from '../assets/banner3.jpg'
import { v4 as uuid } from 'uuid';
import Image from 'react-bootstrap/Image';
import { ArrowLeft, ArrowLeftCircle, ArrowRight, ArrowRightCircle, CircleFill, Sliders } from 'react-bootstrap-icons';
import { Button, Stack } from 'react-bootstrap';
function CarouselExample() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    const slidersRef = useRef()
    const sliderImages = [
        {
            id: uuid(),
            image: image1,
            heading: "First slide label",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        },

        {
            id: uuid(),
            image: image2,
            heading: "Second slide label",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        },
        {
            id: uuid(),
            image: image3,
            heading: "Third slide label",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        }

    ]

    return (
        <div className="container p-3 mt-2">
            <h3 className="text-start text-decoration-underline mb-5">
                Carousel
            </h3>
            <Carousel
                controls={true}
                activeIndex={index}
                onSelect={handleSelect}
                ref={slidersRef}
                prevIcon={
                    index === 0 ? false : <ArrowLeftCircle size={30} />
                }
                nextIcon={
                    index === sliderImages.length - 1 ? false : <ArrowRightCircle size={30} />
                }
                indicators={false}


            >
                {sliderImages.map((Item, index) => {
                    return (
                        <Carousel.Item key={index}>
                            <Image src={Item.image} fluid className='rounded-5' />
                            <Carousel.Caption>
                                <h3>{Item.heading}</h3>
                                <p>{Item.content}</p>
                            </Carousel.Caption>
                        </Carousel.Item>

                    )
                })}
            </Carousel>
            <Stack direction="horizontal" className="justify-content-center mt-2 " gap={2}>
                {sliderImages.map((_, i) => (
                    <CircleFill
                        key={i}
                        onClick={() => setIndex(i)}
                        style={{ cursor: "pointer" }}
                        className={i === index ? "text-primary" : "text-secondary"}
                        size={12}
                    />
                ))}
            </Stack>
            <div className='d-flex gap-2 mt-2 justify-content-center'>
                <Button variant='primary' onClick={() => { slidersRef.current.prev() }}
                    disabled={index == 0}

                ><ArrowLeft /> Prev</Button>
                <Button variant='primary' onClick={() => { slidersRef.current.next() }}
                    disabled={index === sliderImages.length - 1}

                > Next <ArrowRight /></Button>
            </div>
        </div>
    );
}

export default CarouselExample;