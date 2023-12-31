import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import MetaTags from 'react-meta-tags';

//import COmponents
import UpgradeAccountNotise from './UpgradeAccountNotise';
import UsersByDevice from './UsersByDevice';
import Widget from './Widget';
import BreadCrumb from '../../Components/Common/BreadCrumb';
import AudiencesMetrics from './AudiencesMetrics';
import AudiencesSessions from './AudiencesSessions';
import LiveUsers from './LiveUsers';
import TopReferrals from './TopReferrals';
import TopPages from './TopPages';

const DashboardAnalytics = () => {
    document.title = "Analytics | Smart Shutter Website";
    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>

                    <BreadCrumb title="Analytics" pageTitle="Dashboards" />
                    <div className="d-flex flex-column h-100">
                        <Row className="h-100">
                            <Col xxl={5}>
                                <UpgradeAccountNotise />
                                <Widget />
                            </Col>
                            <LiveUsers />
                        </Row>
                        <Row>
                            <AudiencesMetrics />
                            <AudiencesSessions />
                        </Row>
                        <Row>
                            <UsersByDevice />
                            <TopReferrals />
                            <TopPages />
                        </Row>
                    </div>
                </Container>
            </div>
        </React.Fragment>
    );
};

export default DashboardAnalytics;