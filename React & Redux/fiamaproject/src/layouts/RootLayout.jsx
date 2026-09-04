    import { Fragment } from "react";
    import { Outlet } from "react-router-dom";
    import Header from "../component/Header";
    import Navigation from "../component/Navigation";
    import Footer from "../component/Footer";
    import BrandLogo from "../component/BrandLogo";
    import ScrollToTop from "../component/ScrollToTop";

    function RootLayout() {
        return (
            <Fragment>
                <Header />
                <Navigation />
                <main>
                    <Outlet />
                </main>

                <BrandLogo />
                <Footer />
                <ScrollToTop />
            </Fragment>
        );
    }

    export default RootLayout;