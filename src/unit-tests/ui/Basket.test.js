import {act, render} from '@testing-library/react'

import React from 'react';
import {UniversalProvider} from '../../index';


import { unmountComponentAtNode } from "react-dom";
import {Basket} from '../../pages/Basket';


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

it("renders <Basket/> without crashing", () => {
    act(() => {
        render(<UniversalProvider>
            <Basket/>
        </UniversalProvider>, container);
    });
})

it('<Basket/> matches snapshot', () => {
    const component = render(<UniversalProvider><Basket/></UniversalProvider>, container)

    expect(component.container).toMatchSnapshot()
})