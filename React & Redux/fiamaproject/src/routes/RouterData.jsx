import { createBrowserRouter, Navigate } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home";
import Shop from "../pages/Shop";
import WishList from "../pages/WishList";
import Cart from "../pages/Cart";
import CheckOut from "../pages/Checkout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Account from "../pages/Account";
import Products from "../pages/Products";
import NotFound404 from "../pages/NotFound404";
import ProtectedRoute from "./ProtectedRoute";
import OrderSuccess from "../component/OrderSuccess";
import OrderDetails from "../component/OrderDetail";




export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            { path: "/", element: <Home /> },
            { path: "/product", element: <Products /> },
            { path: "/:category/:slug", element: <Products /> },
            { path: "/shop", element: <Shop /> },
            { path: "/shop/:slug", element: <Shop /> },
            { path: "/wishlist", element: <WishList /> },
            { path: "/cart", element: <Cart /> },
            { path: "/checkout", element: <CheckOut /> },
            { path: "/login", element: <Login /> },
            { path: "/register", element: <Register /> },
            {
                path: "/",
                element: <ProtectedRoute />,
                children: [
                    { path: "/account", element: <Account /> },
                    { path: "/ordersuccess", element: <OrderSuccess /> },
                    { path: "/orderdetails/:id", element: <OrderDetails /> },
                ]
            },
            { path: "*", element: <Navigate to="/404" /> },
            { path: "/404", element: <NotFound404 /> },
        ],
    },
]);