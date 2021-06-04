import {act, render} from '@testing-library/react'

import React from 'react';
import {UniversalProvider} from '../../index';


import { unmountComponentAtNode } from "react-dom";
import {Catalog} from '../../pages/Catalog';

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

it("renders <Catalog/> without crashing", () => {
    act(() => {
        render(<UniversalProvider>
            <Catalog/>
        </UniversalProvider>, container);
    });
})

it('<Catalog/> matches snapshot', () => {
    const component = render(<UniversalProvider><Catalog/></UniversalProvider>, container)

    expect(component.container).toMatchSnapshot()
})