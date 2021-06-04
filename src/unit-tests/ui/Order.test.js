import {act, render} from '@testing-library/react'

import React from 'react';
import {UniversalProvider} from '../../index';


import { unmountComponentAtNode } from "react-dom";
import {Order} from '../../pages/Order';


let container = null;
beforeEach(() => {
    // подготавливаем DOM-элемент, куда будем рендерить
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    // подчищаем после завершения
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

it("renders <Order/> without crashing", () => {
    act(() => {
        render(<UniversalProvider>
            <Order/>
        </UniversalProvider>, container);
    });
})

it('<Order/> matches snapshot', () => {
    const component = render(<UniversalProvider><Order/></UniversalProvider>, container)

    expect(component.container).toMatchSnapshot()
})