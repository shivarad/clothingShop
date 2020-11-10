import React from 'react';
import {connect} from 'react-redux';
import {AddItem} from '../../redux/cart/cart-actions';
import {CollectionItemContainer,
    CollectionFooterContainer,
    AddButton,
    BackgroundImage,
    NameContainer,
    PriceContainer} from './CollectionItemStyles' ;

const CollectionItem = ({ item, AddItem }) => {
    const { name, price, imageUrl } = item;
  
return(
    <CollectionItemContainer>
        <BackgroundImage imageUrl={imageUrl}/>
        <CollectionFooterContainer>
            <NameContainer>{name}</NameContainer>
            <PriceContainer>${price}</PriceContainer>
        </CollectionFooterContainer>
        <AddButton inverted
        onClick={()=>AddItem(item)} 
        >Add to cart</AddButton>
    </CollectionItemContainer>
);
};

const mapDispatchToProps=dispatch=>({
 AddItem: item =>dispatch(AddItem(item))
});

export default connect(null,mapDispatchToProps)(CollectionItem);