"use client";

import { useAuthContext } from "@/context/AuthContext";
import { Button } from "@mui/material";



export default function LogoutButton (){
    const { logout } = useAuthContext()

    return <Button onClick={logout} className="bg-red-500">Cerrar sesión</Button>
}