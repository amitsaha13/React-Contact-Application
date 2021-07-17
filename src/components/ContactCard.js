import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Form, Card, Row, Col, CardImg } from 'react-bootstrap'
import male from "../images/male.png";
function ContactCard(props) {

    const { id, name, email, phone } = props.singleContactDetails;
    return (
        <div>

            <Card style={{ width: '70%' }}>

                <Card.Body>
                    <Row>
                        <Col>
                            <img src={male} height="60" width="60" />
                        </Col>
                        <Col><Card.Title>{name}</Card.Title>
                            <Card.Text>
                                {email}<br />
                                {phone}
                            </Card.Text>

                        </Col>
                        <Col>
                            <Button variant="danger" type="submit" onClick={() => props.clickHandler(id)}>Delete</Button>
                        </Col>
                    </Row>


                </Card.Body>
            </Card>
        </div>
    )
}

export default ContactCard
