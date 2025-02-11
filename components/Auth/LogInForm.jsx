"use client";

import { useAuthContext } from "@/context/AuthContext";
import { useState } from "react";
import { Button } from "@mui/material";

export default function LogInForm (){
    const { registerUser, loginUser, googleLogin } = useAuthContext()
    const [values, setValues] = useState({
        email: '',
        password: ''
    })

    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
    }

    return(
        <div className="fixed w-screen h-screen inset-0 z-10 flex justify-center items-center bg-purple-400 bg-opacity-25">
            <form onSubmit={handleSubmit} className="bg-white py-4 px-6 rounded-xl max-w-md w-full">
                <h1>Login</h1>
                <input 
                    type="email"
                    id="email"
                    value={values.email}
                    required
                    placeholder="Tu email"
                    className="p-2 rounded w-full border border-blue-100 block my-4"
                    name="email"
                    onChange={handleChange}
                />
                <input 
                    type="password"
                    id="password"
                    value={values.password}
                    required
                    placeholder="Tu password"
                    className="p-2 rounded w-full border border-blue-100 block my-4"
                    name="password"
                    onChange={handleChange}
                />
                <Button onClick={() => loginUser(values)} type="button" aria-label="Botón para ingresar" className="mr-4 ">Ingresar</Button>
                <Button onClick={() => registerUser(values)} type="button" aria-label="Botón para Registrarme">Registrarme</Button>
                <Button onClick={googleLogin} type="button" aria-label="Botón para ingresar con Google" className="mt-2 block">Ingresar con Google</Button>
            </form>
        </div>
    )
}