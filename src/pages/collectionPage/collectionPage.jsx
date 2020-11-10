import React  from 'react';
import {connect} from 'react-redux';
import {selectCollection} from '../../redux/shop/shop-selector';
import CollectionItem from '../../components/collection-item/CollectionItem'
import {CollectionPaggeContainer,TitleContainer,ItemsContainer} from './CollectionPAgeStyles';

const CollectionPage=({collection})=>{
    const {title,items}=collection;
    return(
    <CollectionPaggeContainer>
        <TitleContainer>{title}</TitleContainer>
        <ItemsContainer>
            {
                items.map(item=><CollectionItem key={item.id}  item={item}/>)
            }
        </ItemsContainer>
    </CollectionPaggeContainer>
    )
};


const mapStateToProps=(state,ownProps)=>({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})
export default connect(mapStateToProps,null)(CollectionPage);