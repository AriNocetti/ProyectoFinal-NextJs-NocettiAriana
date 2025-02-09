'use client';

import ProductsFilter from "@/components/productsFilter/ProductsFilter";
import { useEffect, useState } from "react";
import {addDoc, collection, getDocs, query, where} from "firebase/firestore";
import * as React from 'react';
import { db } from "@/configFirebase";
import { useRouter } from 'next/navigation';

function valuetext(value) {
  return `$${value}`;
}

export default function Productos({params}) {


  // const response = await fetch(`http://localhost:3000/api/productos/${category}`, {cache: "no-store"}).then(r=>r.json())

  // // Verifica si la respuesta es exitosa
  // if (!response.ok) {
  //     console.error('Error fetching data:', response.status);
  //     const text = await response.text(); // Mostrar la respuesta en texto
  //     // console.log(text);
  // }
  

  const { categoryName } = React.use(params);; 
  const [items, setItems] = useState([]);

  const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    let productsCollection = collection(db, "productosRopa");

    if (categoryName != 'todos') {
      let productsCollectionFiltered = query(
        productsCollection,
        where("category", "==", categoryName)
      );
      productsCollection = productsCollectionFiltered;
    }

    getDocs(productsCollection).then((res) => {
      let array = res.docs.map((elemento) => {
        return {...elemento.data(), id: elemento.id};
      });
      console.log(array)
      setItems(array);
    });
  }, [categoryName]);

  useEffect(() => {
    setFilteredItems(items)
  }, [items]);

  return(
    <ProductsFilter products={items}></ProductsFilter>
  )
}