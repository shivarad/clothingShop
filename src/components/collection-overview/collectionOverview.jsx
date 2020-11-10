import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectCollectionForPreview} from '../../redux/shop/shop-selector';
import CollectionPreview from '../../components/collectionPreview/collectionPreview';
import {CollectionsOverviewContainer} from './CollectionOverviewStyles';

const CollectionOverview =({collections})=>(
          <CollectionsOverviewContainer>
             {collections.map(({ id, ...otherCollectionProps }) => (
              <CollectionPreview key={id} {...otherCollectionProps} />
            ))} 
          </CollectionsOverviewContainer>
        );
      
        
    
const mapStateToProps=createStructuredSelector(
{  
  collections:selectCollectionForPreview
}
);

export default connect(mapStateToProps,null)(CollectionOverview);