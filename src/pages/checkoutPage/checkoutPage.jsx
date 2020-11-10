import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import CheckoutItem from '../../components/checkout-item/checkoutItem';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button'

import {selectCartItems,selectTotal} from '../../redux/cart/cart-selectors';

import {CheckoutPageContainer,HeaderContainer,HeaderBlockContainer,TotalContainer,TextWarningContainer} from './CheckoutPageStyles';

const CheckoutPage =({cartItems,total})=>(
    <CheckoutPageContainer>
        <HeaderContainer>
            <HeaderBlockContainer>
                <span>Product</span>
            </HeaderBlockContainer>
            <HeaderBlockContainer>
                <span>Description</span>
            </HeaderBlockContainer>
            <HeaderBlockContainer>
                <span>Quantity</span>
            </HeaderBlockContainer>
            <HeaderBlockContainer>
                <span>Price</span>
            </HeaderBlockContainer>
            <HeaderBlockContainer>
                <span>Remove</span>
            </HeaderBlockContainer>
            
        </HeaderContainer>
            {
                cartItems.map(item=> ( <CheckoutItem key={item.id} cartItem={item}/>))
            }
        <TotalContainer>TOTAL: ${total}</TotalContainer>
        <TextWarningContainer>
      *Please use the following test credit card for payments*
      <br />
      4242 4242 4242 4242 - Exp: 01/21 - CVV: 123
    </TextWarningContainer>
    <StripeCheckoutButton price={total} />
    </CheckoutPageContainer>
)

const mapStateToProps=createStructuredSelector({
    cartItems:selectCartItems,
    total:selectTotal
}
)

export default connect(mapStateToProps)(CheckoutPage);