"use client";

import React from 'react'
import Counter from '../ui/counter/Counter';

// Poner la productCard con el counter debajo
export default function ItemDetail({ item, onAdd, totalItems }){
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