
import { ADD_TO_CART, REMOVE_ITEM, SUB_QUANTITY, ADD_QUANTITY, REMOVE_COMPARE_PRODUCT, ADD_COMPARE_PRODUCT } from './action-types/cart-actions'

//add cart action
export const addToCart = (title) => {
    return {
        type: ADD_TO_CART,
        title
    }
}
//remove item action
export const removeItem = (title) => {
    return {
        type: REMOVE_ITEM,
        title
    }
}
//subtract qt action
export const subtractQuantity = (title) => {
    return {
        type: SUB_QUANTITY,
        title
    }
}
//add qt action
export const addQuantity = (title) => {
    return {
        type: ADD_QUANTITY,
        title
    }
}
//add to compare product 
export const addToCompareProduct = (title) => {
    return {
        type: ADD_COMPARE_PRODUCT,
        title
    }
}

// remove from compare product
export const removeCompareProduct = (title) => {
    return {
        type: REMOVE_COMPARE_PRODUCT,
        title
    }
}


