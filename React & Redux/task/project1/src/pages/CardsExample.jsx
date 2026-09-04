import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import image1 from "../assets/Headphone1.jpg";
import image2 from "../assets/Headphone2.jpg";


function CardsExample() {

    const headphone = [
        {
            name: "Bluetooth Headphones",
            p: "Boult Newly Launched Flex On Ear Bluetooth Headphones with 80H Playtime, 40mm Bass Drivers, Zen™ ENC Mic, Type-C Fast Charging, Bluetooth 5.4, AUX Option, 60ms Low Latency, IPX5 (Jet Black)",
            image: image1
        },
        {
            name: "The Ear Gaming Headphone",
            p: "Newly Launched BTG Thunder Over The Ear Gaming Headphone with 70H of Playtime, 40mm Titanium Drivers, Dual Pairing Headset, Gaming Mode (40ms Latency) with RGB LEDs, Detachable Mic",
            image: image2
        },
        {
            name: "boAt Rockerz 450",
            p: "boAt Rockerz 450, 15 HRS Battery, 40mm Drivers, Padded Ear Cushions, Integrated Controls, Dual Modes, On Ear Bluetooth Headphones, Wireless Headphone with Mic (Hazel Beige)",
            image: image1
        }
    ];

    return (
        <div className="container p-3 mt-2">
            <h3 className="text-start text-decoration-underline mb-3">
                Cards
            </h3>

            <div className="row g-3">

                {headphone.map((item, index) => (
                    <div className="col-md-4" key={index}>
                        <Card className="h-100">

                            <Card.Body>
                                <Card.Title className='small'>{item.name}</Card.Title>

                                <div className="my-3 text-center">
                                    <Card.Img
                                        src={item.image}
                                        className="w-75"
                                    />
                                </div>

                                <Card.Text className="small_size mb-2">
                                    {item.p}
                                </Card.Text>

                                <p className="d-flex gap-1 fw-semibold mb-0 small_size mt-0">
                                    ₹1,399
                                    <span className="text-decoration-line-through text-secondary">
                                        MRP:₹3,990
                                    </span>
                                </p>
                            </Card.Body>

                            <Card.Footer className="d-flex justify-content-between">
                                <Button variant="outline-primary" size="sm" className='small_size px-2'>
                                    Add To Cart
                                </Button>
                                <Button variant="primary" size="sm" className='small_size px-3'>
                                    Buy Now
                                </Button>
                            </Card.Footer>

                        </Card>
                    </div>
                ))}

            </div>
        </div>
    );
}

export default CardsExample;