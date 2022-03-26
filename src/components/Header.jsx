import React from 'react';
import { Card, Col, Container, Form, Row, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { changeCAddress, changeCEmail, changeCName } from '../redux/customSlice';
import { changePName, changePPrice, changePQty, changePSize } from '../redux/productSlice';
import { changeEmail, changeName, changePhoto } from '../redux/userSlice';

const Header = () => {

    const dispatch = useDispatch();
    let data = useSelector( state => state.user );

    let product = useSelector( state => state.product );

    let customer = useSelector( state => state.customer );



    console.log(customer);

  return (
      <>
        <Container className='my-5'>
            <Row className='justify-content-center'>
                <Col md={4}>
                    <Card>
                        <Card.Body>
                            <h3>Create an account</h3>
                            <hr />
                            <Form>
                                <Form.Group classname='my-2'>
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control value={ data.name } onChange={ e =>  dispatch(changeName({ name: e.target.value })) } />
                                </Form.Group>
                                <Form.Group classname='my-2'>
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control value={ data.email } onChange={ e =>  dispatch(changeEmail({ email: e.target.value })) }  />
                                </Form.Group>
                                <Form.Group classname='my-2'>
                                    <Form.Label>Photo</Form.Label>
                                    <Form.Control value={ data.photo } onChange={ e =>  dispatch(changePhoto({ photo: e.target.value })) }  />
                                </Form.Group><br />
                                <Form.Group classname='my-2'>
                                    <Button type='submit' variant='primary'>Add New</Button>
                                </Form.Group>
                            </Form>
                        </Card.Body>
                        <Card.Footer>
                            Name: { data.name } | Email: { data.email } | Photo: { data.photo }
                        </Card.Footer>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card>
                        <Card.Body>
                            <h3>Add Product</h3>
                            <hr />
                            <Form>
                                <Form.Group classname='my-2'>
                                    <Form.Label>Product Name</Form.Label>
                                    <Form.Control value={ product.name } onChange={ e =>  dispatch(changePName({ name: e.target.value })) } />
                                </Form.Group>
                                <Form.Group classname='my-2'>
                                    <Form.Label>Price</Form.Label>
                                    <Form.Control value={ product.price } onChange={ e =>  dispatch(changePPrice({ price: e.target.value })) }  />
                                </Form.Group>
                                <Form.Group classname='my-2'>
                                    <Form.Label>Size</Form.Label>
                                    <Form.Control value={ product.size } onChange={ e =>  dispatch(changePSize({ size: e.target.value })) }  />
                                </Form.Group><br />
                                <Form.Group classname='my-2'>
                                    <Form.Label>Qantity</Form.Label>
                                    <Form.Control value={ product.qty } onChange={ e =>  dispatch(changePQty({ qty: e.target.value })) }  />
                                </Form.Group><br />
                                <Form.Group classname='my-2'>
                                    <Button type='submit' variant='primary'>Add New</Button>
                                </Form.Group>
                            </Form>
                        </Card.Body>
                        <Card.Footer>
                            Name: { product.name } | Price: { product.price } | Size: { product.size } | Quantity: { product.qty }
                        </Card.Footer>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card>
                        <Card.Body>
                            <h3>Add Customer</h3>
                            <hr />
                            <Form>
                                <Form.Group classname='my-2'>
                                    <Form.Label>Customer Name</Form.Label>
                                    <Form.Control value={ customer.name } onChange={ e =>  dispatch(changeCName({ name: e.target.value })) } />
                                </Form.Group>
                                <Form.Group classname='my-2'>
                                    <Form.Label>Address</Form.Label>
                                    <Form.Control value={ customer.address } onChange={ e =>  dispatch(changeCAddress({ address: e.target.value })) }  />
                                </Form.Group>
                                <Form.Group classname='my-2'>
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control value={ customer.email } onChange={ e =>  dispatch(changeCEmail({ email: e.target.value })) }  />
                                </Form.Group><br />
                                <Form.Group classname='my-2'>
                                    <Button type='submit' variant='primary'>Add New</Button>
                                </Form.Group>
                            </Form>
                        </Card.Body>
                        <Card.Footer>
                            Name: { customer.name } | Address: { customer.address } | Email: { customer.email }
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>
        </Container>
      </>
    
  )
};

export default Header;