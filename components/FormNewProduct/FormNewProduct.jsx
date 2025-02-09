"use client";

import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
//import { ref, uploadBytes, getDownloadURL } from "firebase/storage" este es su import del storage

const createProduct = async (values, file) => {
    const storageRef = ref(storage, values.slug) //storage
    const fileSnapshot = await uploadBytes(storageRef, file) //uploadBytes de storage
    const fileURL = await getDownloadURL(fileSnapshot.ref) //ref y getDownloadURL son de storage

    const docRef = doc(db, "productos", values.slug)
    return setDoc(docRef, {
        ...values,
        image: fileURL
    }).then(() => console.log("Producto creado exitosamente"))
}

export default function FormUploadNewProduct() {
    const [values, setValues] = useState({
        title: '', 
        description: '', 
        inStock: 0,
        price: 0, 
        id: '' 
    })
    const [file, setFile] = useState(null)

    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        await createProduct(values, file)
    }



return (
    <>
        <Box
            component="form"
            sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
            noValidate
            autoComplete="off"
        >
            <div>
                <TextField
                    required
                    id="outlined-required"
                    label="Required"
                    defaultValue="Hello World"
                />
                <TextField
                    disabled
                    id="outlined-disabled"
                    label="Disabled"
                    defaultValue="Hello World"
                />
                <TextField
                    id="outlined-password-input"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                />
                <TextField
                    id="outlined-read-only-input"
                    label="Read Only"
                    defaultValue="Hello World"
                    slotProps={{
                        input: {
                            readOnly: true,
                        },
                    }}
                />
                <TextField
                    id="outlined-number"
                    label="Number"
                    type="number"
                    slotProps={{
                        inputLabel: {
                            shrink: true,
                        },
                    }}
                />
                <TextField id="outlined-search" label="Search field" type="search" />
                <TextField
                    id="outlined-helperText"
                    label="Helper text"
                    defaultValue="Default Value"
                    helperText="Some important text"
                />
            </div>
            <div>
                <TextField
                    required
                    id="filled-required"
                    label="Required"
                    defaultValue="Hello World"
                    variant="filled"
                />
                <TextField
                    disabled
                    id="filled-disabled"
                    label="Disabled"
                    defaultValue="Hello World"
                    variant="filled"
                />
                <TextField
                    id="filled-password-input"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    variant="filled"
                />
                <TextField
                    id="filled-read-only-input"
                    label="Read Only"
                    defaultValue="Hello World"
                    variant="filled"
                    slotProps={{
                        input: {
                            readOnly: true,
                        },
                    }}
                />
                <TextField
                    id="filled-number"
                    label="Number"
                    type="number"
                    variant="filled"
                    slotProps={{
                        inputLabel: {
                            shrink: true,
                        },
                    }}
                />
                <TextField
                    id="filled-search"
                    label="Search field"
                    type="search"
                    variant="filled"
                />
                <TextField
                    id="filled-helperText"
                    label="Helper text"
                    defaultValue="Default Value"
                    helperText="Some important text"
                    variant="filled"
                />
            </div>
            <div>
                <TextField
                    required
                    id="standard-required"
                    label="Required"
                    defaultValue="Hello World"
                    variant="standard"
                />
                <TextField
                    disabled
                    id="standard-disabled"
                    label="Disabled"
                    defaultValue="Hello World"
                    variant="standard"
                />
                <TextField
                    id="standard-password-input"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    variant="standard"
                />
                <TextField
                    id="standard-read-only-input"
                    label="Read Only"
                    defaultValue="Hello World"
                    variant="standard"
                    slotProps={{
                        input: {
                            readOnly: true,
                        },
                    }}
                />
                <TextField
                    id="standard-number"
                    label="Number"
                    type="number"
                    variant="standard"
                    slotProps={{
                        inputLabel: {
                            shrink: true,
                        },
                    }}
                />
                <TextField
                    id="standard-search"
                    label="Search field"
                    type="search"
                    variant="standard"
                />
                <TextField
                    id="standard-helperText"
                    label="Helper text"
                    defaultValue="Default Value"
                    helperText="Some important text"
                    variant="standard"
                />
            </div>
        </Box>
    </>
);
}