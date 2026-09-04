import { Fragment } from 'react';
import { ChevronRight, Code, CodeSquare, Folder2 } from 'react-bootstrap-icons';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { NavLink } from 'react-router-dom';

function BreadcrumbsExample() {
    const customlink = (props) => {
        return (
            <Fragment>
                <NavLink to={props.href} className="text-decoration-none text-secondary">
                    {props.children}
                </NavLink>
                <ChevronRight className='mx-4 mb-1' height={10} />

            </Fragment>
        )

    }
    return (


        <div className="container p-3 mt-2">
            <h3 className="text-start text-decoration-underline mb-3 ">Breadcrumbs</h3>
            <Breadcrumb className='linkbreadcrumbs mt-5'>
                <Breadcrumb.Item bsPrefix=' ' linkAs={customlink} href="/Cloud" >Cloud</Breadcrumb.Item>
                <Breadcrumb.Item bsPrefix=' ' linkAs={customlink} href="/file">
                    Files
                </Breadcrumb.Item>
                <Breadcrumb.Item bsPrefix=' ' linkAs={customlink} href="/file">
                    Project
                </Breadcrumb.Item>
                <Breadcrumb.Item active>ProjectName</Breadcrumb.Item>
            </Breadcrumb>
            <hr />
            <Breadcrumb className='linkbreadcrumbs'>
                <Breadcrumb.Item bsPrefix=' ' linkAs={customlink} href="/Cloud" >< Folder2 className='text-warning mb-1 me-2' />Assignments</Breadcrumb.Item>
                <Breadcrumb.Item bsPrefix=' ' linkAs={customlink} href="/file">
                    < Folder2 className='text-warning mb-1 me-2' />Project
                </Breadcrumb.Item>
                <Breadcrumb.Item bsPrefix=' ' linkAs={customlink} active className='fw-normal  text-secondary' href="/file">
                    < CodeSquare className='text-primary mb-1 me-2' />TodoList
                </Breadcrumb.Item>

            </Breadcrumb>
            <hr />
        </div>
    );
}

export default BreadcrumbsExample;