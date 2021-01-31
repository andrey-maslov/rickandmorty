import React from 'react'
import ReactDOM from 'react-dom'
import { create } from "react-test-renderer";
import index from "../../store";
import { Provider } from "react-redux";
import { ListItem } from "./ListItem";
import { BrowserRouter } from "react-router-dom";


const character = {
    created: "2017-11-04T19:22:43.665Z",
    name: "Beth Smith",
    gender: "Female",
    id: 4,
    episode: [ "https://rickandmortyapi.com/api/episode/6", "https://rickandmortyapi.com/api/episode/7" ],
    image: "https://rickandmortyapi.com/api/character/avatar/4.jpeg",
    location: { name: "Earth (Replacement Dimension)", url: "https://rickandmortyapi.com/api/location/20" },
    origin: { name: "Earth (Replacement Dimension)", url: "https://rickandmortyapi.com/api/location/20" },
    species: "Human",
    status: "Alive",
    type: "",
    url: "https://rickandmortyapi.com/api/character/4"
}


const component = create((
    <BrowserRouter>
        <ListItem character={ character } />
    </BrowserRouter>
));
const instance = component.getInstance();


describe("ListItem component", () => {

    test('renders without crashing', () => {
        const div = document.createElement('div')
        ReactDOM.render((
            <Provider store={ index }>
                <BrowserRouter>
                    <ListItem character={ character } />
                </BrowserRouter>
            </Provider>
        ), div)
        ReactDOM.unmountComponentAtNode(div)
    });

    test("Component renders right name", () => {
        expect(instance.props.children.props.character.name).toBe("Beth Smith");
    });

});