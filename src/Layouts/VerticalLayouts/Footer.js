import React from 'react';
import { Col, Container, Row } from 'reactstrap';

import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <React.Fragment>
            <footer className="footer">
                <div className="w-100 text-center">
                    <div className="m-auto text-center d-inline">
                        <Link to="#" className={"text-decoration-underline "}>Company</Link>
                    </div>
                    <div className="m-auto text-center d-inline">
                        <Link to="#" className={"text-decoration-underline "}>Solutions</Link>
                    </div>
                    <div className="m-auto text-center d-inline">
                        <Link to="#" className={"text-decoration-underline "}>Customers</Link>
                    </div>
                    <div className="m-auto text-center d-inline">
                        <Link to="#" className={"text-decoration-underline "}>Partners</Link>
                    </div>
                </div>
            </footer>
        </React.Fragment>
    );
};

export default Footer;