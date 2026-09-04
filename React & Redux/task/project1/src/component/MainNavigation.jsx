import { Link, NavLink } from 'react-router-dom';
import { InteractiveComponent, NoneInteractiveComponent, NoneInteractiveLink, Form, contextapi } from '../data/Navigationdata';
import Accordion from 'react-bootstrap/Accordion';
import { ArrowRight } from 'react-bootstrap-icons';
function MainNavigation() {
    return (

        <Accordion defaultActiveKey="1">
            <Accordion.Item eventKey="0">
                <Accordion.Header>Small Assignment</Accordion.Header>
                <Accordion.Body>
                    <ul className="nav flex-column navigation">
                        {NoneInteractiveLink.map((menu) => (
                            <li className="nav-item" key={menu.id}>
                                <NavLink className="nav-link d-flex gap-2" to={menu.path}>
                                    {menu.elementname}
                                    <ArrowRight className='mt-2' />
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>Non Interactive Component</Accordion.Header>
                <Accordion.Body>

                    <ul className="nav flex-column navigation">
                        {NoneInteractiveComponent.map((menu) => (
                            <li className="nav-item" key={menu.id}>
                                <NavLink className="nav-link d-flex gap-2 " to={menu.path}>
                                    {menu.elementname}
                                    <ArrowRight className='mt-2' />
                                </NavLink>

                            </li>
                        ))}
                    </ul>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
                <Accordion.Header> Interactive Component</Accordion.Header>
                <Accordion.Body>
                    <ul className="nav flex-column navigation">
                        {InteractiveComponent.map((menu) => (
                            <li className="nav-item" key={menu.id}>
                                <NavLink className="nav-link d-flex gap-2 " to={menu.path}>
                                    {menu.elementname}
                                    <ArrowRight className='mt-2' />
                                </NavLink>

                            </li>
                        ))}
                    </ul>

                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
                <Accordion.Header>Form</Accordion.Header>
                <Accordion.Body>
                    <ul className="nav flex-column navigation">
                        {Form.map((menu) => (
                            <li className="nav-item" key={menu.id}>
                                <NavLink className="nav-link d-flex gap-2 " to={menu.path}>
                                    {menu.elementname}
                                    <ArrowRight className='mt-2' />
                                </NavLink>

                            </li>
                        ))}
                    </ul>

                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
                <Accordion.Header>ContextApi</Accordion.Header>
                <Accordion.Body>
                    <ul className="nav flex-column navigation">
                        {contextapi.map((menu) => (
                            <li className="nav-item" key={menu.id}>
                                <NavLink className="nav-link d-flex gap-2 " to={menu.path}>
                                    {menu.elementname}
                                    <ArrowRight className='mt-2' />
                                </NavLink>

                            </li>
                        ))}
                    </ul>

                </Accordion.Body>
            </Accordion.Item>
        </Accordion>

    );
}
export default MainNavigation;