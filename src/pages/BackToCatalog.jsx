import React from 'react';
import {PageHeader} from '../components/pageHeader';
import styled from 'styled-components';
import {OrderButton} from './Basket';
import {useHistory} from 'react-router-dom'
import {FormattedMessage} from 'react-intl';


const BigText = styled.h1`
    font-size: 10rem;
    text-align: center;
`
const Back = styled(OrderButton)`
    margin-top: 100px;
`

export const BackToCatalog = () => {
    const history = useHistory()
    return (<>
                <PageHeader title={<FormattedMessage id={'thankYou'}/>}/>
                <BigText><FormattedMessage id={'thankYou'}/> !</BigText>
                <Back onClick={() => history.push('/')}><FormattedMessage id={'goToCatalog'}/></Back>
            </>
    );
};


