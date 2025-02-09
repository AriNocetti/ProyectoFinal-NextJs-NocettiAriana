"use client";

import ItemDetail from "@/components/ItemDetail/ItemDetail";
import { db } from "@/configFirebase";
import { CartContext } from "@/context/CartContext";
import { collection, doc, getDoc } from "firebase/firestore";
import { useParams } from "next/navigation";
import React, { useContext, useEffect, useState } from "react";
import { toast } from "sonner";


export default function DetailProduct(){
    const [item, setItem] = useState({});
    const {addToCart, getTotalQuantityById} = useContext(CartContext);

    const {id} = useParams();

    let totalItems = getTotalQuantityById(id);

    useEffect(() => {
        let productsCollection = collection(db, "productosRopa");
        let refDoc = doc(productsCollection, id);
        getDoc(refDoc).then((res) => {
            setItem({ ...res.data(), id: res.id});
        });
    }, [id]);

    const onAdd = (quantity) => {
        let productoParaElCarrito = { ...item, quantity};
        addToCart(productoParaElCarrito);

        toast.success("Se ha agregado tu producto", {
            closeButton: true,
            description: "Quieres algo más?",
            position: "top-center",
        });
    };

    return <ItemDetail item={item} onAdd={onAdd} totalItems={totalItems} />;
}