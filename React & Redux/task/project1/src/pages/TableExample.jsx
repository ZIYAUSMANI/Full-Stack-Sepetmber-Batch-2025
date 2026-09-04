import Table from "react-bootstrap/Table";
import Badge from 'react-bootstrap/Badge';
import { badgesdata } from '../data/Badgesdata';
import { Container } from "react-bootstrap";

function TableExample() {
    return (

        <Container className="p-3 mt-2">
            <h3 className="text-start text-decoration-underline">Table</h3>
            <h6 className="mt-4">Table non responsive</h6>
            <Table className="mt-4 borderless  small p-4">

                <thead className="border-bottom small text-start">
                    <tr>
                        <th className="text-secondary fw-semibold">Employee</th>
                        <th className="text-secondary fw-semibold">Department</th>
                        <th className="text-secondary fw-semibold">Salary</th>
                        <th className="text-secondary fw-semibold">Payment Date</th>
                        <th className="text-secondary fw-semibold">Payment Status</th>
                        <th className="text-secondary fw-semibold">Employment Status</th>
                    </tr>
                </thead>

                <tbody className="small">
                    {badgesdata.map((data, index) => (
                        <tr className="border-bottom" key={index}>
                            <td className="fw-semibold py-3">{data.employee}</td>

                            <td className="py-3">
                                {data.icon && <data.icon className="me-2 text-secondary" />}
                                {data.department}
                            </td>

                            <td className="py-3">{data.salary}</td>

                            <td className="py-3">{data.payment_date}</td>

                            <td className="py-3">
                                <Badge className={`badge rounded-pill ${data.bg_color} ${data.text_color} py-1 px-2`}>
                                    {data.payment_status}
                                </Badge>
                            </td>

                            <td className="py-3">{data.employee_status}</td>
                        </tr>
                    ))}
                </tbody>

            </Table>
            <h6 className="mt-2">Table responsive</h6>
            <Table className="mt-4 borderless  small p-4" responsive>

                <thead className="border-bottom small text-start">
                    <tr>
                        <th className="text-secondary fw-semibold">Employee</th>
                        <th className="text-secondary fw-semibold">Department</th>
                        <th className="text-secondary fw-semibold">Salary</th>
                        <th className="text-secondary fw-semibold">Payment Date</th>
                        <th className="text-secondary fw-semibold">Payment Status</th>
                        <th className="text-secondary fw-semibold">Employment Status</th>
                    </tr>
                </thead>

                <tbody className="small">
                    {badgesdata.map((data, index) => (
                        <tr className="border-bottom" key={index}>
                            <td className="fw-semibold py-3">{data.employee}</td>

                            <td className="py-3">
                                {data.icon && <data.icon className="me-2 text-secondary" />}
                                {data.department}
                            </td>

                            <td className="py-3">{data.salary}</td>

                            <td className="py-3">{data.payment_date}</td>

                            <td className="py-3">
                                <Badge className={`badge rounded-pill ${data.bg_color} ${data.text_color} py-1 px-2`}>
                                    {data.payment_status}
                                </Badge>
                            </td>

                            <td className="py-3">{data.employee_status}</td>
                        </tr>
                    ))}
                </tbody>

            </Table>

        </Container>
    )
}

export default TableExample