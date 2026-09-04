import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import { Trash, Cart, BoxArrowLeft } from 'react-bootstrap-icons';
import { Container } from 'react-bootstrap';
import { useContext } from 'react';
import { WishlistContext } from '../Context/Context';
import { NavLink } from 'react-router-dom';

function wishlistExample() {
    const { wishlistState, wishlistDispatch } = useContext(WishlistContext)
    const HandleRemoveWishlist = (id) => {
        wishlistDispatch({
            type: "Remove_From_Wishlist",
            payload: id
        });
    };
    return (
        <Container>
            <NavLink to="/product" className="text-decoration-none  fs-5 text-dark">
                <BoxArrowLeft className='mb-1' /> Continue Shopping
            </NavLink>
            <h1 className='text-center'>WishList</h1>
            <Table className="table mt-4">
                <thead>
                    <tr>

                        <th className="cart-product-image text-center">Image</th>
                        <th className="cart-product-info">Title</th>
                        <th className="cart-product-price">Price</th>
                        <th className="cart-product-subtotal">Action</th>
                    </tr>
                </thead>

                <tbody>

                    {wishlistState.wishlistItems.length === 0 ? (
                        <tr>
                            <td colSpan="4" className="text-center fs-5 fw-semibold">
                                Your wishlist is empty.
                            </td>
                        </tr>
                    ) : (
                        wishlistState?.wishlistItems?.map((item) => (
                            <tr key={item.id}>

                                <td className='text-center'>
                                    <a href="product-details.html">
                                        <Image
                                            src={item.thumbnail}
                                            alt="#"
                                            height={100}
                                            width={100}
                                        />
                                    </a>
                                </td>

                                <td >
                                    <h5>
                                        <a href="product-details.html" className='text-decoration-none text-dark'>
                                            {item.title}
                                        </a>
                                    </h5>
                                </td>

                                <td >
                                    {item.price}
                                </td>

                                <td>
                                    <Button variant="outline-danger" href="#" className='me-2' onClick={() =>
                                        HandleRemoveWishlist(item.id)
                                    }>
                                        <Trash /> Delete
                                    </Button>


                                </td>
                            </tr>)
                        ))

                    }

                </tbody>
            </Table>


        </Container>
    );
}

export default wishlistExample;

