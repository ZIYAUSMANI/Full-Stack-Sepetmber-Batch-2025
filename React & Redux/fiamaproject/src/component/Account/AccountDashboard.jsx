import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Nav, Card, Table, Button } from 'react-bootstrap';
import {
    HouseDoorFill,
    FileEarmarkText,
    PersonFill,
    BoxArrowRight
} from 'react-bootstrap-icons';
import { NavLink } from 'react-router-dom';
import AccountDetailsForm from './AccountDetailFrom';
import PasswordChangeForm from './PasswordChangeForm';
import { getOrdersByUserId, getUserById } from '../../api/Services';
import { ConvertToCurrency } from '../../utils/utils';
import { toast, ToastContainer } from 'react-toastify';




const AccountDashboard = () => {
    const [activeTab, setActiveTab] = useState("dashboard");
    const [user, setUser] = useState(null);
    const [orders, setOrders] = useState([]);
    const [loadingOrders, setLoadingOrders] = useState(false);



    const handleLogout = () => {
        localStorage.removeItem("login");
        localStorage.removeItem("id");
    }

    const fetchUser = async () => {
        try {
            const id = localStorage.getItem("id");

            const response = await getUserById(id);

            setUser(response.data[0]);
        } catch (error) {
            toast.error("Something went wrong");
        }
    };
    const fetchOrders = async () => {
        try {
            const userId = localStorage.getItem("id");

            if (!userId) {
                return;
            }

            setLoadingOrders(true);

            const response = await getOrdersByUserId(userId);

            setOrders(response.data || []);
        } catch (error) {
            console.error("Error fetching orders:", error);

            toast.error("Unable to load orders.");
        } finally {
            setLoadingOrders(false);
        }
    };

    useEffect(() => {
        fetchUser();
        fetchOrders();
    }, []);

    return (
        <Container className="py-5">
            <Row className="g-4">
                <Col lg={4} md={5}>
                    <Nav

                        activeKey={activeTab}
                        onSelect={(selectedKey) => setActiveTab(selectedKey)}
                        className="flex-column dashboard-nav border"
                    >
                        <Nav.Item>
                            <Nav.Link eventKey="dashboard" className="d-flex justify-content-between align-items-center">
                                <span>Dashboard</span>
                                <HouseDoorFill size={16} />
                            </Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                            <Nav.Link eventKey="orders" className="d-flex justify-content-between align-items-center">
                                <span>Orders</span>
                                <FileEarmarkText size={16} />
                            </Nav.Link>
                        </Nav.Item>


                        <Nav.Item>
                            <Nav.Link eventKey="account-details" className="d-flex justify-content-between align-items-center">
                                <span>Account Details</span>
                                <PersonFill size={18} />
                            </Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                            <NavLink
                                to="/login"
                                className="d-flex justify-content-between align-items-center py-4 px-3 text-decoration-none NavLinkgary"
                                onClick={handleLogout}
                            >
                                <span className='text-decoration-none '>Logout</span>
                                <BoxArrowRight size={18} />
                            </NavLink>
                        </Nav.Item>
                    </Nav>
                </Col>

                <Col lg={8} md={7}>
                    {activeTab === 'dashboard' && (
                        <div className="dashboard-content d-flex flex-column gap-3">
                            <div className="bg-light p-4 rounded-0">
                                <p className="mb-0 fs-6 text-dark">
                                    Hello{" "}
                                    <span className="fw-medium">
                                        {user
                                            ? `${user.firstName} ${user.lastName}`
                                            : "User"}
                                    </span>{" "}

                                    (not{" "}
                                    <span className="fw-medium">
                                        {user
                                            ? `${user.firstName} ${user.lastName}`
                                            : "User"}
                                    </span>?

                                    {" "}
                                    <NavLink
                                        to="/login"
                                        className="NavLink"
                                        onClick={handleLogout}
                                    >
                                        Log out
                                    </NavLink>
                                    )
                                </p>
                            </div>

                            <div className="bg-light p-4 rounded-0">
                                <p className="mb-0 text-secondary fs-6 lh-base">
                                    From your account dashboard you can view your recent orders, manage your shipping and billing addresses, and edit your password and account details.
                                </p>
                            </div>
                        </div>
                    )}

                    {activeTab === 'orders' && <div className="p-4 bg-light">
                        <Table responsive borderless className="align-middle">
                            <thead>
                                <tr className="border-bottom text-dark fw-bold">
                                    <th className="py-3 ps-3">Order Id</th>
                                    <th className="py-3">Date</th>
                                    <th className="py-3">Status</th>
                                    <th className="py-3">Total</th>
                                    <th className="py-3 pe-3">Action</th>
                                </tr>
                            </thead>
                            <tbody>

                                {loadingOrders ? (
                                    <tr>
                                        <td
                                            colSpan="5"
                                            className="text-center py-4"
                                        >
                                            Loading orders...
                                        </td>
                                    </tr>
                                ) : orders.length === 0 ? (
                                    <tr>
                                        <td
                                            colSpan="5"
                                            className="text-center py-4"
                                        >
                                            No orders found.
                                        </td>
                                    </tr>
                                ) : (
                                    orders.map((order, index) => (


                                        <tr key={order.id} className="border-bottom">
                                            <td className="py-2 ps-3 text-secondary"> #{order.id}</td>
                                            <td className="py-2 text-secondary">{order.createdAt ? new Date(order.createdAt).toLocaleDateString() : "-"}</td>
                                            <td className="py-2 text-secondary">{order.orderStatus ||
                                                "Pending"}</td>
                                            <td className="py-2 text-secondary">{ConvertToCurrency(order.totalAmount || "0")}</td>
                                            <td className="py-2 pe-3">
                                                <NavLink
                                                    to={`/orderdetails/${order.id}`}
                                                    className="text-decoration-none NavLink fw-normal"
                                                >
                                                    View
                                                </NavLink>
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </Table>

                    </div>}
                    {activeTab === 'account-details' && <div className="p-4 bg-light">
                        <AccountDetailsForm onUserUpdated={fetchUser} />
                        <PasswordChangeForm />
                    </div>}
                </Col>
            </Row>
            <ToastContainer />
        </Container>
    );
};

export default AccountDashboard;