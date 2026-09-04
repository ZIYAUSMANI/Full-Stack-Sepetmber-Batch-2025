import BreadcrumbBanner from "../component/BreadcrumbBanner";
import CartTable from "../component/cart/CartTable";
import CartTotals from "../component/cart/CartTotals";

function Cart() {
    ;
    return (
        <>
            <BreadcrumbBanner />
            <CartTable />
            <CartTotals />
        </>

    );
}
export default Cart