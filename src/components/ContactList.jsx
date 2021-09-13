import React, { useContext } from 'react'
import ContactCard from './ContactCard';
import { Link } from 'react-router-dom'
import { Col, Container, Row, Button } from 'react-bootstrap';

import AppContext from '../contactAppContext';

export default function ContactList(props) {
    const { store } = useContext(AppContext);

    return (
        <Container fluid>
            <Row>
                <Col className="col-12 col-sm-8">
                    <span style={{ fontSize: "1.6rem", fontWeight: "bold" }}>Contact List</span>
                </Col>
                <Col className="col-sm-4">
                    <Link to="/add">
                        <Button variant="primary" type="submit" className="pl-4 pr-4" style={{ float: "right", fontSize: "1.1rem", fontWeight: "bold" }}>
                            Add Contact
                        </Button>
                    </Link>
                </Col>
            </Row>
            <hr></hr>
            {
                store.cards
                    .filter((card) => card.isExist)
                    .map((card) => {
                        return (<div key={card.id}>
                            <ContactCard card={card}></ContactCard>
                            <hr></hr>
                        </div>)
                    }
                    )
            }
        </Container>
    )
}
