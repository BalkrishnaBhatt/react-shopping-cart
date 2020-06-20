
import { ADD_TO_CART,REMOVE_ITEM,SUB_QUANTITY,ADD_QUANTITY,ADD_SHIPPING} from './action-types/cart-actions'

//add cart action
export const addToCart= (title)=>{
    return{
        type: ADD_TO_CART,
        title
    }
}
//remove item action
export const removeItem=(title)=>{
    return{
        type: REMOVE_ITEM,
        title
    }
}
//subtract qt action
export const subtractQuantity=(title)=>{
    return{
        type: SUB_QUANTITY,
        title
    }
}
//add qt action
export const addQuantity=(title)=>{
    return{
        type: ADD_QUANTITY,
        title
    }
}
