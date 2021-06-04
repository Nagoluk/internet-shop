import {act, render} from '@testing-library/react'

import React from 'react';
import {UniversalProvider} from '../../index';


import { unmountComponentAtNode } from "react-dom";
import App from '../../App';

let container = null;
beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

it("renders <App/> without crashing", () => {
    act(() => {
        render(<UniversalProvider>
                <App/>
               </UniversalProvider>, container);
    });
})