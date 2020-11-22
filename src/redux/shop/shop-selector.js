import {createSelector} from 'reselect';

// const COLLECTION_ID_MAP={
//     hats:1,
//     sneakers:2,
//     jackets:3,
//     womens:4,
//     mens:5
// }no need after data normalization

const selectShop=state=>state.shop;

export const selectCollections=createSelector(
    [selectShop],
    shop=>shop.collections
)
// pass collections as array not obj
export const selectCollectionForPreview=createSelector(  
   [selectCollections],
   collections=>collections?Object.keys(collections).map(key=>collections[key]):[]
)

export const selectCollection=collectionId=>createSelector(
    [selectCollections],
    // collections=>collections.find(collection=>collection.id===COLLECTION_ID_MAP[collectionId]) -->datanormalization: convert arrays to objects (shopdata)
    collections=>(collections?collections[collectionId]:null)

)

export const selectIsCollectionFetching = createSelector(
    [selectShop],
    shop => shop.isFetching
  );
  
  export const selectIsCollectionsLoaded = createSelector(
    [selectShop],
    shop => !!shop.collections
  );