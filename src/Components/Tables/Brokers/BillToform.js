import React from 'react'
import { Form, Row, Col } from "react-bootstrap";
import FloatingLabel from "react-bootstrap/FloatingLabel";

const BillToform = ({ onChangeBill, billdata }) => {


    return (
        <div>
            <Form>
                <Row className="mb-3 d-block-sm">
                    <Form.Group as={Row} controlId=" ContactName">
                        <Form.Label > Contact name  <span className="required">*</span> </Form.Label>
                        <Col >
                            <Form.Control
                                name="ContactName"
                                value={billdata.ContactName}
                                onChange={(e) => onChangeBill(e)}
                                placeholder={" Enter Contact Name"}
                                disabled={false}
                            />

                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId=" Address1">
                        <Form.Label >  Address(Street#,name) <span className="required">*</span> </Form.Label>
                        <Col >
                            <Form.Control
                                name="Address1"
                                value={billdata.Address1}
                                onChange={(e) => onChangeBill(e)}
                                placeholder={" Enter Address"}

                            />

                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId=" Address2 ">
                        <Form.Label column > Address Building Floor  </Form.Label>
                        <Col >
                            <Form.Control
                                name="Address2"
                                value={billdata.Address2}
                                onChange={(e) => onChangeBill(e)}
                                placeholder={" Enter Building Floor"}
                                disabled={false}
                            />

                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId=" City ">
                        <Form.Label column > City <span className="required">*</span>  </Form.Label>
                        <Col >
                            <Form.Control
                                name="City"
                                value={billdata.City}
                                onChange={(e) => onChangeBill(e)}
                                placeholder={" Enter City"}
                                disabled={false}
                            />

                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="State ">
                        <Form.Label column > State <span className="required">*</span>  </Form.Label>
                        <Col >
                            <Form.Control name="State"
                                value={billdata.State}
                                onChange={(e) => onChangeBill(e)}
                                placeholder={" Enter State"}
                                disabled={false}
                            />

                        </Col>
                    </Form.Group>
                </Row>
                <Row className="mb-3 d-block-sm">
                    <Form.Group as={Row} controlId="Zipcode">
                        <Form.Label column > Zipcode <span className="required">*</span>  </Form.Label>
                        <Col >
                            <Form.Control name="Zipcode"
                                value={billdata.Zipcode}
                                className="w-50"
                                onChange={(e) => onChangeBill(e)}
                                placeholder={" Enter Zipcode"}
                                disabled={false}
                            />

                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="Phone">
                        <Form.Label column > Phone </Form.Label>
                        <Col >
                            <Form.Control name="Phone"
                                value={billdata.Phone}
                                className="w-50"
                                onChange={(e) => onChangeBill(e)}
                                placeholder={" Enter Phone"}
                                disabled={false}
                            />

                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="ContactEmail">
                        <Form.Label column > Contact Email </Form.Label>
                        <Col >
                            <Form.Control name="ContactEmail"
                                value={billdata.ContactEmail}
                                className="w-50"
                                onChange={(e) => onChangeBill(e)}
                                placeholder={" Enter Email"}
                                disabled={false}
                            />

                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="ContactPhone">
                        <Form.Label column > Contact Phone </Form.Label>
                        <Col >
                            <Form.Control name="ContactPhone"
                                value={billdata.ContactPhone}
                                className="w-50"
                                onChange={(e) => onChangeBill(e)}
                                placeholder={" Enter Contact Phone"}
                                disabled={false}
                            />

                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="Fax">
                        <Form.Label column > Fax Number </Form.Label>
                        <Col >
                            <Form.Control
                                name="Fax"
                                value={billdata.Fax}
                                className="w-50"
                                onChange={(e) => onChangeBill(e)}
                                placeholder={" Enter Fax Number"}
                                disabled={false}
                            />

                        </Col>
                    </Form.Group>
                </Row>
                <Row className="mb-3 d-block-sm">
                    <Form.Group as={Row} controlId="Terms">
                        <Form.Label column > Terms </Form.Label>
                        <Col >
                            <Form.Control name="Terms"
                                value={billdata.Terms}
                                className="w-50"
                                onChange={(e) => onChangeBill(e)}
                                placeholder={" Enter Terms"}
                                disabled={false}
                                style={{ width: '613%' }}
                            />

                        </Col>
                    </Form.Group>
</Row>
                <FloatingLabel controlId="Comments" >
                    <Form.Control
                        as="textarea"
                        name={"Comments"}
                        value={billdata.Comments}
                        placeholder={"Comments"}
                        style={{ height: "100px", width: '100%', resize: 'vertical' }}
                        onChange={(e) => onChangeBill(e)}

                    />
                </FloatingLabel>
            </Form>
        </div>
    )
}

export default BillToform;