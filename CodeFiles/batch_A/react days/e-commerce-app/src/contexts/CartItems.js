import { createContext } from "react";

const CartItems = createContext();

export function CartItemsProvider(){

    return <CartItems.Provider></CartItems.Provider>
}

export default CartItems;