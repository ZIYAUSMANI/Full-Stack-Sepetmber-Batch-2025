import { v4 as uuid } from "uuid";

export const NoneInteractiveLink = [
    { id: uuid(), path: "/", elementname: "StaticProfile" },
    { id: uuid(), path: "/dynamicprofile", elementname: "DynamicProfile" },
    { id: uuid(), path: "/usestatecounter", elementname: "UseStateCounter" },
    { id: uuid(), path: "/usereducercounter", elementname: "UseReducerCounter" },
    { id: uuid(), path: "/todolist", elementname: "TodoList" },

];

export const NoneInteractiveComponent = [
    { id: uuid(), path: "/badges", elementname: "Badges" },
    { id: uuid(), path: "/breadcrumbs", elementname: "Breadcrumbs" },
    { id: uuid(), path: "/buttons", elementname: "Buttons" },
    { id: uuid(), path: "/buttongroup", elementname: "ButtonGroups" },
    { id: uuid(), path: "/Cards", elementname: "Cards" },
    { id: uuid(), path: "/figures", elementname: "Figures" },
    { id: uuid(), path: "/images", elementname: "Images" },
    { id: uuid(), path: "/listgroup", elementname: "ListGroups" },
    { id: uuid(), path: "/Pagination", elementname: "Pagination" },
    { id: uuid(), path: "/progressbars", elementname: "ProgressBars" },
    { id: uuid(), path: "/spinner", elementname: "Spinner" },
    { id: uuid(), path: "/table", elementname: "Table" }
];

export const InteractiveComponent = [
    { id: uuid(), path: "/accordion", elementname: "Accordion" },
    { id: uuid(), path: "/carousel", elementname: "Carousel" },
    { id: uuid(), path: "/dropdown", elementname: "Dropdown" },
    { id: uuid(), path: "/modals", elementname: "Modals" },
    { id: uuid(), path: "/offcanvas", elementname: "Offcanvas" },
    { id: uuid(), path: "/navtabs", elementname: "Navtabs" },
    { id: uuid(), path: "/overlays", elementname: "Overlays" }
];

export const Form = [
    { id: uuid(), path: "/form", elementname: "Form" },
    { id: uuid(), path: "/formyup", elementname: "Form With Yup" }
];

export const contextapi = [
    { id: uuid(), path: "/product", elementname: "Product" },
    { id: uuid(), path: "/blog", elementname: "Blogs" }
];