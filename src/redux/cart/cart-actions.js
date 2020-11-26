import CartActionTypes from './cart-action-types';

export const CartToggleHidden=()=>({
    type:CartActionTypes.CART_TOGGLE_HIDDEN
}) ;

export const AddItem=item=>({
    type:CartActionTypes.ADD_ITEM,
    payload: item
});

export const ClearItem=item=>({
    type:CartActionTypes.CLEAR_ITEM,
    payload:item
})

export const RemoveItem=item=>({
    type:CartActionTypes.REMOVE_ITEM,
    payload:item
})

export const clearCart = () => ({
    type: CartActionTypes.CLEAR_CART
  });