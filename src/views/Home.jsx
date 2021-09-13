import React, { useReducer, useEffect } from 'react';
import Header from '../components/Header';
import AddContact from '../components/AddContact';
import ContactList from '../components/ContactList';
import { Container, Row } from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';

import reducer from "../contactAppReducer";
//import { axiosInstance } from "../utils/contactAppUtil";
import AppContext from "../contactAppContext.js";
import Info from '../components/Info';

export default function Home(props) {
    const initialAppState = {
        cards: [],
    }
    const [store, dispatch] = useReducer(reducer, initialAppState);

    useEffect(function () {

        function loadTasks() {
            const res = {
                data: [
                    {
                        id: 0,
                        isExist: true,
                        name: "Nguyễn Minh Thông",
                        email: "thong@gmail.com",
                        image: "https://media.cdnandroid.com/5b/c8/e4/03/72/imagen-goku-wallpaper-dragon-ball-art-0thumb.jpeg"
                    },
                    {
                        id: 1,
                        isExist: true,
                        name: "Nguyễn Minh Thanh",
                        email: "thanh@gmail.com",
                        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGCa_GyoWRJUl_zZm5ZeeFqY5dfG_WgP_SVA&usqp=CAU"
                    },
                    {
                        id: 2,
                        isExist: true,
                        name: "Phạm Thị Trúc Lệ",
                        email: "le@gmail.com",
                        image: "https://avatarfiles.alphacoders.com/623/thumb-62373.jpg"
                    },
                    {
                        id: 3,
                        isExist: true,
                        name: "Jiren",
                        email: "jiren@gmail.com",
                        image: "data:image/jpeg;base64,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"
                    },
                ]
            }

            dispatch({
                type: 'init',
                payload: {
                    cards: res.data,
                }
            });

            // const LOCAL_STORAGE_KEY = "12345";
            // localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(abcde));
            // localStorage.getItem()
        }

        loadTasks();

    }, []);

    return (
        <Router>
            <Container fluid>
                <Row>
                    <Header>
                    </Header>
                </Row>
                <Switch>
                    <AppContext.Provider value={{ store, dispatch }}>
                        <Row>
                            <Route exact path="/add" render={function () { return <AddContact /> }}></Route>
                        </Row>
                        <Row>
                            <Route exact path="/" render={function () { return <ContactList /> }}></Route>
                        </Row>
                        <Row>
                            {/* <Route exact path="/info/:id" 
                              render={function () { 
                                  return <Info/>
                               }}>
                            </Route> */}
                            {/* <Route path="/info/:id" component={Info} /> */}
                            <Route exact path="/info/:id">
                                <Info></Info>
                            </Route>
                        </Row>
                    </AppContext.Provider>
                </Switch>
            </Container>
        </Router>
    )
}
