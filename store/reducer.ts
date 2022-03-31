import {
    AppState,
    AppAction,
    AppActionType,
    IncrementProductAmountAction,
    SetProductAmountAction,
    DecrementProductAmountAction,
    RemoveProductAction,
    ClearCartAction,
    AddProductAction
} from './types'
import { products } from './products'

export const initialState: AppState = {
    cart: []
}

export const reducer = (state: AppState, { type, payload }: AppAction): AppState => {
    switch (type) {
        case AppActionType.INCREMENT: {
            return {
                ...state,
                cart: state.cart.map((c) => {
                    return c.product.id === payload.id ? { ...c, amount: c.amount + 1 } : c
                })
            }
        }
        case AppActionType.DECREMENT: {
            return {
                ...state,
                cart: state.cart.map((c) => {
                    return c.product.id === payload.id ? { ...c, amount: c.amount - 1 > 0 ? c.amount - 1 : 0 } : c
                })
            }
        }
        case AppActionType.SET: {
            return {
                ...state,
                cart: state.cart.map((c) => {
                    return c.product.id === payload.id
                        ? { ...c, amount: (payload as SetProductAmountAction['payload']).amount }
                        : c
                })
            }
        }

        case AppActionType.ADD: {
            return {
                ...state,
                cart: state.cart
                    .filter((c) => c.product.id !== payload.id)
                    .concat({ product: (payload as ClearCartAction['payload']).product, amount: 1 })
            }
        }
        case AppActionType.REMOVE: {
            return {
                ...state,
                cart: state.cart.filter((c) => c.product.id !== payload.id)
            }
        }
        case AppActionType.CLEAR: {
            return {
                ...state,
                cart: []
            }
        }

        default:
            return state
    }
}

export const incrementProductAmount = (id: string): IncrementProductAmountAction => {
    return {
        type: AppActionType.INCREMENT,
        payload: {
            id
        }
    }
}
export const decrementProductAmount = (id: string): DecrementProductAmountAction => {
    return {
        type: AppActionType.DECREMENT,
        payload: {
            id
        }
    }
}
export const setProductAmount = (id: string, amount: number): SetProductAmountAction => {
    return {
        type: AppActionType.SET,
        payload: {
            id,
            amount
        }
    }
}

export const removeProductAction = (id: string): RemoveProductAction => {
    return {
        type: AppActionType.REMOVE,
        payload: {
            id
        }
    }
}

export const addProductAction = (id: string): AddProductAction => {
    const product = products.get(id)
    if (!product) throw new Error('No product with that id')
    return {
        type: AppActionType.ADD,
        payload: {
            id,
            product
        }
    }
}

export const clearCartAction = (): ClearCartAction => {
    return {
        type: AppActionType.CLEAR
    }
}
