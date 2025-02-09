"use client";

import React, {useContext} from "react";
import CartRep from "@/components/CartRep/CartRep";
import { CartContext } from "@/context/CartContext";

export default function Cart (){

    const {cart, clearCart, deleteProductById, getTotalAmount} =
        useContext(CartContext);

    let total = getTotalAmount();

    return(
        <CartRep
            cart={cart}
            clearCart={clearCart}
            deleteProductById={deleteProductById}
            total={total}
        />
    )
}
