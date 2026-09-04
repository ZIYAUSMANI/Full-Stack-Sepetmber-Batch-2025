import { Card, Button } from "react-bootstrap";
import { WishlistContext } from '../Context/Context';
import { useContext } from "react";
import { Check } from "react-bootstrap-icons";

function ProductCard({ item }) {
    const { wishlistState, wishlistDispatch } = useContext(WishlistContext);
    const found = wishlistState.wishlistItems.some((product) => product.id === item.id)
    const HandleAddWishlist = () => {
        !found ? wishlistDispatch({ type: "Add_To_Wishlist", payload: item }) : null
    }
    return (
        <Card className="h-100">

            <Card.Body className="text-center">
                <Card.Title className='fs-6 mb-0 text-start'>{item.title}</Card.Title>


                <Card.Img src={item.thumbnail} className="h-75 w-75" />


                <Card.Text className="small_size mb-2">
                    <p> {item.description}</p>
                </Card.Text>
            </Card.Body>

            <Card.Footer className="d-flex justify-content-between p-0 py-2 px-1">
                <Button variant={found ? "outline-success" : "outline-primary"} className='small px-2' onClick={HandleAddWishlist} size="sm">
                    Add To Wishlist {found ? <Check size={20} /> : null}
                </Button>
                <Button variant="primary" className='small px-3' size="sm">
                    Buy Now
                </Button>
            </Card.Footer>

        </Card>
    )
}
export default ProductCard;