import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getBasket, getTotalCount} from '../store/selectors/basket-selector';
import {PageHeader} from '../components/pageHeader';
import styled from 'styled-components';
import {changeAmountAC} from '../store/reducers/basket-reducer';
import {Button} from '../components/ui/button';
import {NavLink} from 'react-router-dom';
import {FormattedMessage} from 'react-intl';

export const BasketWrap = styled.div`
   max-width: 1200px;
   margin: 0 auto;
`

const BasketItemStyled = styled.div`
    background: ${props => props.theme.backgroundForComponents};
    margin-top: 10px;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    & input {
        width: 30px;
    }
`

export const OrderButton = styled(Button)`
    font-size: 2rem;
    display: block;
    margin: 10px auto;
    
`

const BasketItem = React.memo( ({_id, name, logo, price, amount, dispatch}) => {
    return <BasketItemStyled>
            <img src={logo} alt={name}/>
            <h3>{name}</h3>
            <div>
                <label htmlFor="amount"><FormattedMessage id={'count'}/> </label>
                <input type="number" id={'amount'} value={amount} onChange={event => {
                    dispatch(changeAmountAC(Number(event.target.value), _id))
                }}/>
            </div>
            <p>
                <FormattedMessage id={'total'}/>: {price * amount} $
            </p>
           </BasketItemStyled>
})

export const Basket = () => {
    const basketList = useSelector(getBasket)
    const totalCount = useSelector(getTotalCount)
    const dispatch = useDispatch()

    return (<>
                <PageHeader title={<FormattedMessage id={'basket'}/>}>
                    <h3><FormattedMessage id={'total'}/>: {totalCount} $</h3>
                </PageHeader>
                <BasketWrap>
                {basketList.map(item => <BasketItem key={item._id} {...item} dispatch={dispatch}/>)}

                {basketList.size === 0 && <NavLink to={'/'}><p><FormattedMessage id={'goToCatalog'}/></p></NavLink>}
                {basketList.size !== 0 && <NavLink to={'/order'}><OrderButton><FormattedMessage id={'makeOrder'}/></OrderButton></NavLink>}
                </BasketWrap>
            </>
    );
};


