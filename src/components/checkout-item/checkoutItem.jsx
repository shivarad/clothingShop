import React from 'react';
import './checkout-item.scss';

import {connect} from 'react-redux';
import {ClearItem,AddItem,RemoveItem} from '../../redux/cart/cart-actions';

const CheckoutItem=({cartItem,clearItem,addItem,removeItem})=>{
    const {name,price,quantity,imageUrl}=cartItem;
    return(
    <div className='checkout-item'>
        <div className='img-container'>
            <img src={imageUrl} alt='item'/>
        </div>
        <span className='name'>{name}</span>
        <div className='quantity'>
            <div className='qty-arrow' onClick={()=>removeItem(cartItem)}>&#10094;</div>
            <span className='qty-value'>{quantity}</span>
            <div className='qty-arrow'onClick={()=>addItem(cartItem)}>&#10095;</div>
         </div>
        <span className='price'>{price}</span>
        <div className='removeBtn' onClick={()=>clearItem(cartItem)}>&#10005;</div>  {/*utf-8 dingbates */}

    </div>
)
}

const mapDispatchToProps= dispatch  =>({
    clearItem:item =>dispatch(ClearItem(item)),
    addItem:item=>dispatch(AddItem(item)),
    removeItem:item=>dispatch(RemoveItem(item))
}
);

export default connect(null,mapDispatchToProps)(CheckoutItem);