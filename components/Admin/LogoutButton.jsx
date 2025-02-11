"use client";

import { useAuthContext } from "@/context/AuthContext";
import { Button } from "@mui/material";
import { RiLogoutBoxRFill } from "react-icons/ri";

export default function LogoutButton (){
    const { logout } = useAuthContext()

    return(
        <Button 
            onClick={logout} 
            type="button"
            aria-label="Botón de deslogueo"
        >
            <RiLogoutBoxRFill className="w-5 h-5 " />
        </Button>
    ) 
}