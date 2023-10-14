import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Select from "react-select";

import { Card, CardBody, Input, CardHeader, Col, DropdownItem, DropdownMenu, DropdownToggle, Row, UncontrolledDropdown, Label, Button, Modal, ModalHeader } from 'reactstrap';


//import images
import image11 from "../../assets/images/dashboard/linkedin-women.png";
import image12 from "../../assets/images/dashboard/youtube-women.png";
import image13 from "../../assets/images/dashboard/super-man.png";
import image14 from "../../assets/images/dashboard/female1.png";
import image15 from "../../assets/images/dashboard/female2.png";
import image16 from "../../assets/images/dashboard/wind-icon.png";
import image17 from "../../assets/images/dashboard/facebook-icon.png";
import image18 from "../../assets/images/dashboard/cloud-icon.png";
import image19 from "../../assets/images/dashboard/google-icon.png";
import image20 from "../../assets/images/dashboard/chart-icon.png";
import image21 from "../../assets/images/dashboard/logo.png";
import image22 from "../../assets/images/dashboard/chart.png";
import image23 from "../../assets/images/dashboard/bg-1.png";
import image24 from "../../assets/images/dashboard/brand.png";
import image25 from "../../assets/images/dashboard/instagram-womem.png";
import image26 from "../../assets/images/dashboard/facebook-women.png";

import CountUp from "react-countup";

//SimpleBar

const SingleOptions = [
    { value: 'Choices 1', label: 'Choices 1' },
    { value: 'Choices 2', label: 'Choices 2' },
    { value: 'Choices 3', label: 'Choices 3' },
    { value: 'Choices 4', label: 'Choices 4' }
];

const otherWidgets2 = [
    {
        id: 1,
        title: "Graphics Work",
        subTitle: "Graphics Work",
        subItem: [
            {
                id: 1,
                // icon: "mdi mdi-numeric-1-circle",
                iconClass: "success",
                label: "0 Direct",
            },
            {
                id: 2,
                // icon: "mdi mdi-numeric-3-circle",
                iconClass: "info",
                label: "14,750",
            },
            {
                id: 3,
                // icon: "mdi mdi-numeric-2-circle",
                iconClass: "primary",
                label: "55%",
            },
        ],
        progressBar1: [
            { id: 1, bgColor: "#002E86", width: "50%" },
            { id: 2, bgColor: "#C3D7FF", width: "20%" },
            { id: 3, bgColor: "#FFF", width: "15%" },
            { id: 4, bgColor: "#F7FF9C", width: "15%" },
        ],
        progressBar2: [
            { id: 1, bgColor: "#101213", width: "50%" },
            { id: 2, bgColor: "#67696B", width: "20%" },
            { id: 3, bgColor: "#2C74FF", width: "15%" },
            { id: 4, bgColor: "#81ACFF", width: "15%" },
        ],
    },
];
const OverviewTab = () => {

    const [selectedSingle, setSelectedSingle] = useState(null);

    function handleSelectSingle(selectedSingle) {
        setSelectedSingle(selectedSingle);
    }

    const [modal_togFirst, setmodal_togFirst] = useState(false);
    function tog_togFirst() {
        setmodal_togFirst(!modal_togFirst);
    }

    const [modal_togSecond, setmodal_togSecond] = useState(false);
    function tog_togSecond() {
        setmodal_togSecond(!modal_togSecond);
    }


    return (
        <React.Fragment>
            <Row>
                <Col md={6}>
                    <Card style={{ height: "274px", padding: "4%" }}>

                        <div className="flex-shrink-0" style={{ position: "absolute", right: "0px", top: "0px" }}>
                            <img className="border-corner" src={image23} alt="" />
                        </div>
                        <CardBody className="p-0" style={{ position: "relative" }}>
                            <Row>
                                <Col sm={8}>
                                    <div className="p-3">
                                        <p className="fs-12 lh-base text-white">Generate and schedule conversion and engagement focused consistent brand symmetrical social media post creatives. </p>
                                    </div>
                                </Col>
                            </Row>
                            <div className="w-100" style={{ position: "absolute", bottom: "0px" }}>

                                {/* <div>
                                    <Button color="primary" onClick={() => tog_togFirst()}>Open First Modal</Button>
                                </div> */}

                                <div className="mt-3 w-50 text-center" onClick={() => tog_togFirst()} style={{ display: 'inline-block' }}>
                                    <Link to="#" className="btn btn-secondary fs-16 px-4 btn-rounded">Creat Campagin</Link>
                                </div>
                                <div className="mt-3 w-50" style={{ display: 'inline-block' }}>
                                    <Link to="#" className="btn btn-soft-dark fs-16 px-4 btn-rounded">Submit Questionnaire</Link>
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
                <Col md={6}>
                    <Row>
                        <Col md={6}>
                            <div style={{ height: "267.5" }}>
                                <Card className={"card-animate"}>
                                    <CardBody>
                                        <div className="d-flex align-items-center">
                                            <div className="flex-grow-1">
                                                <p className="fw-medium mb-0 text-muted fs-16">Shunter Score</p>
                                            </div>
                                            <div className="flex-shrink-0">
                                                <h5 className="fs-14 mb-0 text-white">
                                                    <i className="fs-24 align-middle ri-information-line"></i>
                                                </h5>
                                            </div>
                                        </div>
                                        <div className="align-items-end justify-content-between mt-4">
                                            <div>
                                                <h4 className="fs-36 fw-semibold ff-secondary mb-2 ">
                                                    <span className="counter-value" data-target="559.25">
                                                        <CountUp
                                                            start={0}
                                                            prefix={"$"}
                                                            end={1580}
                                                            decimals={2}
                                                            duration={3}
                                                        />
                                                    </span>
                                                </h4>
                                            </div>
                                            <br />

                                            <Col lg={5} >
                                                <select className="form-select mb-3" aria-label="Default select example">
                                                    <option >18%</option>
                                                    <option value="1">36%</option>
                                                    <option value="2">72%</option>
                                                    <option value="3">144%</option>
                                                </select>
                                            </Col>
                                        </div>
                                    </CardBody>
                                </Card>
                            </div>

                            <div className="w-100" style={{ display: 'inline-block' }} >
                                <Link to="#" className="btn fs-16 px-4 btn-rounded w-100" style={{ backgroundColor: "#F7FF9C", color: "#1C1F21" }}>Enable Shutter AI</Link>
                            </div>
                        </Col>
                        <Col md={6}>
                            <Card className="card-animate" style={{ backgroundColor: "#2C74FF" }}>
                                <CardBody style={{ height: "267.5px" }}>
                                    {(otherWidgets2 || []).map((item, key) => (<Col lg={12} key={key}>
                                        <div className="d-flex align-items-center">
                                            <div className="flex-grow-1">
                                                <p className={"fw-medium mb-0 fs-16 text-white"}>Shunter Score</p>
                                            </div>
                                            <div className="flex-shrink-0">
                                                <h5 className={"fs-14 mb-0 text-success"}>
                                                    <p className={"fw-medium mb-0 p-3 text-white"} style={{ backgroundColor: "#1F65ED", borderRadius: "8px" }}>Last 30days</p>
                                                </h5>
                                            </div>
                                        </div>
                                        <div className="flex-grow-1">
                                            <p className={"fw-medium mb-0 text-white"}>Trafic</p>
                                            <p className={"fw-medium mb-0 text-white"}>Unique Visitors</p>
                                        </div>
                                        <div className="align-items-end justify-content-between mt-4">
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
                                        <div className="progress animated-progess rounded-bottom rounded-top rounded-0" style={{ height: "6px", backgroundColor: "#2C74FF" }}>
                                            {item.progressBar1.map((item, key) => (
                                                <div className={"progress-bar rounded-0 me-1"} role="progressbar" style={{ width: item.width, backgroundColor: item.bgColor }} aria-valuenow="30" aria-valuemin="0" aria-valuemax="100" key={key}></div>
                                            ))}
                                        </div>

                                        <div className="d-flex flex-wrap justify-content-evenly">
                                            {item.subItem.map((item, key) => (
                                                <p className="mb-0 my-3" style={{ color: "white" }} key={key}>
                                                    <i className={"fs-18 align-middle me-2 rounded-circle shadow"}></i>
                                                    {item.label}
                                                </p>
                                            ))}
                                        </div>
                                    </Col>))}
                                </CardBody>

                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row>
                <Col xl={3} md={6}>
                    <Card className={"card-animate"}>
                        <CardBody style={{ height: "261px" }}>
                            <div className="d-flex align-items-end justify-content-between mt-2">
                                <div className="d-flex">
                                    <h4 className={"fs-36 fw-semibold ff-secondary mb-2 "}>
                                        <span className="counter-value" data-target="559.25">
                                            <CountUp
                                                start={0}
                                                prefix={""}
                                                end={6276}
                                                decimals={0}
                                                duration={3}
                                            />
                                        </span>
                                    </h4>
                                </div>

                                <div className="d-flex flex-shrink-0">
                                    <h5 className={"fs-14 mb-0"}>
                                        <i className={"fs-36 align-middle ri-add-fill bg-soft-dark btn-rounded p-1"} style={{ color: "#F7FF9C" }}></i>
                                    </h5>
                                </div>
                            </div>
                            <div className="flex-grow-1" style={{ height: "60px" }}>
                                <p className={"fw-medium mb-0 text-muted"}>Contacts</p>
                                <p className={"fw-medium mb-0 text-muted"}>+45 new</p>
                            </div>
                            <div className="text-center">

                                <div className="mt-3 w-100" style={{ display: 'inline-block' }}>
                                    <Link to="" className="btn btn-soft-dark fs-16 px-4 btn-rounded">Submit Questionnaire</Link>
                                </div>
                            </div>
                            <br />
                            <div className="m-auto text-center">
                                <Link to="#" className={"text-decoration-underline "}>View All</Link>
                            </div>

                        </CardBody>
                    </Card>
                </Col>
                <Col xl={3} md={6}>
                    <Card className={"card-animate"}>
                        <CardBody style={{ height: "261px" }}>
                            <div className="d-flex align-items-end justify-content-between mt-2">
                                <div className="">
                                    <div className="flex-grow-1">
                                        <p className={"fw-medium mb-0 text-muted"}>Todays social Reach</p>
                                    </div>
                                    <h4 className={"fs-36 fw-semibold ff-secondary mb-2 "}>
                                        <span className="counter-value" data-target="559.25">
                                            <CountUp
                                                start={0}
                                                prefix={"~"}
                                                end={10580}
                                                decimals={0}
                                                duration={3}
                                            />
                                        </span></h4>
                                </div>
                            </div>
                            <div className="card-body p-0 pb-3 text-center">
                                <div className="mt-3">
                                    <div className="flex-shrink-0">
                                        <img src={image22} alt="" />
                                    </div>
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
                <Col xl={3} md={6}>
                    <Card className="card-animate">
                        <CardBody className="bg-white horizontal-grid" style={{ borderRadius: "16px", height: "261px" }}>

                            <div className="d-flex align-items-center mt-2">
                                <div className="flex-grow-1">
                                    <p className={"fw-medium mb-0 fs-16"} style={{ color: "black" }}>Tasks</p>
                                </div>

                                <Col lg={5} >
                                    <select className="form-select mb-3" style={{ backgroundColor: "#C3D7FF", border: "none", color: "#101213" }} aria-label="Default select example">
                                        <option >Today</option>
                                        <option value="1">Yesterday</option>
                                        <option value="2">Tomorrow</option>
                                        <option value="3">The Next Days</option>
                                    </select>
                                </Col>
                            </div>
                            <div className="flex-grow-1 text-dark">

                                <div className="flex-shrink-0">
                                    <p className={"fs-14 mt-4"}>
                                        <i className={"align-middle ri-checkbox-circle-line"} style={{ fontSize: "20px", color: "#000" }}>Submit Questionnaire</i>
                                    </p>
                                </div>
                                <div className="flex-shrink-0">
                                    <p className={"fs-14 mt-4"}>
                                        <i className={"align-middle ri-checkbox-circle-line"} style={{ fontSize: "20px", color: "#000" }}>Styling Guide</i>
                                    </p>
                                </div>
                                <div className="flex-shrink-0">
                                    <p className={"fs-14 mt-4"}>
                                        <i className={"align-middle ri-checkbox-circle-line"} style={{ fontSize: "20px", color: "#000" }}>Schedule</i>
                                    </p>
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
                <Col xl={3} md={6}>
                    <Card className="card-animate" style={{ backgroundColor: "#F7FF9C" }}>
                        <CardBody style={{ height: "261px" }}>
                            {(otherWidgets2 || []).map((item, key) => (<Col lg={12} key={key}>
                                <div className="d-flex align-items-center">
                                    <div className="flex-grow-1">
                                        <p className={"fw-medium mb-0 fs-16"} style={{ color: "#101213" }}>My influnce</p>
                                    </div>
                                    <div className="flex-shrink-0">
                                        <h5 className={"fs-14 mb-0 text-success"}>
                                            <p className={"fw-medium mb-0 p-3"} style={{ backgroundColor: "#EBF484", color: "#101213", borderRadius: "8px" }}>Last 30days</p>
                                        </h5>
                                    </div>
                                </div>
                                <div className="flex-grow-1">
                                    <p className={"fw-medium mb-0"} style={{ color: "#101213" }}>Social Media</p>
                                    <p className={"fw-medium mb-0"} style={{ color: "#101213" }}>Unique Visitors</p>
                                </div>
                                <div className="align-items-end justify-content-between mt-4">
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
                                <div className="progress animated-progess rounded-bottom rounded-top rounded-0" style={{ height: "6px", backgroundColor: "#F7FF9C" }}>
                                    {item.progressBar2.map((item, key) => (
                                        <div className={"progress-bar rounded-0 me-1"} role="progressbar" style={{ width: item.width, backgroundColor: item.bgColor }} aria-valuenow="30" aria-valuemin="0" aria-valuemax="100" key={key}></div>
                                    ))}
                                </div>

                                <div className="d-flex flex-wrap justify-content-evenly">
                                    {item.subItem.map((item, key) => (
                                        <p className="mb-0 my-3" style={{ color: "#101213" }} key={key}>
                                            <i className={"fs-18 align-middle me-2 rounded-circle shadow"}></i>
                                            {item.label}
                                        </p>
                                    ))}
                                </div>
                            </Col>))}
                        </CardBody>

                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xl={4} md={12}>
                    <Card className={"card-animate"}>
                        <CardBody>
                            <div className="d-flex align-items-end justify-content-between mt-2 mb-5">
                                <div className="d-flex">
                                    <h4 className={"fs-22 fw-semibold ff-secondary mb-2 "}>
                                        Linked Accounts
                                    </h4>
                                </div>

                                <div className="d-flex flex-shrink-0">
                                    <h5 className={"fs-14 mb-0"}>
                                        <i className={"fs-36 align-middle ri-add-fill bg-soft-dark btn-rounded p-1"} style={{ color: "#F7FF9C" }}></i>
                                    </h5>
                                </div>
                            </div>
                            <div className="deals d-flex">
                                <div className="d-flex mb-3 bg-light p-2" style={{ borderRadius: "5px" }}>
                                    <div className="flex-shrink-0 pe-2">
                                        <img src={image11} alt="" className="avatar-xs" />
                                    </div>
                                    <div className="flex-grow-1">
                                        <h5 className="fs-15 mb-1">Kerplunk</h5>
                                        <p className="text-muted m-0">LinkedIn company</p>
                                    </div>
                                </div>
                                <div className="d-flex mb-3 bg-light ms-2 p-2" style={{ borderRadius: "5px" }}>
                                    <div className="flex-shrink-0 pe-2">
                                        <img src={image12} alt="" className="avatar-xs" />
                                    </div>
                                    <div className="flex-grow-1">
                                        <h5 className="fs-15 mb-1">Shazir Muklai</h5>
                                        <p className="text-muted m-0">LinkedIn company</p>
                                    </div>
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
                <Col xl={8} md={12}>
                    <Row>
                        <Col md={3}>
                            <Card className={"card-animate"}>
                                <CardBody>
                                    <Col lg={12} >
                                        <select className="form-select bg-soft-dark mb-3" aria-label="Default select example">
                                            <option >Last 30 days</option>
                                            <option value="1">Last 20 days</option>
                                            <option value="2">Last 10 days</option>
                                            <option value="3">Last 5 days</option>
                                        </select>
                                    </Col>
                                    <div className="flex-grow-1">
                                        <p className={"fs-16 mb-0 text-white"}>Optimization</p>
                                        <p className={"fs-16 mb-0 text-white"}>Score</p>
                                        <h4 className={"fs-24 my-3 text-white"}>75%</h4>
                                    </div>

                                    <div className="m-auto text-center">
                                        <Link to="#" className={"text-decoration-underline "}>View All</Link>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col md={3}>
                            <Card className={"card-animate"}>
                                <CardBody>
                                    <Col lg={12} >
                                        <select className="form-select bg-soft-dark mb-3" aria-label="Default select example">
                                            <option >Last 30 days</option>
                                            <option value="1">Last 20 days</option>
                                            <option value="2">Last 10 days</option>
                                            <option value="3">Last 5 days</option>
                                        </select>
                                    </Col>
                                    <div className="flex-grow-1">
                                        <p className={"fs-16 mb-0 text-white"}>Optimization</p>
                                        <p className={"fs-16 mb-0 text-white"}>Score</p>
                                        <h4 className={"fs-24 mt-3 mb-4 pb-2 text-white"}>75%</h4>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col md={3}>
                            <Card className={"card-animate"}>
                                <CardBody>
                                    <Col lg={12} >
                                        <select className="form-select bg-soft-dark mb-3" aria-label="Default select example">
                                            <option >Last 30 days</option>
                                            <option value="1">Last 20 days</option>
                                            <option value="2">Last 10 days</option>
                                            <option value="3">Last 5 days</option>
                                        </select>
                                    </Col>
                                    <div className="flex-grow-1">
                                        <p className={"fs-16 mb-0 text-white"}>Optimization</p>
                                        <p className={"fs-16 mb-0 text-white"}>Score</p>
                                        <h4 className={"fs-24 mt-3 mb-4 pb-2 text-white"}>75%</h4>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col md={3}>
                            <Card className={"card-animate"}>
                                <CardBody>
                                    <Col lg={12} >
                                        <select className="form-select bg-soft-dark mb-3" aria-label="Default select example">
                                            <option >Last 30 days</option>
                                            <option value="1">Last 20 days</option>
                                            <option value="2">Last 10 days</option>
                                            <option value="3">Last 5 days</option>
                                        </select>
                                    </Col>
                                    <div className="flex-grow-1">
                                        <p className={"fs-16 mb-0 text-white"}>Optimization</p>
                                        <p className={"fs-16 mb-0 text-white"}>Score</p>
                                        <h4 className={"fs-24 mt-3 mb-4 pb-2 text-white"}>75%</h4>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>

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
            <hr />
            <Row>
                <h5 className="fs-15 mb-3">Get started with our most popular integrations</h5>
                <Col md={3} sm={6}>
                    <Card>
                        <CardBody>
                            <div className="mb-3">
                                <div className="mb-3">
                                    <div className="flex-shrink-0">
                                        <img src={image16} alt="" />
                                    </div>
                                </div>
                                <div className="flex-grow-1" style={{ marginBottom: "36px" }}>
                                    <h5 className="fs-15 mb-1">View All Publications</h5>
                                    <p className="text-muted">Check out our current inventory and specials. </p>
                                </div>
                            </div>
                            <div className="d-flex align-items-end justify-content-between mt-2">
                                <div className="d-flex">
                                    <h4 className={"fs-22 fw-semibold ff-secondary mb-2 "}>
                                        <span className="counter-value" data-target="559.25">
                                            Free
                                        </span>
                                    </h4>
                                </div>
                                <div className="d-flex flex-shrink-0">
                                    <div className="mt-3 w-50" style={{ display: 'inline-block' }}>
                                        <Link to="#" className="btn btn-soft-dark fs-16 px-4 btn-rounded">View</Link>
                                    </div>
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
                <Col md={3} sm={6}>
                    <Card>
                        <CardBody>
                            <div className="mb-3">
                                <div className="mb-3">
                                    <div className="flex-shrink-0">
                                        <img src={image17} alt="" />
                                    </div>
                                </div>
                                <div className="flex-grow-1">
                                    <h5 className="fs-15 mb-1">FB Ads</h5>
                                    <p className="text-muted mb-2">Stay relevant by connecting your Facebook manager to email press features and releases to stakeholders. </p>
                                </div>
                            </div>
                            <div className="d-flex align-items-end justify-content-between mt-2">
                                <div className="d-flex">
                                    <h4 className={"fs-22 fw-semibold ff-secondary mb-2 "}>
                                        <span className="counter-value" data-target="559.25">
                                            $30
                                        </span>
                                    </h4>
                                </div>
                                <div className="d-flex flex-shrink-0">
                                    <div className="mt-3 w-50" style={{ display: 'inline-block' }}>
                                        <Link to="#" className="btn btn-soft-dark fs-16 px-4 btn-rounded">Connect</Link>
                                    </div>
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
                <Col md={3} sm={6}>
                    <Card>
                        <CardBody>
                            <div className="mb-3">
                                <div className="mb-3">
                                    <div className="flex-shrink-0">
                                        <img src={image18} alt="" />
                                    </div>
                                </div>
                                <div className="flex-grow-1">
                                    <h5 className="fs-15 mb-1">CRM Integrations</h5>
                                    <p className="text-muted mb-2">Connect SalesForce to reach additional stakeholders besides your target audience.</p>
                                </div>
                            </div>
                            <div className="d-flex align-items-end justify-content-between mt-2">
                                <div className="d-flex">
                                    <h4 className={"fs-22 fw-semibold ff-secondary mb-2 "}>
                                        <span className="counter-value" data-target="559.25">
                                            $10
                                        </span>
                                    </h4>
                                </div>
                                <div className="d-flex flex-shrink-0">
                                    <div className="mt-3 w-50" style={{ display: 'inline-block' }}>
                                        <Link to="#" className="btn btn-soft-dark fs-16 px-4 btn-rounded">Connect</Link>
                                    </div>
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
                <Col md={3} sm={6}>
                    <Card>
                        <CardBody>
                            <div className="mb-3">
                                <div className="mb-3">
                                    <div className="flex-shrink-0">
                                        <img src={image19} alt="" />
                                    </div>
                                </div>
                                <div className="flex-grow-1">
                                    <h5 className="fs-15 mb-1">Google Ads</h5>
                                    <p className="text-muted mb-2">Stay relevant by connecting your Google manager to email press features and releases to stakeholders.   </p>
                                </div>
                            </div>
                            <div className="d-flex align-items-end justify-content-between mt-2">
                                <div className="d-flex">
                                    <h4 className={"fs-22 fw-semibold ff-secondary mb-2 "}>
                                        <span className="counter-value" data-target="559.25">
                                            Free
                                        </span>
                                    </h4>
                                </div>
                                <div className="d-flex flex-shrink-0">
                                    <div className="mt-3 w-50" style={{ display: 'inline-block' }}>
                                        <Link to="#" className="btn btn-soft-dark fs-16 px-4 btn-rounded">View</Link>
                                    </div>
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            <Row>

                <Col md={3} sm={6}>
                    <Card>
                        <CardBody>
                            <div className="mb-3" style={{ height: "128.5px" }}>
                                <div className="flex-grow-1">
                                    <h5 className="fs-15 mb-1">Smart Shutter</h5>
                                    <p className="text-muted mb-2">
                                        Create, Schedule and Post directly to multiple channels with brand symmetry and track sentiment using our proprietary AI based technology.
                                    </p>
                                </div>
                            </div>
                            <div className="d-flex align-items-end justify-content-between mt-2">
                                <div className="d-flex flex-shrink-0 w-100">
                                    <div className="mt-3 w-100" style={{ display: 'inline-block' }}>
                                        <Link to="#" className="btn btn-soft-dark fs-16 px-4 btn-rounded w-100">Connect</Link>
                                    </div>
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
                <Col md={3} sm={6}>
                    <Card>
                        <CardBody>
                            <div className="mb-3" style={{ height: "128.5px" }}>
                                <div className="mb-3">
                                    <div className="flex-shrink-0">
                                        <img src={image20} alt="" />
                                    </div>
                                </div>
                                <div className="flex-grow-1">
                                    <h5 className="fs-15 mb-1">Public Company</h5>
                                    <p className="text-muted mb-2">
                                        Find trends between your media presence and your stock’s performance.
                                    </p>
                                </div>
                            </div>
                            <div className="d-flex align-items-end justify-content-between mt-2">
                                <div className="d-flex flex-shrink-0 w-100">
                                    <div className="mt-3 w-100" style={{ display: 'inline-block' }}>
                                        <Link to="#" className="btn btn-soft-dark fs-16 px-4 btn-rounded w-100">Connect</Link>
                                    </div>
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
                <Col md={3} sm={6}>
                    <Card>
                        <CardBody>
                            <div className="mb-3" style={{ height: "128.5px" }}>
                                <div className="mb-3">
                                    <div className="flex-shrink-0">
                                        <img src={image21} alt="" />
                                    </div>
                                </div>
                                <div className="flex-grow-1">
                                    <h5 className="fs-15 mb-1">Public</h5>
                                    <h5 className="fs-15 mb-1">CompRoboPitchany?</h5>
                                    <p className="text-muted mb-2">
                                        Leverage AI to Pitch Millions of Journalists with Precision.
                                    </p>
                                </div>
                            </div>
                            <div className="d-flex align-items-end justify-content-between mt-2">
                                <div className="d-flex flex-shrink-0 w-100">
                                    <div className="mt-3 w-100" style={{ display: 'inline-block' }}>
                                        <Link to="#" className="btn btn-soft-dark fs-16 px-4 btn-rounded w-100">Connect</Link>
                                    </div>
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
                <Col md={3} sm={6}>
                    <Card>
                        <CardBody>
                            <div className="mb-3" style={{ height: "128.5px" }}>
                                <div className="flex-grow-1">
                                    <h5 className="fs-15 mb-1">Page Metric</h5>
                                    <p className="text-muted mb-2">
                                        Find what a publication is really worth based on over 150 datapoints.
                                    </p>
                                </div>
                            </div>
                            <div className="d-flex align-items-end justify-content-between mt-2">
                                <div className="d-flex flex-shrink-0 w-100">
                                    <div className="mt-3 w-100" style={{ display: 'inline-block' }}>
                                        <Link to="#" className="btn btn-soft-dark fs-16 px-4 btn-rounded w-100">Connect</Link>
                                    </div>
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
            </Row>


            <Modal
                isOpen={modal_togFirst}
                toggle={() => {
                    tog_togFirst();
                }}
                id="firstmodal"
                centered
            >
                <ModalHeader className="modal-style">
                    <Button
                        type="button"
                        className="btn-close"
                        onClick={() => {
                            setmodal_togFirst(false);
                        }}
                        aria-label="Close"
                    >
                    </Button>
                </ModalHeader>
                <div className="modal-body text-center px-5 pb-5">
                    <div className="mb-3 text-center">
                        <div className="flex-shrink-0">
                            <img src={image24} alt="" />
                        </div>
                    </div>
                    <div className="mt-2">
                        <h4>Save time by scheduling one post to multiple accounts!</h4>
                        <p className="text-muted">Scheduling at the right times is one of the best ways to attract new followers and grow engagement.<br /><br />

                            Start off by composing your first post, then schedule it across your social accounts ata recommended time - the more you schedule, the smarter the recommendations.</p>

                        <div className="mt-3 text-center" onClick={() => { tog_togSecond(); tog_togFirst(false); }} style={{ display: 'inline-block' }}>
                            <Link to="#" className="btn btn-secondary fs-16 px-4 btn-rounded">Schedule Your First Post</Link>
                        </div>
                    </div>
                </div>
            </Modal>

            <Modal
                isOpen={modal_togSecond}
                toggle={() => {
                    tog_togSecond();
                }}
                id="secondmodal"
                centered
            >
                <ModalHeader className="modal-style">
                    <h4 className="mb-3">Link More Accounts</h4>
                    <Button
                        type="button"
                        className="btn-close"
                        onClick={() => {
                            setmodal_togSecond(false);
                        }}
                        aria-label="Close"
                    ></Button>
                </ModalHeader>
                <div className="modal-body p-3 pt-0">
                    <hr className="mt-0" />
                    <div className="">
                        <h5 className="mb-3">Select Platform</h5>
                        <select className="form-select mb-3" aria-label="Default select example">
                            <option >Facebook</option>
                            <option value="1">Instagram</option>
                            <option value="2">LinkedIn</option>
                            <option value="3">Youtube</option>
                        </select>

                        <hr />

                        <h5 className="mb-3">Account Handle</h5>
                        <div className="form-icon">
                            <Input type="email" className="form-control" id="iconInput" placeholder="Ex. @travellover" />
                        </div>

                        <hr />
                        <h5 className="mb-3">Linked Accounts</h5>
                        <div>
                            <div className="d-flex">
                                <div className="d-flex p-2" style={{ borderRadius: "5px", width: "max-content" }}>
                                    <div className="pe-2">
                                        <img src={image25} alt="" className="avatar-xs" />
                                    </div>
                                    <div className="">
                                        <h5 className="fs-15 mb-1">Nickname@</h5>
                                        <p className="text-muted m-0">Instagram</p>
                                    </div>
                                </div>

                                <div className="position-absolute" style={{ right: "25px" }}>
                                    <Link to="#" className="btn btn-light fs-12 px-4 btn-rounded">
                                        Unlink
                                        <i className="align-middle ri-link ps-2 fs-16"></i>
                                    </Link>
                                </div>
                            </div>
                            <div className="d-flex">
                                <div className="d-flex p-2" style={{ borderRadius: "5px", width: "max-content" }}>
                                    <div className="pe-2">
                                        <img src={image25} alt="" className="avatar-xs" />
                                    </div>
                                    <div className="">
                                        <h5 className="fs-15 mb-1">Nickname@</h5>
                                        <p className="text-muted m-0">Instagram</p>
                                    </div>
                                </div>

                                <div className="position-absolute" style={{ right: "25px" }}>
                                    <Link to="#" className="btn btn-light fs-12 px-4 btn-rounded">
                                        Unlink
                                        <i className="align-middle ri-link ps-2 fs-16"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <Row className="mt-3">
                            <Col sm={6} className="text-center">
                                <Link to="#" className="btn btn-light fs-16 px-4 btn-rounded w-100" onClick={() => { tog_togFirst(); tog_togSecond(false); }}>
                                    Cancel
                                </Link>
                            </Col>
                            <Col sm={6} className="text-center" onClick={() => tog_togSecond(false)}>
                                <Link to="#" className="btn btn-dark fs-16 px-4 btn-rounded w-100">
                                    Link Account
                                </Link>
                            </Col>
                        </Row>
                    </div>
                </div>

            </Modal>

        </React.Fragment >
    );
};

export default OverviewTab;