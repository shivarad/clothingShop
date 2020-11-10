import React from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import CartItem from '../cart-item/cart-item';
import {selectCartItems} from '../../redux/cart/cart-selectors';
import {CartToggleHidden} from '../../redux/cart/cart-actions'
import {createStructuredSelector} from 'reselect';
import {CartdropdownContainer,CartItemsContainer,EmptyMessageContainer,CheckoutBtn} from './cartDropDownStyles';

const CartDropdown = ({ cartItems ,history,dispatch}) => (
  <CartdropdownContainer>
    <CartItemsContainer>
      {
      cartItems.length?
      cartItems.map(cartItem => (
        <CartItem key={cartItem.id} item={cartItem} />
      )):
      <EmptyMessageContainer>Your cart is empty!</EmptyMessageContainer>
    }
    </CartItemsContainer>
    <CheckoutBtn onClick={()=>{
                          history.push('/checkout');
                          dispatch(CartToggleHidden());
                          }} >
                            GO TO CHECKOUT</CheckoutBtn>
  </CartdropdownContainer>
);

const mapStateToProps = createStructuredSelector({
  
    cartItems:selectCartItems
});
export default withRouter(connect(mapStateToProps)(CartDropdown));
