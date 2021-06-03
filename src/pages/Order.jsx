import React, {useEffect} from 'react';
import {PageHeader} from '../components/pageHeader';
import {Button} from '../components/ui/button';
import styled from 'styled-components';
import {BasketWrap} from './Basket';
import {reduxForm, Field} from 'redux-form';
import {required, validateEmail} from '../utils/redux-form-validators';
import {InputField} from '../components/form/input';
import {useDispatch, useSelector} from 'react-redux';
import {sendOrderThunk, setRedirectToFinish} from '../store/reducers/basket-reducer';
import {getBasketLength, getRedirectToFinish} from '../store/selectors/basket-selector';
import {NavLink, useHistory} from 'react-router-dom';
import {FormattedMessage} from 'react-intl';

const FormWrap = styled(BasketWrap)``

const FormStyled = styled.form`
    background: ${props => props.theme.backgroundForComponents};
    padding: 20px 10px;
    margin-top: 10px;
`

const Label = styled.label`
    font-size: 0.9rem;
    margin-right: 5px;
    
    & .required {
        color: red;
    }
`

const FormItem = styled.div`
    margin-bottom: 5px;
    max-width: 270px;
    ${props => (props.layout === 'horizontal') ? 'display: flex; justify-content: space-between; align-items: center': ''}
`

const FormTitle = styled.h3`
    margin-bottom: 10px;
`


const Form = ({handleSubmit, submitting, error}) => {
    return (<FormStyled onSubmit={handleSubmit}>
                <FormTitle><FormattedMessage id={'userInfo'}/></FormTitle>
                <FormItem>
                    <Label><FormattedMessage id={'name'}/> <span className={'required'}>*</span></Label>
                    <Field type={'text'} component={InputField} validate={required} name={'name'}/>
                </FormItem>

                <FormItem>
                    <Label>Email <span className={'required'}>*</span></Label>
                    <Field type={'text'}
                           component={InputField}
                           validate={[required, validateEmail]} name={'email'}/>
                </FormItem>

                <FormTitle><FormattedMessage id={'deliverAddress'}/></FormTitle>
                <FormItem layout={'horizontal'}>
                    <Label><FormattedMessage id={'city'}/> <span className={'required'}>*</span></Label>
                    <Field type={'text'} component={InputField} validate={required} name={'city'}/>
                </FormItem>

                <FormItem layout={'horizontal'}>
                    <Label><FormattedMessage id={'postalcode'}/>: <span className={'required'}>*</span></Label>
                    <Field type={'text'} component={InputField} validate={required} name={'code'}/>
                </FormItem>


                <div>
                    <Button type="submit" disabled={submitting}><FormattedMessage id={'submit'}/></Button>
                </div>
    </FormStyled>)
}

let ReduxOrderForm = reduxForm({form: 'order'})(Form)

export const Order = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const basketLength = useSelector(getBasketLength)
    const redirectToFinish = useSelector(getRedirectToFinish)

    useEffect(() => {
        if(redirectToFinish) history.push('/finish')
        return () => {
            dispatch(setRedirectToFinish(false))
        }
    }, [redirectToFinish, dispatch, history])

    const handleSubmit = (data) => {
        dispatch(sendOrderThunk(data))
    }

    return (<>
                <PageHeader title={'Order'}/>
                {!!basketLength && <FormWrap>
                    <ReduxOrderForm onSubmit={handleSubmit}/>
                </FormWrap>}

            {(!basketLength) && <NavLink to={'/'}>Basket is empty go to catalog</NavLink>}
            </>
    );
};


