import { Link, NavLink } from 'react-router-dom';
import { Fragment, useContext } from "react";
import { Badge, Container } from "react-bootstrap";
import { Heart } from "react-bootstrap-icons";
import { ProductsData } from "../data/Productdata";

import ProductCard from '../component/ProductCard';
import { WishlistContext } from '../Context/Context';
function ProductExample() {
    const { wishlistState } = useContext(WishlistContext)
    return (
        <Fragment>
            <div className="text-end border-bottom p-3 d-flex  justify-content-end align-items-center gap-2 ">
                WishList
                <div className="position-relative d-flex align-items-center justify-content-center">
                    <NavLink className="text-dark" to="/wishlist">
                        <Heart />
                    </NavLink>

                    <Badge
                        bg="primary"
                        className="rounded-circle d-flex align-items-center justify-content-center position-absolute top-1 start-100 translate-middle"
                        style={{
                            width: "12px",
                            height: "12px",
                            fontSize: "7px"
                        }}
                    >
                        {wishlistState.wishlistItems.length}
                    </Badge>
                </div>
            </div>
            <Container>
                <h1 className="mb-4 mt-3 text-decoration-underline">Products</h1>

                <div className="row g-3">

                    {ProductsData.map((item) => (
                        <div className="col-md-4" key={item.id}>
                            <ProductCard item={item} />
                        </div>
                    ))}

                </div>

            </Container>
        </Fragment>

    );
}
export default ProductExample;