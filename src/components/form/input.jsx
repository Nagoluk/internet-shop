import React from 'react';
import styled from 'styled-components'

const Input = styled.input`
    padding: 5px;
    background: ${props => props.theme.background};
    color: ${props => props.theme.text};
    margin-top: 5px;
`

const Error = styled.div`
    color: red;
    font-size: .75rem;
    height: 18px;
    `

export const InputField = ({input, meta, ...props}) => {
    let hasError = meta.error && meta.touched;

    return (<div>
                <div>
                    <Input {...props} {...input}/>
                </div>
               <Error> {hasError && meta.error}</Error>
             </div>)
}
