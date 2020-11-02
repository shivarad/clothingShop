import React from 'react';
import {connect} from 'react-redux';
import './collectionItem.scss';
import CustomBtn from '../custom-button/customButton';
import {AddItem} from '../../redux/cart/cart-actions';

const CollectionItem = ({ item, AddItem }) => {
    const { name, price, imageUrl } = item;
  
return(
    <div className='collection-item'>
        <div className='bgImg' style={{backgroundImage:`url(${imageUrl})`}}/>
        <div className='collection-info'>
            <span className='collection-name'>{name}</span>
            <span className='collection-price'>${price}</span>
        </div>
        <CustomBtn inverted
        onClick={()=>AddItem(item)}
        >Add to cart</CustomBtn>
    </div>
);
};

const mapDispatchToProps=dispatch=>({
 AddItem: item =>dispatch(AddItem(item))
});

export default connect(null,mapDispatchToProps)(CollectionItem);