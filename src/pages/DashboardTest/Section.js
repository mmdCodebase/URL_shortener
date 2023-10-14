import React, { useState } from 'react';
import { Card, CardBody, Col, Nav, NavItem, NavLink, Row, TabContent, TabPane } from 'reactstrap';
import classnames from 'classnames';
import "./style.css";

//import images
import slack from '../../assets/images/brands/slack.png';
import OverviewTab from './OverviewTab';
import DocumentsTab from './DocumentsTab';
import ActivitiesTab from './ActivitiesTab';
import TeamTab from './TeamTab';

const Section = () => {
    //Tab 
    const [activeTab, setActiveTab] = useState('1');
    const toggleTab = (tab) => {
        if (activeTab !== tab) {
            setActiveTab(tab);
        }
    };

    const [pillsTab, setpillsTab] = useState("1");
    const pillsToggle = (tab) => {
        if (pillsTab !== tab) {
            setpillsTab(tab);
        }
    };

    return (
        <React.Fragment>
            <Row>
                <Col lg={12}>
                    <Card className="mt-n4 mx-n4">
                        <div style={{ backgroundColor: "#000" }}>
                            <CardBody className="pb-3 px-4">

                                <Nav className="nav-tabs-custom1 border-bottom-0" role="tablist">
                                    <NavItem>
                                        <NavLink
                                            className={classnames({ active: activeTab === '1' }, "fw-semibold")}
                                            onClick={() => { toggleTab('1'); }}
                                            href="#">
                                            Overview
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink
                                            className={classnames({ active: activeTab === '2' }, "fw-semibold")}
                                            onClick={() => { toggleTab('2'); }}
                                            href="#">
                                            Questionnarie
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink
                                            className={classnames({ active: activeTab === '3' }, "fw-semibold")}
                                            onClick={() => { toggleTab('3'); }}
                                            href="#">
                                            Content
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink
                                            className={classnames({ active: activeTab === '4' }, "fw-semibold")}
                                            onClick={() => { toggleTab('4'); }}
                                            href="#">
                                            Post
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink
                                            className={classnames({ active: activeTab === '5' }, "fw-semibold")}
                                            onClick={() => { toggleTab('5'); }}
                                            href="#">
                                            Calendar
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink
                                            className={classnames({ active: activeTab === '6' }, "fw-semibold")}
                                            onClick={() => { toggleTab('6'); }}
                                            href="#">
                                            Analytics
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink
                                            className={classnames({ active: activeTab === '7' }, "fw-semibold")}
                                            onClick={() => { toggleTab('7'); }}
                                            href="#">
                                            Reporting
                                        </NavLink>
                                    </NavItem>
                                </Nav>
                            </CardBody>
                        </div>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col lg={12}>
                    <TabContent activeTab={activeTab} className="text-muted">
                        <TabPane tabId="4">
                            <DocumentsTab />
                        </TabPane>
                    </TabContent>
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default Section;