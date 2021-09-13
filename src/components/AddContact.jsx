import React, { useContext } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

import AppContext from '../contactAppContext';

export default function AddContact(props) {
    const { dispatch, store } = useContext(AppContext);
    // console.log("store nè: " + store.cards);
    // console.log("ok add");

    const { register, handleSubmit, formState: { errors }, setValue } = useForm();

    const frmLogin_onSubmit = (data) => {
        // alert(data.name +"\n"+data.email);
        dispatch({
            type: 'add_card',
            payload: {
                new_card: {
                    name: data.name,
                    email: data.email,
                    image: "https://img.hoidap247.com/picture/user/20210526/tini_1622010406762.jpg"
                },
            }
        });
        setValue("name", "");
        setValue("email", "");
        // try {
        //     const res = await axiosInstance.post('auth', data);
        //     if (res.data.authenticated) {
        //         // console.log(res.data.accessToken);
        //         localStorage.todoApp_accessToken = res.data.accessToken;

        //         const obj = parseJwt(res.data.accessToken);
        //         localStorage.todoApp_userId = obj.userId;

        //         history.push('/');
        //     } else {
        //         alert('Invalid login');
        //     }
        // } catch (err) {
        //     if (err.response) {
        //         console.log(err.response.data);
        //     } else if (err.requerst) {
        //         console.log(err.requerst);
        //     } else {
        //         console.log('Error', err.message);
        //     }
        // }
    }

    return (
        <div className="col-sm-10 col-sm-12 col-md-10 col-lg-8 col-xl-5">
            {/* <Container fluid>
                <Row>
                    <Col xl={12}>
                        <Link to="/">
                            <Button variant="secondary" type="submit" className="pl-4 pr-4 ml-0" style={{ float: "left", fontSize: "1rem", fontWeight: "bold" }}>
                                Back To Home
                            </Button>
                        </Link>
                    </Col>
                </Row>
            </Container> */}
            <Link to="/">
                <Button variant="secondary" type="submit" className="pl-4 pr-4 ml-1" style={{ float: "left", fontSize: "1rem", fontWeight: "bold" }}>
                    Back To Home
                </Button>
            </Link>
            <br></br><br></br>
            <h3 className="mt-2 pl-2">Add Contact</h3>
            <Form className="mt-3 pl-2 mb-3" onSubmit={handleSubmit(frmLogin_onSubmit)}>
                <Form.Group controlId="formBasicName">
                    <Form.Label className="font-weight-bold">Name:</Form.Label>
                    <Form.Control type="text" placeholder="Name" defaultValue="" autoFocus {...register('name', { required: true })} />
                    <Form.Text className="text-muted">
                        {errors.name && <span style={{ color: "red" }}>Chưa điền name</span>}
                        {/* We'll never share your email with anyone else. */}
                    </Form.Text>
                    {/* <input type="text" placeholder="Name" autoFocus/> */}
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label className="font-weight-bold">Email:</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" defaultValue="" {...register('email', { required: true })} />
                    {/* <input type="email" placeholder="Email"/> */}
                    <Form.Text className="text-muted">
                        {errors.email && <span style={{ color: "red" }}>Chưa điền email</span>}
                        {/* We'll never share your email with anyone else. */}
                    </Form.Text>
                </Form.Group>
                <Button variant="primary" type="submit" className="pl-4 pr-4">
                    Add
                </Button>
            </Form>
        </div>
    )
}
