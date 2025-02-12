"use client";

import { useEffect, useState } from "react";
import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Slider } from '@mui/material';
import ItemList from "@/components/ItemList/ItemList";

const marks = [
    { value: 0, label: '$0', },
    { value: 7000, label: '$7000', },
    { value: 16000, label: '$16000', },
    { value: 25000, label: '$25000', },
    { value: 35000, label: '$35000', },
];
function valuetext(value) {
    return `$${value}`;
}

export default function ProductsFilter({ products }) {

    const [filteredItems, setFilteredItems] = useState([products]);

    
    //filtro fabric
    const [fabric, setFabric] = useState('');
    
    const handleFabric = (event) => {
        setFabric(event.target.value);
    };
    
    useEffect(() => {
        let itemsFilteredByFabric = products.filter((item) => fabric == "" ? true : item.fabric == fabric)
        let itemsFilteredByFabricAndPrice = itemsFilteredByFabric.filter((item) => item.price >= whatPrice[0] && item.price <= whatPrice[1])
        setFilteredItems(itemsFilteredByFabricAndPrice)
    }, [fabric, products]);
    
    //filtro rango precios
    const [whatPrice, setWhatPrice] = useState([5000, 50000]);
    
    const handleWhatPrice = (event, newValue) => {
        setWhatPrice(newValue);
    };
    
    useEffect(() => {
        let itemsFilteredByPrice = products.filter((item) => item.price >= whatPrice[0] && item.price <= whatPrice[1])
        let itemsFilteredByPriceAndFabric = itemsFilteredByPrice.filter((item) => fabric == "" ? true : item.fabric == fabric)
        setFilteredItems(itemsFilteredByPriceAndFabric)
    }, [whatPrice, products])
    
    return (
        <>
        <div className="flex flex-row gap-7">
            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                <InputLabel id="demo-select-small-label">Tela</InputLabel>
                <Select
                    labelId="demo-select-small-label"
                    id="demo-select-small"
                    value={fabric}
                    label="Tela"
                    onChange={handleFabric}
                    >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={"lana"}>Lana</MenuItem>
                    <MenuItem value={"jean"}>Jean</MenuItem>
                    <MenuItem value={"seda"}>Seda</MenuItem>
                    <MenuItem value={"encaje"}>Encaje</MenuItem>
                    <MenuItem value={"algodón"}>Algodón</MenuItem>
                </Select>
            </FormControl>
            <Slider
                aria-label="Rango de precios"
                value={whatPrice}
                onChange={handleWhatPrice}
                defaultValue={0}
                getAriaValueText={valuetext}
                valueLabelDisplay="auto"
                marks={marks}
                min={0}
                max={35000}
                step={null}
                className="max-w-72"
                />
        </div>
            <ItemList items={filteredItems} />
        </>
    )
}


// const {categoryName} = useParams;

// useEffect(() => {
    //     let productsCollection = collection(db, "productosRopa");
    //     let consulta = productsCollection;
    
    //     if (categoryName) {
    //         let productsCollectionFiltered = query(
    //             productsCollection,
    //             where("category", "==", categoryName)
    //         );
    //         consulta = productsCollectionFiltered;
    //     }
        
    //     getDocs(consulta).then((res) => {
    //         let array = res.docs.map((elemento) => {
    //         return {...elemento.data(), id: elemento.id};
    //     });
        
    //     setItems(array);
    //     setFilteredItems(array);
    //     });
    //     }, [categoryName]);