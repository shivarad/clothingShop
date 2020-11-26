import CartActionTypes from './cart-action-types';
import {AddToCart, removeFromCart} from './cart.utils'

const INITIAL_STATE={
    hidden:true,
    cartItems:[]
}

 const CartReducer=(state=INITIAL_STATE,action)=>{
    switch (action.type)
    {
        case (CartActionTypes.CART_TOGGLE_HIDDEN):
            return{
                ...state,hidden:!state.hidden
            }
        case(CartActionTypes.ADD_ITEM):
            return{
                ...state,cartItems:AddToCart(state.cartItems,action.payload)
            }
        case(CartActionTypes.CLEAR_ITEM):
            return{
                ...state,cartItems:state.cartItems.filter(item=>item.id!==action.payload.id)
            }
        case(CartActionTypes.REMOVE_ITEM):
            return{
                ...state,cartItems:removeFromCart(state.cartItems,action.payload)
            }
            case CartActionTypes.CLEAR_CART:
                return {
                  ...state,
                  cartItems: []
                };
            default:
                return state;
    }
        
};

export default CartReducer;