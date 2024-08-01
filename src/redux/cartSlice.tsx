import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import IProduct, { IProductWithQuantity } from '@/types/product'

const currentCart: string = localStorage.getItem('_cart') ?? '[]'
const currentTotal: string = localStorage.getItem('_cart-total') ?? '0'

export interface cartSlice {
    cart: IProductWithQuantity[]
    total: number
}

const initialState: cartSlice = {
    cart: JSON.parse(currentCart),
    total: +JSON.parse(currentTotal),
}

const calcTotal: (cart: IProductWithQuantity[]) => number = function (cart) {
    let total = 0
    cart.forEach((product) => (total += product.price * product.quantity))
    return total
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addCart: (state, action: PayloadAction<IProduct>) => {
            const newProduct = action.payload
            const foundProductExist = state.cart.findIndex(
                (product) => product._id === newProduct._id
            )
            if (foundProductExist === -1) {
                const newProductWithQuantity = { ...newProduct, quantity: 1 }
                state.cart.push(newProductWithQuantity)
            } else {
                state.cart[foundProductExist].quantity++
            }

            state.total = calcTotal(state.cart)

            localStorage.setItem('_cart', JSON.stringify(state.cart))
            localStorage.setItem('_cart-total', JSON.stringify(state.total))
        },
        deleteCart: (state, action) => {
            const productId = action.payload
            const foundProductIndex = state.cart.findIndex(
                (product) => product._id === productId
            )

            if (foundProductIndex !== -1) {
                state.total =
                    state.total -
                    state.cart[foundProductIndex].price *
                        state.cart[foundProductIndex].quantity
                state.cart.splice(foundProductIndex, 1)
            }

            localStorage.setItem('_cart', JSON.stringify(state.cart))
            localStorage.setItem('_cart-total', JSON.stringify(state.total))
        },
        incrementQuantity: (state, action) => {
            const productId = action.payload
            const foundProductIndex = state.cart.findIndex(
                (product) => product._id === productId
            )
            if (foundProductIndex !== -1) {
                state.total = state.total + state.cart[foundProductIndex].price
                state.cart[foundProductIndex].quantity++
            }

            localStorage.setItem('_cart', JSON.stringify(state.cart))
            localStorage.setItem('_cart-total', JSON.stringify(state.total))
        },
        decrementQuantity: (state, action) => {
            const productId = action.payload
            const foundProductIndex = state.cart.findIndex(
                (product) => product._id === productId
            )
            if (foundProductIndex !== -1) {
                if (state.cart[foundProductIndex].quantity > 1) {
                    state.total =
                        state.total - state.cart[foundProductIndex].price
                    state.cart[foundProductIndex].quantity--
                } else {
                    state.total =
                        state.total -
                        state.cart[foundProductIndex].price *
                            state.cart[foundProductIndex].quantity
                    state.cart.splice(foundProductIndex, 1)
                }
            }

            localStorage.setItem('_cart', JSON.stringify(state.cart))
            localStorage.setItem('_cart-total', JSON.stringify(state.total))
        },
    },
})

// Action creators are generated for each case reducer function
export const { addCart, deleteCart, incrementQuantity, decrementQuantity } =
    cartSlice.actions

export default cartSlice.reducer
