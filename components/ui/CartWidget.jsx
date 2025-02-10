"use client";

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { CartContext } from "@/context/CartContext";
import { Badge } from "@mui/material";
import { useContext } from "react";

export default function CartWidget() {
    const {getTotalItems} = useContext(CartContext);

    const totalItems = getTotalItems();

    return (
        <div className='mr-2'>
            <Badge badgeContent={totalItems} color="primary" max={50} showZero={true}>
                <ShoppingCartIcon />
            </Badge>
        </div>
    );
}