import styled from 'styled-components'

export const Button = styled.button`
    border: none;
    outline: none;
    padding: .5rem 1rem;
    font-size: .8rem;
    cursor: pointer;
    background: ${props => props.theme.primary};
    color: #fff;
`