import React from 'react';

import {connect} from 'react-redux';
import {ClearItem,AddItem,RemoveItem} from '../../redux/cart/cart-actions';

import {CheckOutItemContainer,ImgContainer,TextContainer,QuantityContainer,RemoveBtn} from './CheckoutItemStyles';

const CheckoutItem=({cartItem,clearItem,addItem,removeItem})=>{
    const {name,price,quantity,imageUrl}=cartItem;
    return(
    <CheckOutItemContainer>
        <ImgContainer>
            <img src={imageUrl} alt='item'/>
        </ImgContainer>
        <TextContainer>{name}</TextContainer>
        <QuantityContainer>
            <div  onClick={()=>removeItem(cartItem)}>&#10094;</div>
            <span >{quantity}</span>
            <div onClick={()=>addItem(cartItem)}>&#10095;</div>
         </QuantityContainer>
        <TextContainer>{price}</TextContainer>
        <RemoveBtn onClick={()=>clearItem(cartItem)}>&#10005;</RemoveBtn>  {/*utf-8 dingbats */}

    </CheckOutItemContainer>
)
}

const mapDispatchToProps= dispatch  =>({
    clearItem:item =>dispatch(ClearItem(item)),
    addItem:item=>dispatch(AddItem(item)),
    removeItem:item=>dispatch(RemoveItem(item))
}
);

export default connect(null,mapDispatchToProps)(CheckoutItem);