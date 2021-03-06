import React from 'react';
import {ReactComponent as ShoppingCart} from '../../assets/shopping-bag.svg';
import './cart-icon.scss';
import {connect} from 'react-redux';
import {CartToggleHidden} from '../../redux/cart/cart-actions';
import {selectCartItemsCount} from './../../redux/cart/cart-selectors';
import {createStructuredSelector} from 'reselect';

const CartIcon=({CartToggleHidden,ItemCount})=>(
    <div className='cart-icon' onClick={CartToggleHidden} >
        <ShoppingCart className='shopping-icon'/>
        <span className='item-count'>{ItemCount}</span>
    </div>
)
const mapStateToProps=createStructuredSelector({
    ItemCount:selectCartItemsCount
})

const mapDispatchToProps=(dispatch)=>({
    CartToggleHidden:()=>dispatch(CartToggleHidden())
});

export default connect(mapStateToProps,mapDispatchToProps)(CartIcon);
