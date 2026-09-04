import { Bell, BoxArrowInRight, Gear, Person, Speedometer2 } from 'react-bootstrap-icons';
import Dropdown from 'react-bootstrap/Dropdown';
import image from '../assets/profile3.svg';
import { Image } from 'react-bootstrap';

function DropdownExample() {

    const menuItems = [
        { icon: <Speedometer2 className='me-2' />, label: "Dashboard" },
        { icon: <Bell className='me-2' />, label: "Notification" },
        { icon: <Gear className='me-2' />, label: "Settings" },
        { icon: <BoxArrowInRight className='me-2' />, label: "Logout" }
    ];

    return (
        <div className="container p-3 mt-2">
            <h3 className="text-start text-decoration-underline mb-5">
                Dropdown
            </h3>

            <div className="d-flex justify-content-between">

                {[0, 1, 2].map((index) => (
                    <Dropdown key={index} align={index === 2 ? "end" : ""}>


                        {index === 2 ? (
                            <Dropdown.Toggle as="div" className=" p-0 border-0" bsPrefix=' '>
                                <Image src={image} roundedCircle width={40} height={40} />
                            </Dropdown.Toggle>
                        ) : (
                            <Dropdown.Toggle variant={index === 0 ? "primary" : "outline-primary"}>
                                <Person /> Profile
                            </Dropdown.Toggle>
                        )}


                        <Dropdown.Menu>
                            {menuItems.map((menu, i) => (
                                <Dropdown.Item key={i}>
                                    {menu.icon} {menu.label}
                                </Dropdown.Item>
                            ))}
                        </Dropdown.Menu>

                    </Dropdown>
                ))}

            </div>
        </div>
    );
}

export default DropdownExample;