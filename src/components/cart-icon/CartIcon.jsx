import React from 'react';
import {connect} from 'react-redux';
import {CartToggleHidden} from '../../redux/cart/cart-actions';
import {selectCartItemsCount} from './../../redux/cart/cart-selectors';
import {createStructuredSelector} from 'reselect';
import {CartIconContainer,ShoppingCartIcon,ItemCountContainer } from './CartIconStyles';

const CartIcon=({CartToggleHidden,ItemCount})=>(
    <CartIconContainer onClick={CartToggleHidden} >
        <ShoppingCartIcon />
        <ItemCountContainer >{ItemCount}</ItemCountContainer>
    </CartIconContainer>
)
const mapStateToProps=createStructuredSelector({
    ItemCount:selectCartItemsCount
})

const mapDispatchToProps=(dispatch)=>({
    CartToggleHidden:()=>dispatch(CartToggleHidden())
});

export default connect(mapStateToProps,mapDispatchToProps)(CartIcon);
