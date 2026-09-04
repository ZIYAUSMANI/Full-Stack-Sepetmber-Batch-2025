import React from 'react';
import { Container, Breadcrumb } from 'react-bootstrap';
import { useLocation, Link } from 'react-router-dom';

const BreadcrumbBanner = () => {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter((x) => x);

    if (pathnames.length === 0) {
        return null;
    }

    const currentPath = pathnames[pathnames.length - 1];
    const pageTitle = currentPath.replace(/-/g, ' ');

    return (
        <div className="breadcrumb-banner bg-lightgray py-5 text-center">
            <Container fluid="lg">

                <h1 className="breadcrumb-title fw-bold text-capitalize text-dark mb-2">
                    {pageTitle}
                </h1>


                <Breadcrumb className="d-flex justify-content-center custom-breadcrumb m-0">
                    <Breadcrumb.Item as={Link} to="/" className="text-dark text-decoration-none">
                        Home
                    </Breadcrumb.Item>

                    {pathnames.map((value, index) => {
                        const to = `/${pathnames.slice(0, index + 1).join('/')}`;
                        const isLast = index === pathnames.length - 1;

                        return isLast ? (
                            <Breadcrumb.Item
                                key={to}
                                active
                                className="fw-semibold text-capitalize text-dark"
                            >
                                {value.replace(/-/g, ' ')}
                            </Breadcrumb.Item>
                        ) : (
                            <Breadcrumb.Item
                                key={to}
                                as={Link}
                                to={to}
                                className="text-capitalize text-dark"
                            >
                                {value.replace(/-/g, ' ')}
                            </Breadcrumb.Item>
                        );
                    })}
                </Breadcrumb>
            </Container>
        </div>
    );
};

export default BreadcrumbBanner;