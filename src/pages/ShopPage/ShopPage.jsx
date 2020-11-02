import React from 'react';
import {Route} from 'react-router-dom'
import CollectionOverview from '../../components/collection-overview/collectionOverview';
import CollectionPage from '../collectionPage/collectionPage';

const ShopPage =({match})=>(   
          <div className='shop-page'>
            <Route exact path={`${match.path}`} component={CollectionOverview}/>
            <Route       path={`${match.path}/:collectionId`} component={CollectionPage}/> 
          </div>
        );
      /*since shopPage is passed as a route in app.js all route propperties are passed trough */
        
    

export default ShopPage;