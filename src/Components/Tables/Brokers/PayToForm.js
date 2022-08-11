import React from 'react'
import { Form, Row, Col } from "react-bootstrap";
// import Checkbox from '@mui/material/Checkbox';
// import FormControlLabel from '@mui/material/FormControlLabel';
import FloatingLabel from "react-bootstrap/FloatingLabel";

const PayToForm = ({ onChangePay, payData }) => {


    return (
        <div>
            <Form>
                <Row className="mb-3 d-block-sm">
                    <Form.Group as={Row} controlId=" ContactName">
                        <Form.Label > Contact name  <span className="required">*</span> </Form.Label>
                        <Col >
                            <Form.Control
                                name="ContactName"
                                value={payData.ContactName}
                                onChange={(e) => onChangePay(e)}
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
                                value={payData.Address1}
                                onChange={(e) => onChangePay(e)}
                                placeholder={" Enter Address"}

                            />

                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="Address2">
                        <Form.Label column > Address Building Floor  </Form.Label>
                        <Col >
                            <Form.Control
                                value={payData.Address2}
                                name="Address2"
                                onChange={(e) => onChangePay(e)}
                                placeholder={" Enter Building Floor"}
                                disabled={false}
                            />

                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="City">
                        <Form.Label column > City <span className="required">*</span>  </Form.Label>
                        <Col >
                            <Form.Control
                                name="City"
                                value={payData.City}
                                onChange={(e) => onChangePay(e)}
                                placeholder={" Enter City"}
                                disabled={false}
                            />

                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="State">
                        <Form.Label column > State <span className="required">*</span>  </Form.Label>
                        <Col >
                            <Form.Control
                                value={payData.State}
                                name="State"
                                onChange={(e) => onChangePay(e)}
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
                            <Form.Control
                                name="Zipcode"
                                value={payData.Zipcode}
                                className="w-50"
                                onChange={(e) => onChangePay(e)}
                                placeholder={" Enter Zipcode"}
                                disabled={false}
                            />

                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="Phone">
                        <Form.Label column > Phone </Form.Label>
                        <Col >
                            <Form.Control
                                name="Phone"
                                value={payData.Phone}
                                className="w-50"
                                onChange={(e) => onChangePay(e)}
                                placeholder={" Enter Phone"}
                                disabled={false}
                            />

                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="ContactEmail">
                        <Form.Label column > Contact Email </Form.Label>
                        <Col >
                            <Form.Control
                                value={payData.ContactEmail}
                                name="ContactEmail"
                                className="w-50"
                                onChange={(e) => onChangePay(e)}
                                placeholder={" Enter Email"}
                                disabled={false}
                            />

                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="ContactPhone">
                        <Form.Label column > Contact Phone </Form.Label>
                        <Col >
                            <Form.Control
                                name="ContactPhone"
                                className="w-50"
                                value={payData.ContactPhone}
                                onChange={(e) => onChangePay(e)}
                                placeholder={" Enter Contact Phone"}
                                disabled={false}
                            />

                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="Fax">
                        <Form.Label column > Fax Number </Form.Label>
                        <Col >
                            <Form.Control
                                value={payData.Fax}
                                name="Fax"
                                className="w-50"
                                onChange={(e) => onChangePay(e)}
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
                            <Form.Control
                                value={payData.Terms}
                                name="Terms"
                                className="w-50"
                                onChange={(e) => onChangePay(e)}
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
                        value={payData.Comments}
                        name="Comments"
                        placeholder={"Comments"}
                        style={{ height: "100px", width: '100%', resize: 'vertical' }}

                        onChange={(e) => onChangePay(e)}

                    />
                </FloatingLabel>
            </Form>
        </div>
    )
}

export default PayToForm;