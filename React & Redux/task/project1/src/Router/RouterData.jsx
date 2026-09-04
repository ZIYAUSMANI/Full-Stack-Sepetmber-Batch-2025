import { createBrowserRouter } from "react-router-dom";

import RootLayout from "../Layout/RootLayout";
import StaticProfileCard from "../component/StaticProfileCard";
import DynamicProfilecomponent from "../component/DynamicProfilecomponent";
import UseStateCounter from "../component/UseStateCounter";
import UseReducerCounter from "../component/UseReducerCounter";
import TodoList from "../component/TodoList";
import BadgesExample from "../pages/BadgesExample";
import BreadcrumbsExample from "../pages/BreadcrumbsExample";
import ButtonGroupExample from "../pages/ButtonGroupExample";
import ButtonsExample from "../pages/ButtonsExample";
import CardsExample from "../pages/CardsExample";
import FigureExample from "../pages/FiguresExample";
import ImagesExample from "../pages/ImagesExample";
import ListGroupExample from "../pages/ListGroupExample";
import PaginationExample from "../pages/PaginationExample";
import ProgressBarExample from "../pages/ProgressBarsExample";
import SpinnnerExample from "../pages/SpinnerExample";
import TableExample from "../pages/TableExample";
import AccordionExample from "../pages/AccordionExample";
import CarouselExample from "../pages/CarouselExample";
import DropdownExample from "../pages/DropdownExample";
import ModalExample from "../pages/ModalExample";
import OffcanvasExample from "../pages/OffcanvasExample";
import NavtabExample from "../pages/NavtabExampls";
import OverlaysExample from "../pages/OverlaysExample";
import FormExample from "../pages/FormExample";
import FormYupExample from "../pages/FormYupExample";
import ProductExample from "../pages/ProductExample";
import WishlistExample from "../pages/WishlistExample";
import BlogListing from "../Bolgs/BlogListing";
import BlogDetail from "../Bolgs/BlogDetail";
import BlogSearchDetail from "../Bolgs/BlogSearchDetail";

export const router = createBrowserRouter([
    {
        path: "/", element: <RootLayout />,
        children: [
            { path: "/", element: <StaticProfileCard /> },
            { path: "/dynamicprofile", element: <DynamicProfilecomponent /> },
            { path: "/usestatecounter", element: <UseStateCounter /> },
            { path: "/usereducercounter", element: <UseReducerCounter /> },
            { path: "/todolist", element: <TodoList /> },
            { path: "/badges", element: <BadgesExample /> },
            { path: "/breadcrumbs", element: <BreadcrumbsExample /> },
            { path: "/buttons", element: <ButtonsExample /> },
            { path: "/buttongroup", element: <ButtonGroupExample /> },
            { path: "/cards", element: <CardsExample /> },
            { path: "/figures", element: <FigureExample /> },
            { path: "/images", element: <ImagesExample /> },
            { path: "/listgroup", element: <ListGroupExample /> },
            { path: "/pagination", element: <PaginationExample /> },
            { path: "/progressbars", element: <ProgressBarExample /> },
            { path: "/spinner", element: <SpinnnerExample /> },
            { path: "/table", element: <TableExample /> },
            { path: "/accordion", element: <AccordionExample /> },
            { path: "/carousel", element: <CarouselExample /> },
            { path: "/dropdown", element: <DropdownExample /> },
            { path: "/modals", element: <ModalExample /> },
            { path: "/offcanvas", element: <OffcanvasExample /> },
            { path: "/navtabs", element: <NavtabExample /> },
            { path: "/overlays", element: <OverlaysExample /> },
            { path: "/form", element: <FormExample /> },
            { path: "/formyup", element: <FormYupExample /> },
            { path: "/product", element: <ProductExample /> },
            { path: "/wishlist", element: <WishlistExample /> },
            { path: "/blog", element: <BlogListing /> },
            { path: "/blog/:id", element: <BlogDetail /> },
            { path: "/blog/detail", element: <BlogSearchDetail /> },
        ],
    },
]);