import {createContext} from 'react'


export type CartProduct = {
    title: string,
    quantity: number,
    price: string,
    size: string
}

export type shoppingContextType = {
    dispatch: any;
    cart: CartProduct[]
}

export const shoppingContext = createContext<[cart: CartProduct[], dispatch: any]>([[], null])
