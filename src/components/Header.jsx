import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

export default function Header(props) {

    return (
        <Container fluid style={{ paddingLeft: "0px", paddingRight: "0px" }}>
            <div>
                <h2 className="text-light text-center bg-dark p-1">Contact Manager</h2>
            </div>
        </Container>

    )
}
