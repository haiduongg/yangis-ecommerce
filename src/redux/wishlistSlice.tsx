import IProduct from '@/types/product'
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

const currentWishlist: string = localStorage.getItem('_wishlist') ?? '[]'

export interface wishlistSlice {
    wishlist: IProduct[]
}

const initialState: wishlistSlice = {
    wishlist: JSON.parse(currentWishlist),
}

export const wishlistSlice = createSlice({
    name: 'wishlist',
    initialState,
    reducers: {
        resetWishlist: (state) => {
            state.wishlist = []

            localStorage.setItem('_wishlist', JSON.stringify(state.wishlist))
        },
        addProduct: (state, action: PayloadAction<IProduct>) => {
            const newProduct = action.payload
            const foundProductExist = state.wishlist.findIndex(
                (product) => product._id === newProduct._id
            )
            if (foundProductExist === -1) {
                state.wishlist.push(newProduct)
            }

            localStorage.setItem('_wishlist', JSON.stringify(state.wishlist))
        },
        removeProduct: (state, action) => {
            const productId = action.payload
            const foundProductIndex = state.wishlist.findIndex(
                (product) => product._id === productId
            )
            state.wishlist.splice(foundProductIndex, 1)

            localStorage.setItem('_wishlist', JSON.stringify(state.wishlist))
        },
    },
})

// Action creators are generated for each case reducer function
export const { resetWishlist, addProduct, removeProduct } =
    wishlistSlice.actions

export default wishlistSlice.reducer
