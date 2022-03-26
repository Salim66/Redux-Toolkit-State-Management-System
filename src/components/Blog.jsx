import React from 'react';
import { Card, Col, Container, Form, Row, Button, Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const Blog = () => {

    let data = useSelector( state => state.user );
    let product = useSelector( state => state.product );
    let customer = useSelector( state => state.customer );

  return (
    <Container className='my-5'>
        <Row className='justify-content-center'>
            <Col md={4}>
                <Card>
                    <Card.Body>
                    <h3>User</h3>
                        <Table>
                            <tr>
                                <td>Name</td>
                                <td>{ data.name }</td>
                            </tr>
                            <tr>
                                <td>Email</td>
                                <td>{ data.email }</td>
                            </tr>
                            <tr>
                                <td>Photo</td>
                                <td>{ data.photo }</td>
                            </tr>
                        </Table>
                    </Card.Body>
                </Card>
            </Col>
            <Col md={4}>
                <Card>
                    <Card.Body>
                        <h3>Product</h3>
                        <Table>
                            <tr>
                                <td>Name</td>
                                <td>{ product.name }</td>
                            </tr>
                            <tr>
                                <td>Price</td>
                                <td>{ product.price }</td>
                            </tr>
                            <tr>
                                <td>Size</td>
                                <td>{ product.size }</td>
                            </tr>
                            <tr>
                                <td>Quantity</td>
                                <td>{ product.qty }</td>
                            </tr>
                        </Table>
                    </Card.Body>
                </Card>
            </Col>
            <Col md={4}>
                <Card>
                    <Card.Body>
                        <h3>Customer</h3>
                        <Table>
                            <tr>
                                <td>Name</td>
                                <td>{ customer.name }</td>
                            </tr>
                            <tr>
                                <td>Address</td>
                                <td>{ customer.address }</td>
                            </tr>
                            <tr>
                                <td>Email</td>
                                <td>{ customer.email }</td>
                            </tr>
                        </Table>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </Container>
  )
};

export default Blog;