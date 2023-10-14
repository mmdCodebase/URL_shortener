import React, { useState } from 'react';
import { Card, CardBody, Col, Container, Input, Label, Row, Table, Button, Modal, ModalHeader } from 'reactstrap';
import Select from "react-select";
import MetaTags from "react-meta-tags";
import BreadCrumb from '../../../Components/Common/BreadCrumb';
import UiContent from "../../../Components/Common/UiContent";
import { Link } from 'react-router-dom';
import {
    DefaultTables,
    StrippedRow,
    TablesColors,
    HoverableRows,
    CardTables,
    ActiveTables,
    BorderedTables,
    TablesBorderColors,
    TablesWithoutBorders,
    SmallTables,
    TableHead,
    TableFoot,
    Captions,
    TableNesting,
    Variants,
    VerticalAlignment,
    ResponsiveTables
} from './BasicTablesCode';

const SingleOptions = [
    { value: 'serp.ly', label: 'serp.ly' },
    { value: 'Short.io', label: 'Short.io' },
    { value: 'due.co', label: 'due.co' },
    { value: 'Bitly.com', label: 'Bitly.com' }
];

const BasicTables = () => {
    const [selectedSingle, setSelectedSingle] = useState(null);

    function handleSelectSingle(selectedSingle) {
        setSelectedSingle(selectedSingle);
    }

    const [modal_animationZoom, setmodal_animationZoom] = useState(false);
    function tog_animationZoom() {
        setmodal_animationZoom(!modal_animationZoom);
    }

    const [modal_backdrop, setmodal_backdrop] = useState(false);
    function tog_backdrop() {
        setmodal_backdrop(!modal_backdrop);
    }

    document.title = "Basic Tables | Smart Shutter Website";
    return (
        <React.Fragment>
            <UiContent />
            <div className="page-content pt-4">

                <Container fluid>
                    <Row>
                        <Col lg={12}>
                            <Card>
                                <CardBody>
                                    <div className="pt-3 pb-5 m-auto text-center" style={{ maxWidth: "500px" }}>
                                        <div className="form-icon">
                                            <Input type="text" className="form-control form-control-icon" id="iconInput" placeholder="Paste Url Here..." />
                                            <i className="ri-mail-unread-line"></i>
                                        </div>
                                        <Button color="primary" className="mt-3" onClick={() => tog_animationZoom()} >Check the provide Url</Button>
                                    </div>
                                    <div className="mb-3">
                                        <Label htmlFor="choices-single-default" className="form-label text-muted d-inline-block pe-3 ps-3">Links for domain</Label>
                                        <Select
                                            className="d-inline-block"
                                            value={selectedSingle}
                                            onChange={() => {
                                                handleSelectSingle();
                                            }}
                                            options={SingleOptions}
                                        />
                                    </div>

                                    <div className="live-preview">
                                        <div className="table-responsive">
                                            <Table className="table-hover align-middle table-nowrap mb-0">
                                                <thead>
                                                    <tr>
                                                        <th scope="col" style={{ "width": "25px" }}>
                                                            <div className="form-check">
                                                                <Input className="form-check-input" type="checkbox" id="checkAll" defaultValue="option1" />
                                                            </div>
                                                        </th>
                                                        <th scope="col">Date</th>
                                                        <th scope="col">Short link</th>
                                                        <th scope="col">Original link</th>
                                                        <th scope="col">Clicks</th>
                                                        <th scope="col">Tags</th>
                                                        <th scope="col">Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <th scope="row">
                                                            <div className="form-check">
                                                                <Input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option1" />
                                                            </div>
                                                        </th>
                                                        <td>12/10/2023</td>
                                                        <td><i className="ri-file-copy-line pe-2"></i>https://serp.ly/Smart</td>
                                                        <td><a href="#" target='blank'>My proposal - Google Docs</a><br />https://docs.google.com/document/d/1wYxe6L1moaSOpwIpLVOY1lqeS2JgapaeCpTqs47NWVo/edit</td>
                                                        <td>1</td>
                                                        <td>Google Docs</td>
                                                        <td>
                                                            <div className="hstack gap-3 flex-wrap">
                                                                <h5 className="fs-15" onClick={() => tog_backdrop()}><i className="ri-edit-2-line"></i></h5>
                                                                <h5 className="fs-15"><i className="ri-delete-bin-line"></i></h5>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">
                                                            <div className="form-check">
                                                                <Input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option1" />
                                                            </div>
                                                        </th>
                                                        <td>12/10/2023</td>
                                                        <td><i className="ri-file-copy-line pe-2"></i>https://serp.ly/Smart</td>
                                                        <td><a href="#" target='blank'>My proposal - Google Docs</a><br />https://docs.google.com/document/d/1wYxe6L1moaSOpwIpLVOY1lqeS2JgapaeCpTqs47NWVo/edit</td>
                                                        <td>1</td>
                                                        <td>Google Docs</td>
                                                        <td>
                                                            <div className="hstack gap-3 flex-wrap">
                                                                <h5 className="fs-15"><i className="ri-edit-2-line"></i></h5>
                                                                <h5 className="fs-15"><i className="ri-delete-bin-line"></i></h5>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">
                                                            <div className="form-check">
                                                                <Input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option1" />
                                                            </div>
                                                        </th>
                                                        <td>12/10/2023</td>
                                                        <td><i className="ri-file-copy-line pe-2"></i>https://serp.ly/Smart</td>
                                                        <td><a href="#" target='blank'>My proposal - Google Docs</a><br />https://docs.google.com/document/d/1wYxe6L1moaSOpwIpLVOY1lqeS2JgapaeCpTqs47NWVo/edit</td>
                                                        <td>1</td>
                                                        <td>Google Docs</td>
                                                        <td>
                                                            <div className="hstack gap-3 flex-wrap">
                                                                <h5 className="fs-15"><i className="ri-edit-2-line"></i></h5>
                                                                <h5 className="fs-15"><i className="ri-delete-bin-line"></i></h5>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">
                                                            <div className="form-check">
                                                                <Input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option1" />
                                                            </div>
                                                        </th>
                                                        <td>12/10/2023</td>
                                                        <td><i className="ri-file-copy-line pe-2"></i>https://serp.ly/Smart</td>
                                                        <td><a href="#" target='blank'>My proposal - Google Docs</a><br />https://docs.google.com/document/d/1wYxe6L1moaSOpwIpLVOY1lqeS2JgapaeCpTqs47NWVo/edit</td>
                                                        <td>1</td>
                                                        <td>Google Docs</td>
                                                        <td>
                                                            <div className="hstack gap-3 flex-wrap">
                                                                <h5 className="fs-15"><i className="ri-edit-2-line"></i></h5>
                                                                <h5 className="fs-15"><i className="ri-delete-bin-line"></i></h5>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">
                                                            <div className="form-check">
                                                                <Input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option1" />
                                                            </div>
                                                        </th>
                                                        <td>12/10/2023</td>
                                                        <td><i className="ri-file-copy-line pe-2"></i>https://serp.ly/Smart</td>
                                                        <td><a href="#" target='blank'>My proposal - Google Docs</a><br />https://docs.google.com/document/d/1wYxe6L1moaSOpwIpLVOY1lqeS2JgapaeCpTqs47NWVo/edit</td>
                                                        <td>1</td>
                                                        <td>Google Docs</td>
                                                        <td>
                                                            <div className="hstack gap-3 flex-wrap">
                                                                <h5 className="fs-15"><i className="ri-edit-2-line"></i></h5>
                                                                <h5 className="fs-15"><i className="ri-delete-bin-line"></i></h5>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">
                                                            <div className="form-check">
                                                                <Input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option1" />
                                                            </div>
                                                        </th>
                                                        <td>12/10/2023</td>
                                                        <td><i className="ri-file-copy-line pe-2"></i>https://serp.ly/Smart</td>
                                                        <td><a href="#" target='blank'>My proposal - Google Docs</a><br />https://docs.google.com/document/d/1wYxe6L1moaSOpwIpLVOY1lqeS2JgapaeCpTqs47NWVo/edit</td>
                                                        <td>1</td>
                                                        <td>Google Docs</td>
                                                        <td>
                                                            <div className="hstack gap-3 flex-wrap">
                                                                <h5 className="fs-15"><i className="ri-edit-2-line"></i></h5>
                                                                <h5 className="fs-15"><i className="ri-delete-bin-line"></i></h5>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">
                                                            <div className="form-check">
                                                                <Input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option1" />
                                                            </div>
                                                        </th>
                                                        <td>12/10/2023</td>
                                                        <td><i className="ri-file-copy-line pe-2"></i>https://serp.ly/Smart</td>
                                                        <td><a href="#" target='blank'>My proposal - Google Docs</a><br />https://docs.google.com/document/d/1wYxe6L1moaSOpwIpLVOY1lqeS2JgapaeCpTqs47NWVo/edit</td>
                                                        <td>1</td>
                                                        <td>Google Docs</td>
                                                        <td>
                                                            <div className="hstack gap-3 flex-wrap">
                                                                <h5 className="fs-15"><i className="ri-edit-2-line"></i></h5>
                                                                <h5 className="fs-15"><i className="ri-delete-bin-line"></i></h5>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">
                                                            <div className="form-check">
                                                                <Input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option1" />
                                                            </div>
                                                        </th>
                                                        <td>12/10/2023</td>
                                                        <td><i className="ri-file-copy-line pe-2"></i>https://serp.ly/Smart</td>
                                                        <td><a href="#" target='blank'>My proposal - Google Docs</a><br />https://docs.google.com/document/d/1wYxe6L1moaSOpwIpLVOY1lqeS2JgapaeCpTqs47NWVo/edit</td>
                                                        <td>1</td>
                                                        <td>Google Docs</td>
                                                        <td>
                                                            <div className="hstack gap-3 flex-wrap">
                                                                <h5 className="fs-15"><i className="ri-edit-2-line"></i></h5>
                                                                <h5 className="fs-15"><i className="ri-delete-bin-line"></i></h5>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">
                                                            <div className="form-check">
                                                                <Input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option1" />
                                                            </div>
                                                        </th>
                                                        <td>12/10/2023</td>
                                                        <td><i className="ri-file-copy-line pe-2"></i>https://serp.ly/Smart</td>
                                                        <td><a href="#" target='blank'>My proposal - Google Docs</a><br />https://docs.google.com/document/d/1wYxe6L1moaSOpwIpLVOY1lqeS2JgapaeCpTqs47NWVo/edit</td>
                                                        <td>1</td>
                                                        <td>Google Docs</td>
                                                        <td>
                                                            <div className="hstack gap-3 flex-wrap">
                                                                <h5 className="fs-15"><i className="ri-edit-2-line"></i></h5>
                                                                <h5 className="fs-15"><i className="ri-delete-bin-line"></i></h5>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">
                                                            <div className="form-check">
                                                                <Input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option1" />
                                                            </div>
                                                        </th>
                                                        <td>12/10/2023</td>
                                                        <td><i className="ri-file-copy-line pe-2"></i>https://serp.ly/Smart</td>
                                                        <td><a href="#" target='blank'>My proposal - Google Docs</a><br />https://docs.google.com/document/d/1wYxe6L1moaSOpwIpLVOY1lqeS2JgapaeCpTqs47NWVo/edit</td>
                                                        <td>1</td>
                                                        <td>Google Docs</td>
                                                        <td>
                                                            <div className="hstack gap-3 flex-wrap">
                                                                <h5 className="fs-15"><i className="ri-edit-2-line"></i></h5>
                                                                <h5 className="fs-15"><i className="ri-delete-bin-line"></i></h5>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </Table>



                                            <Modal id="flipModal" isOpen={modal_animationZoom} toggle={() => { tog_animationZoom(); }} modalClassName="zoomIn" centered >
                                                <ModalHeader>
                                                    Link was created
                                                </ModalHeader>
                                                <div className="modal-body">
                                                    <h5 className="fs-16 text-center">
                                                        https://serp.ly/Smart<i className="ri-file-copy-line pe-2"></i>
                                                        <Input type="text" className="form-control my-4" id="valueInput" defaultValue="Smart" />
                                                    </h5>
                                                </div>
                                                <div className="modal-footer">
                                                    <Button color="light" onClick={() => { tog_animationZoom(); }}> Close </Button>
                                                    <Button color="primary" > Save changes </Button>
                                                </div>
                                            </Modal>


                                            <Modal
                                                isOpen={modal_backdrop}
                                                toggle={() => {
                                                    tog_backdrop();
                                                }}
                                                backdrop={'static'}
                                                id="staticBackdrop"
                                                centered
                                            >
                                                <ModalHeader className="ps-4">
                                                    Edit short URL
                                                </ModalHeader>
                                                <div className="modal-body px-5 pb-5">

                                                    <p>Customize your short URL, the original URL, link title and manage your tags.</p>

                                                    <div className="mt-1">

                                                        <div>
                                                            <Label htmlFor="valueInput" className="form-label pt-3">Link Slug</Label>
                                                            <Input type="text" className="form-control" id="valueInput" defaultValue="Smart" />
                                                        </div>
                                                        <div>
                                                            <Label htmlFor="valueInput" className="form-label pt-3">Link Title</Label>
                                                            <Input type="text" className="form-control" id="valueInput" defaultValue="Google Docs" />
                                                        </div>
                                                        <div>
                                                            <Label htmlFor="valueInput" className="form-label pt-3">Origin URL</Label>
                                                            <Input type="text" className="form-control" id="valueInput" defaultValue="https://docs.google.com/document/d/1wYxe6L1moaSOpwIpLVOY1lqeS2JgapaeCpTqs47NWVo/edit" />
                                                        </div>


                                                        <div>
                                                            <Label htmlFor="placeholderInput" className="form-label pt-3">Tags of short URL</Label>
                                                            <Input type="password" className="form-control" id="placeholderInput" placeholder="Tags of short URL" />
                                                        </div>
                                                        <div className="hstack gap-2 justify-content-center pt-4">
                                                            <h5 className="btn btn-link shadow-none link-success fw-medium" onClick={() => setmodal_backdrop(false)}>Cancel</h5>
                                                            <h5 className="btn btn-success" onClick={() => setmodal_backdrop(false)}>Save</h5>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Modal>

                                        </div>
                                    </div>
                                    <div className="d-none code-view">
                                        <pre className="language-markup" style={{ "height": "275px" }}>
                                            <code>
                                                <HoverableRows />
                                            </code>
                                        </pre>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>

                </Container>
            </div>
        </React.Fragment>
    )
}

export default BasicTables