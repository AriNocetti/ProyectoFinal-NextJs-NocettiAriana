"use client";

import React, { useContext } from 'react'
import Counter from '../ui/counter/Counter';
import { CartContext } from '@/context/CartContext';
import { toast } from 'sonner';

// Poner la productCard con el counter debajo
export default function ItemDetail({ item }){

    const {addToCart, getTotalQuantityById} = useContext(CartContext);

    let totalItems = getTotalQuantityById(item.id);

    const onAdd = (quantity) => {
        let productoParaElCarrito = { ...item, quantity};
        addToCart(productoParaElCarrito);

        toast.success("Se ha agregado tu producto", {
            closeButton: true,
            description: "Quieres algo más?",
            position: "top-center",
        });
    };

    return (
        <div className='ml-10 mt-5'>
            <h1 className='font-semibold text-xl'>{item.title}</h1>
            <img src={item.imageUrl} alt="producto" className='max-h-[250px] w-auto my-4'/>
            <h2 className='text-gray-600 text-sm'>{item.description}</h2>
            <h2 className='font-medium text-lg mt-4'>$ {item.price}</h2>

            <Counter
                onAdd={onAdd}
                stock={item.stock}
                totalItems={totalItems}
                />
        </div>
    );
}