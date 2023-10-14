import React from 'react';
import { Container } from 'reactstrap';
import Section from './Section';
import MetaTags from 'react-meta-tags';


const DashboardTest = () => {
    document.title = "Dashboard | Test";

    return (
        <React.Fragment>
            <div className="page-content">

                <Container fluid>
                    <Section />
                </Container>
            </div>
        </React.Fragment>
    );
};

export default DashboardTest;