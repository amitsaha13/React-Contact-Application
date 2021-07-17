import React, { Component } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Form, Card, Row, Col } from 'react-bootstrap'
class AddContact extends Component {
    state = {
        name: "",
        email: "",
        phone: ""
    };

    add = (e) => {
        e.preventDefault();
        if (this.state.name === "" && this.state.email === "" && this.state.phone === "") {
            alert("All the fields are required !")
            return
        }
        this.props.addContactHandler(this.state);
        this.setState({ name: "", email: "", phone: "" })
        // console.log(this.state);
    };

    render() {
        return (

            <div className="container" style={{ alignContent: "" }} >
                <Card style={{ width: '70%' }}>
                    <Card.Title style={{ height: '40px', backgroundColor: "#967bed" }}>Contact Manager</Card.Title>
                    <Card.Img variant="top" src="https://picsum.photos/seed/picsum/200/300" height="200px" />
                    <Card.Body>

                        <Form onSubmit={this.add}>
                            <Row>
                                <Col> <Form.Label><h5> Name</h5></Form.Label></Col>
                                <Col>
                                    <Form.Group>
                                        <Form.Control type="text" name="name" placeholder="Enter the name"
                                            value={this.state.name} onChange={(e) => this.setState({ name: e.target.value })} />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <br></br>
                            <Row style={{ marginTop: "" }}>
                                <Col> <Form.Label> <h5>Email Address</h5></Form.Label></Col>
                                <Col>
                                    <Form.Group>
                                        <Form.Control type="email" placeholder="example@gmail.com" name="email"
                                            value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })} />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <br></br>
                            <Row style={{ marginTop: "" }}>
                                <Col> <Form.Label> <h5>Phone Number</h5></Form.Label></Col>
                                <Col>
                                    <Form.Group>
                                        <Form.Control type="text" placeholder="Enter the contact no" name="phone"
                                            value={this.state.phone} onChange={(e) => this.setState({ phone: e.target.value })} />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <br></br>
                            <div className="d-grid gap-2">
                                <Button type="submit" variant="outline-success" size="lg">
                                    Add Contact
                                </Button>

                            </div>
                        </Form>

                    </Card.Body>
                </Card>

            </div>

        )
    }
}

export default AddContact
