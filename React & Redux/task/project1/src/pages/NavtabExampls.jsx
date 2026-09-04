import { useState } from "react";
import { CurrencyRupee, Calendar2, Clock } from 'react-bootstrap-icons';
import { Container, Nav, Tab } from 'react-bootstrap';

function NavtabExample() {

    const [activeKey, setActiveKey] = useState("overview");

    const projectDetails = [
        { label: "Start date", value: "01 Jul, 2025", icon: <Calendar2 className='text-primary me-3' /> },
        { label: "End date", value: "31 Dec, 2025", icon: <Calendar2 className='text-primary me-3' /> },
        { label: "Estimate Time", value: "5 Months", icon: <Clock className='text-primary me-3' /> },
        { label: "Estimate Cost", value: "₹5,80,000", icon: <CurrencyRupee className='text-primary me-3' /> },
    ];

    const tabsData = [
        {
            key: "overview",
            title: "Overview",
            content: (
                <>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos aut fugiat corrupti iusto. Dicta saepe officiis eligendi esse error, natus veritatis debitis illo vitae cumque, exercitationem nemo in qui atque.</p>


                    {projectDetails.map((item, index) => (
                        <div
                            key={index}
                            className={`d-flex justify-content-between align-items-center ${index === 0 ? "mt-5" : "mt-2"} border-bottom pb-2 px-4`}
                        >
                            <h6>{item.icon}{item.label}</h6>
                            <h6 className="small">{item.value}</h6>
                        </div>
                    ))}
                </>
            )
        },
        { key: "project-scope", title: "Project Scope", content: "Tab content for Project Scope" },
        { key: "team-members", title: "Team Members", content: "Tab content for Team Members" },
        { key: "tasks", title: "Tasks", content: "Tab content for Tasks" },
        { key: "chat", title: "Chat", content: "Tab content for Chat" }
    ];

    return (
        <Container className='p-3 mt-2'>

            <h3 className="text-start text-decoration-underline mb-3">NavTabs
            </h3>
            <Tab.Container activeKey={activeKey} onSelect={(k) => setActiveKey(k)}>

                <Nav variant="underline" className="mb-3 mt-5 border-bottom">
                    {tabsData.map((tab) => (
                        <Nav.Item key={tab.key}>
                            <Nav.Link
                                eventKey={tab.key}
                                className={`px-2 ${activeKey === tab.key ? "text-primary fw-normal border-3" : "text-dark"}`}
                            >
                                {tab.title}
                            </Nav.Link>
                        </Nav.Item>
                    ))}
                </Nav>

                <Tab.Content>
                    {tabsData.map((tab) => (
                        <Tab.Pane key={tab.key} eventKey={tab.key}>
                            {tab.content}
                        </Tab.Pane>
                    ))}
                </Tab.Content>

            </Tab.Container>

        </Container>
    );
}

export default NavtabExample;