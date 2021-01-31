import React from 'react'
import ReactDOM from 'react-dom'
import index from "../../store";
import { Provider } from "react-redux";
import { Article } from "./Article";
import { createMemoryHistory } from 'history';
import { Router } from "react-router-dom";


const character = {
    "id": 69,
    "name": "Commander Rick",
    "status": "Dead",
    "species": "Human",
    "type": "",
    "gender": "Male",
    "origin": {
        "name": "unknown",
        "url": ""
    },
    "location": {
        "name": "Citadel of Ricks",
        "url": "https://rickandmortyapi.com/api/location/3"
    },
    "image": "https://rickandmortyapi.com/api/character/avatar/69.jpeg",
    "episode": [
        "https://rickandmortyapi.com/api/episode/22"
    ],
    "url": "https://rickandmortyapi.com/api/character/69",
    "created": "2017-11-30T11:28:06.461Z"
}


describe("Article component", () => {

    test('renders without crashing', () => {
        const history = createMemoryHistory();
        const route = '/69';
        history.push(route);
        const div = document.createElement('div')
        ReactDOM.render((
            <Router history={history}>
                <Provider store={ index }>
                    <Article />
                </Provider>
            </Router>
        ), div)
        ReactDOM.unmountComponentAtNode(div)
    });
});
