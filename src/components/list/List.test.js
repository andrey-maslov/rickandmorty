import React from 'react'
import ReactDOM from 'react-dom'
import { List } from "./List";
import index from "../../store";
import { Provider } from "react-redux";

describe("List component", () => {

    test('renders without crashing', () => {
        const div = document.createElement('div')
        ReactDOM.render(<Provider store={ index }><List/></Provider>, div)
        ReactDOM.unmountComponentAtNode(div)
    });

});
