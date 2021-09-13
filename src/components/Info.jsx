import React, { useContext } from 'react';
import { Card, Button, Container } from 'react-bootstrap';
import AppContext from '../contactAppContext';
import { useParams } from 'react-router-dom';
import { Link, useHistory } from 'react-router-dom';

export default function Info(props) {
    console.log("info nè...");
    let { store } = useContext(AppContext);
    let { id } = useParams();
    // console.log(id);
    // console.log("\n");
    const history = useHistory();
    const res = store.cards.filter(function (c) {
        const c_id = c.id + "";
        return (c_id === id);
    })
    //console.log(store.cards);
    // let res = (async function () {
    //     return await store.cards.filter(function (c) {
    //         const c_id = c.id + "";
    //         return (c_id === id);
    //     })
    // })();

    

    // let res = [0,1,2];
    // console.log(res);

    //const number = res.length;
    //console.log(res.length);

    if (res.length === 0) {
        history.push("/");
        // alert("0 nè");
    }

    // //console.log(cards[id]);
    // let number = parseInt(id);
    // console.log(number);
    // console.log(res.length);
    // console.log(res);
    // console.log("\n");

    const name = res[0].name;
    const email = res[0].email;
    const image = res[0].image;
    // const name = "abx";
    // const email = "mnpq";
    // const image = "";

    return (
        // <div>Info của {id} đây nè</div>
        <Container fluid>
            <Link to="/">
                <Button variant="secondary" type="submit" className="pl-4 pr-4 ml-1" style={{ float: "left", fontSize: "1rem", fontWeight: "bold" }}>
                    Back To Home
                </Button>
            </Link>
            <br></br><br></br>
            <div style={{ margin: 'auto' }}>
                <Card style={{ width: '18rem' }}>
                    {/* <Card.Img variant="top" src={`${cards[id].image}`} /> */}
                    <Card.Img variant="top" src={image} />
                    <Card.Body>
                        {/* <Card.Title>{cards[id].name}</Card.Title>
                    <Card.Text>
                        {cards[id].email}
                    </Card.Text> */}
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            {email}
                        </Card.Text>
                        {/* <Button variant="primary">Go somewhere</Button> */}
                    </Card.Body>
                </Card>
            </div>
        </Container>
    )
    // return (
    //     <div>Ahihi {number} </div>
    // )
}
