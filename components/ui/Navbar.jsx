"use client";

import * as React from 'react';
import { Select } from "@mui/material";
import Link from "next/link";
import { useState, useEffect } from "react";
import { categories } from "../categories";
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import { RiLoginBoxLine } from "react-icons/ri";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import CartWidget from './CartWidget';

export default function Navbar () {

  const [categoryTitle, setCategoryTitle] = useState('');

  const handleChange = (event) => {
    setCategoryTitle(event.target.value);
  };

  return(
    <>
      <div className="flex flex-row justify-around items-center bg-[#d2b4de] h-5 p-5 mb-2 pt-7">
        <Link href="/">
          <h1 className="drop-shadow-md font-medium">Aritti</h1>
        </Link>
        <FormControl variant='standard' fullWidth className='max-w-28'>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            value={categoryTitle || ""}
            onChange={handleChange}
            displayEmpty
          >
            {!categoryTitle && (
              <MenuItem disabled value="">
                <em>Productos</em>
              </MenuItem>
            )}
            {categories.map(({title, path}) => (
              <MenuItem  key={title} value={path}>
                <Link href={path}>
                  {title}
                </Link>
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Link href="/NewProduct">
          {/* <FormUploadNewProduct /> */}
          <AddCircleOutlineIcon />
        </Link>
        <Link href="/cart">
          <CartWidget />
        </Link>
        <Link href="/login">
          <RiLoginBoxLine />
        </Link>
      </div>
    </>
  )
}