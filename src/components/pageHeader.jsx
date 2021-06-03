import React from 'react';
import styled from 'styled-components'
import {useDispatch, useSelector} from 'react-redux';
import {setLangAC, setThemeAC} from '../store/reducers/app-reducer';
import {getLang, getTheme} from '../store/selectors/app-selector';
import {Locales} from '../localization/locales';

const Header = styled.header`
    padding: 5px 10px;
    display: flex;
    justify-content: space-between;
    background: ${props => props.theme.backgroundForComponents};
    color: ${props => props.theme.text};
`

const LeftSide = styled.div`
    display: flex;
    align-items: center;
    
    & > h1 {
        margin-left: 10px;
    }
`

const RightSide = styled(LeftSide)`
`

export const PageHeader = ({title, children}) => {
    const dispatch = useDispatch()
    const theme = useSelector(getTheme)
    const lang = useSelector(getLang)

    return (
        <Header>
            <LeftSide>
                <select name="lang" value={lang} onChange={(event => {
                    dispatch(setLangAC(event.target.value))
                })}>
                    <option value={Locales.ENGLISH}>en</option>
                    <option value={Locales.UKRAINIAN}>ua</option>
                </select>

                <select name="theme" value={theme} onChange={(event => {
                    dispatch(setThemeAC(event.target.value))
                })}>
                    <option value="dark">dark</option>
                    <option value="light">light</option>
                </select>

                <h1>
                    {title}
                </h1>
            </LeftSide>
            <RightSide>
                {children}
            </RightSide>
        </Header>
    );
};


