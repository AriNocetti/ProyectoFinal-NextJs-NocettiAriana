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
    // console.log('llegan', products)

    // const [items, setItems] = useState(products);

    // const [filteredItems, setFilteredItems] = useState(products);

    // const [fabric, setFabric] = useState('');

    // const handleChange = (event) => {
    //     setFabric(event.target.value);
    // };

    // const [whatPrice, setWhatPrice] = useState([6000, 50000]);

    // const handleWhatPrice = (event, newValue) => {
    //     setWhatPrice(newValue);
    // };

    // useEffect(() => {
    //     setFilteredItems(items.filter((item) => fabric == "" ? true : item.fabric == fabric))
    // }, [fabric, items]);

    // useEffect(() => {
    //     setFilteredItems(items.filter((item) => item.price >= whatPrice[0] && item.price <= whatPrice[1]))
    // }, [whatPrice, items])

    return (
        <>
        {/* <div className="flex flex-row gap-7">
            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                <InputLabel id="demo-select-small-label">Tela</InputLabel>
                <Select
                    labelId="demo-select-small-label"
                    id="demo-select-small"
                    value={fabric}
                    label="Tela"
                    onChange={handleChange}
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
        </div> */}
            <ItemList items={products} />
        </>
    )
}