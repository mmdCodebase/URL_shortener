import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, Col, DropdownItem, DropdownMenu, DropdownToggle, Input, Modal, Row, UncontrolledDropdown, ModalBody, ModalHeader } from 'reactstrap';

//SimpleBar
import SimpleBar from "simplebar-react";

//import images
import avatar2 from "../../assets/images/users/avatar-2.jpg";
import avatar3 from "../../assets/images/users/avatar-3.jpg";
import avatar4 from "../../assets/images/users/avatar-4.jpg";
import avatar8 from "../../assets/images/users/avatar-8.jpg";

import avatar7 from "../../assets/images/users/avatar-7.jpg";
import avatar5 from "../../assets/images/users/avatar-5.jpg";
import image13 from "../../assets/images/dashboard/super-man.png";
import image14 from "../../assets/images/dashboard/female1.png";
import image15 from "../../assets/images/dashboard/female2.png";

import CountUp from "react-countup";

const TeamTab = () => {
    //Modal  
    const [modal, setModal] = useState(false);
    const openModal = () => setModal(!modal);
    return (
        <React.Fragment>
            <div className="team-list list-view-filter">
                <div className="row g-0 text-center text-sm-start align-items-center mb-3">
                    <div className="col-sm-6">
                        <div style={{ color: "#FF6190" }}>
                            <i className="mb-sm-0 fs-16 ri-lock-unlock-line pe-2"></i><p className="mb-sm-0 fs-16 d-inline">The questionnaire will lock in 10 days.</p>

                        </div>
                    </div>
                </div>
                <Row>
                    <Col md={8}>
                        <Card className="team-box">
                            <CardBody className="px-4">
                                <Row className="align-items-center team-row">
                                    <Col lg={6}>
                                        <div className="team-profile-img">
                                            <h1 className="mt-2">Q1</h1>
                                            <div className="team-content mt-2">
                                                <Link to="#" className="d-block"><h5 className="fs-16 mb-1">What is your fullname?</h5></Link>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={6} className="col">
                                        <div className="text-end">
                                            <Link to="#" className="btn-light ri-pencil-line p-2 rounded-circle fs-22"></Link>
                                            <Link to="#" className={"text-decoration-underline ms-3 mb-2"}>View All</Link>
                                        </div>
                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>
                        <Card className="team-box">
                            <CardBody className="px-4">
                                <Row className="align-items-center team-row">
                                    <Col lg={6}>
                                        <div className="team-profile-img">
                                            <h1 className="mt-2">Q2</h1>
                                            <div className="team-content mt-2">
                                                <Link to="#" className="d-block"><h5 className="fs-16 mb-1">What is your company name?</h5></Link>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={6} className="col">
                                        <div className="text-end">
                                            <Link to="#" className="btn-light ri-pencil-line p-2 rounded-circle fs-22"></Link>
                                            <Link to="#" className={"text-decoration-underline ms-3 mb-2"}>View All</Link>
                                        </div>
                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>
                        <Card className="team-box">
                            <CardBody className="px-4">
                                <Row className="align-items-center team-row">
                                    <Col lg={6}>
                                        <div className="team-profile-img">
                                            <h1 className="mt-2">Q3</h1>
                                            <div className="team-content mt-2">
                                                <Link to="#" className="d-block"><h5 className="fs-16 mb-1">Paste your biography</h5></Link>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={6} className="col">
                                        <div className="text-end">
                                            <Link to="#" className="btn-light ri-pencil-line p-2 rounded-circle fs-22"></Link>
                                            <Link to="#" className={"text-decoration-underline ms-3 mb-2"}>View All</Link>
                                        </div>
                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>
                        <Card className="team-box">
                            <CardBody className="px-4">
                                <Row className="align-items-center team-row">
                                    <Col lg={6}>
                                        <div className="team-profile-img">
                                            <h1 className="mt-2">Q4</h1>
                                            <div className="team-content mt-2">
                                                <Link to="#" className="d-block"><h5 className="fs-16 mb-1">Type in two industry relevant statistics that apply to your business</h5></Link>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={6} className="col">
                                        <div className="text-end">
                                            <Link to="#" className="btn-light ri-pencil-line p-2 rounded-circle fs-22"></Link>
                                            <Link to="#" className={"text-decoration-underline ms-3 mb-2"}>View All</Link>
                                        </div>
                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>
                        <Card className="team-box">
                            <CardBody className="px-4">
                                <Row className="align-items-center team-row">
                                    <Col lg={6}>
                                        <div className="team-profile-img">
                                            <h1 className="mt-2">Q5</h1>
                                            <div className="team-content mt-2">
                                                <Link to="#" className="d-block"><h5 className="fs-16 mb-1">Please mention two product features</h5></Link>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={6} className="col">
                                        <div className="text-end">
                                            <Link to="#" className="btn-light ri-pencil-line p-2 rounded-circle fs-22"></Link>
                                            <Link to="#" className={"text-decoration-underline ms-3 mb-2"}>View All</Link>
                                        </div>
                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>
                        <Card className="team-box">
                            <CardBody className="px-4">
                                <Row className="align-items-center team-row">
                                    <Col lg={6}>
                                        <div className="team-profile-img">
                                            <h1 className="mt-2">Q6</h1>
                                            <div className="team-content mt-2">
                                                <Link to="#" className="d-block">
                                                    <h5 className="fs-16 mb-1">
                                                        Please mention anything newsworthy that has occurred in the industry in the last 6 months
                                                    </h5>
                                                </Link>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={6} className="col">
                                        <div className="text-end">
                                            <Link to="#" className="btn-light ri-pencil-line p-2 rounded-circle fs-22"></Link>
                                            <Link to="#" className={"text-decoration-underline ms-3 mb-2"}>View All</Link>
                                        </div>
                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>
                        <Card className="team-box">
                            <CardBody className="px-4">
                                <Row className="align-items-center team-row">
                                    <Col lg={6}>
                                        <div className="team-profile-img">
                                            <h1 className="mt-2">Q7</h1>
                                            <div className="team-content mt-2">
                                                <Link to="#" className="d-block">
                                                    <h5 className="fs-16 mb-1">Enter products or services closely related to your business
                                                    </h5>
                                                </Link>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={6} className="col">
                                        <div className="text-end">
                                            <Link to="#" className="btn-light ri-pencil-line p-2 rounded-circle fs-22"></Link>
                                            <Link to="#" className={"text-decoration-underline ms-3 mb-2"}>View All</Link>
                                        </div>
                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>
                        <Card className="team-box">
                            <CardBody className="px-4">
                                <Row className="align-items-center team-row">
                                    <Col lg={6}>
                                        <div className="team-profile-img">
                                            <h1 className="mt-2">Q1</h1>
                                            <div className="team-content mt-2">
                                                <Link to="#" className="d-block"><h5 className="fs-16 mb-1">Enter your website</h5></Link>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={6} className="col">
                                        <div className="text-end">
                                            <Link to="#" className="btn-light ri-pencil-line p-2 rounded-circle fs-22"></Link>
                                            <Link to="#" className={"text-decoration-underline ms-3 mb-2"}>View All</Link>
                                        </div>
                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="card-animate" style={{ backgroundColor: "#2C74FF", minHeight: "300px" }}>
                            <CardBody>
                                <div className="d-flex align-items-center">
                                    <div className="flex-grow-1">
                                        <p className="fw-medium mb-5 text-white fs-16" style={{ color: "#101213" }}>Brand Value</p>
                                    </div>
                                    <div className="flex-shrink-0">
                                        <h5 className="fs-14 mb-0 text-white">
                                            <i className="fs-24 align-middle ri-information-line"></i>
                                        </h5>
                                    </div>
                                </div>
                                <div className="align-items-end justify-content-between mt-4 mb-4 py-2">
                                    <div>
                                        <h4 className={"fs-22 fw-semibold ff-secondary mb-4 "}>
                                            <span className="counter-value fs-36" data-target="559.25" style={{ color: "#F7FF9C" }}>
                                                <CountUp
                                                    start={0}
                                                    prefix={"$"}
                                                    end={26751}
                                                    decimals={0}
                                                    duration={4}
                                                />
                                            </span>
                                        </h4>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center" style={{ color: "#101213" }}>
                                    <div className="flex-grow-1">
                                        <select className="form-select mb-3" style={{ width: "150px", backgroundColor: "#1F65ED", border: "none" }} aria-label="Default select example">
                                            <option >18%</option>
                                            <option value="1">36%</option>
                                            <option value="2">72%</option>
                                            <option value="3">144%</option>
                                        </select>
                                    </div>
                                    <div className="flex-shrink-0">
                                        <h5 className={"fs-14 mb-0 text-success"}>
                                            <p className={"fw-medium mb-0 p-3 text-white"} style={{ backgroundColor: "#1F65ED", borderRadius: "8px" }}>Last 30days</p>
                                        </h5>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                        <Card className="card-animate" style={{ backgroundColor: "#F7FF9C", minHeight: "300px" }}>
                            <CardBody>
                                <div className="d-flex align-items-center">
                                    <div className="flex-grow-1">
                                        <p className="fw-medium mb-5 fs-16">Brand Value</p>
                                    </div>
                                    <div className="flex-shrink-0">
                                        <h5 className="fs-14 mb-0">
                                            <i className="fs-24 align-middle ri-information-line"></i>
                                        </h5>
                                    </div>
                                </div>
                                <div className="align-items-end justify-content-between mt-4 mb-4 py-2">
                                    <div>
                                        <h4 className={"fs-22 fw-semibold ff-secondary mb-4 "}>
                                            <span className="counter-value fs-36" data-target="559.25" style={{ color: "#101213" }}>
                                                <CountUp
                                                    start={0}
                                                    prefix={"$"}
                                                    end={26751}
                                                    decimals={0}
                                                    duration={4}
                                                />
                                            </span>
                                        </h4>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center" style={{ color: "#101213" }}>
                                    <div className="flex-grow-1">
                                        <select className="form-select mb-3" style={{ width: "150px", backgroundColor: "#EBF484", border: "none", color: "#101213" }} aria-label="Default select example">
                                            <option >18%</option>
                                            <option value="1">36%</option>
                                            <option value="2">72%</option>
                                            <option value="3">144%</option>
                                        </select>
                                    </div>
                                    <div className="flex-shrink-0">
                                        <h5 className={"fs-14 mb-0 text-success"}>
                                            <p className={"fw-medium mb-0 p-3"} style={{ backgroundColor: "#EBF484", borderRadius: "8px", color: "#101213" }}>Last 30days</p>
                                        </h5>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>

                        <div className={"fs-14 mb-0 mb-3"} style={{ border: "1px solid #2C74FF", borderRadius: "8px", position: "relative" }}>
                            <p className={"fw-medium mb-0 p-4 text-white"}>
                                Last 30days
                            </p>
                            <div className="position-absolute" style={{ top: "17px", right: "10px" }}>
                                <i className="ri-arrow-right-s-line fs-22 text-white" ></i>
                            </div>
                        </div>

                        <div className={"fs-14 mb-0"} style={{ border: "1px solid #2C74FF", borderRadius: "8px", position: "relative" }}>
                            <p className={"fw-medium mb-0 p-4 text-white"}>
                                Last 30days
                            </p>
                            <div className="position-absolute" style={{ top: "17px", right: "10px" }}>
                                <i className="ri-arrow-right-s-line fs-22 text-white" ></i>
                            </div>
                        </div>
                    </Col>
                </Row>
                <hr />
                <Row>
                    <Col xl={9} md={12}>
                        <Card>
                            <div className="flex-grow-1 pt-2">
                                <p className="fs-20 text-white ps-3 pt-3 m-0">Bolg Posts</p>
                            </div>
                            <CardBody>
                                <Row>
                                    <Col xl={3} md={6}>
                                        <Card className="mb-0">
                                            <CardBody className="bg-soft-dark" style={{ height: "318px", borderRadius: "10px" }}>
                                                <div className="mb-3 text-center">
                                                    <div className="flex-shrink-0">
                                                        <img src={image13} alt="" />
                                                    </div>
                                                </div>
                                                <div className="flex-grow-1 float-left">
                                                    <h5 className="fs-15 mb-1 mt-2 text-muted">May 26, 2023</h5>
                                                    <p className="mb-2 text-white">Be a PR Superhero for Your SME</p>
                                                </div>
                                            </CardBody>
                                        </Card>
                                    </Col>
                                    <Col xl={3} md={6}>
                                        <Card className="mb-0">
                                            <CardBody className="bg-soft-dark" style={{ height: "318px", borderRadius: "10px" }}>
                                                <div className="mb-3 text-center">
                                                    <div className="flex-shrink-0">
                                                        <img src={image13} alt="" />
                                                    </div>
                                                </div>
                                                <div className="flex-grow-1 float-left">
                                                    <h5 className="fs-15 mb-1 mt-2 text-muted">May 26, 2023</h5>
                                                    <p className="mb-2 text-white">PR Unmasked: The Truth Behind the Hype and the Magic of Building Trust</p>
                                                </div>
                                            </CardBody>
                                        </Card>
                                    </Col>
                                    <Col xl={3} md={6}>
                                        <Card className="mb-0">
                                            <CardBody className="bg-soft-dark" style={{ height: "318px", borderRadius: "10px" }}>
                                                <div className="mb-3 text-center">
                                                    <div className="flex-shrink-0">
                                                        <img src={image13} alt="" />
                                                    </div>
                                                </div>
                                                <div className="flex-grow-1 float-left">
                                                    <h5 className="fs-15 mb-1 mt-2 text-muted">May 26, 2023</h5>
                                                    <p className="mb-2 text-white">The Challenge of Getting Featured in Forbes: How to Be Recognized as an Elite Business</p>
                                                </div>
                                            </CardBody>
                                        </Card>
                                    </Col>
                                    <Col xl={3} md={6}>
                                        <Card className="mb-0">
                                            <CardBody className="bg-soft-dark" style={{ height: "318px", borderRadius: "10px" }}>
                                                <div className="mb-3 text-center">
                                                    <div className="flex-shrink-0">
                                                        <img src={image13} alt="" />
                                                    </div>
                                                </div>
                                                <div className="flex-grow-1 float-left">
                                                    <h5 className="fs-15 mb-1 mt-2 text-muted">May 26, 2023</h5>
                                                    <p className="mb-2 text-white">PR Unmasked: The Truth Behind the Hype and the Magic of Building Trust</p>
                                                </div>
                                            </CardBody>
                                        </Card>
                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col xl={3} md={12}>
                        <Card>

                            <div className="flex-grow-1 text-center mt-3 pt-2">
                                <p className="fs-20 text-white m-0">My Support Team</p>
                            </div>
                            <CardBody>
                                <div className="mb-3 text-center bg-soft-dark py-2" style={{ borderRadius: "10px" }}>
                                    <div className="mb-3 pt-2">
                                        <div className="flex-shrink-0">
                                            <img src={image14} alt="" />
                                        </div>
                                    </div>
                                    <div className="flex-grow-1">
                                        <h5 className="fs-15 mb-1">Laila Sachedina</h5>
                                        <p className="text-muted mb-2">Director of Operations</p>
                                    </div>
                                </div>
                                <div className="mb-3 text-center bg-soft-dark py-2" style={{ borderRadius: "10px" }}>
                                    <div className="mb-3 pt-2">
                                        <div className="flex-shrink-0">
                                            <img src={image15} alt="" />
                                        </div>
                                    </div>
                                    <div className="flex-grow-1">
                                        <h5 className="fs-15 mb-1">Jeannine Weaver</h5>
                                        <p className="text-muted mb-2">Senior Writer</p>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
        </React.Fragment>
    );
};

export default TeamTab;