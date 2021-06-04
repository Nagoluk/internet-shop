import {act, render} from '@testing-library/react'

import React from 'react';
import {UniversalProvider} from '../../index';
import {BackToCatalog} from '../../pages/BackToCatalog';

import { unmountComponentAtNode } from "react-dom";


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

it("renders <BackToCatalog/> without crashing", () => {
    act(() => {
        render(<UniversalProvider>
                    <BackToCatalog/>
                </UniversalProvider>, container);
    });
})


it('<BackToCatalog/> matches snapshot', () => {
    const component = render(<UniversalProvider><BackToCatalog/></UniversalProvider>, container)

    expect(component.container).toMatchSnapshot()
})