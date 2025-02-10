"use client";

import { useAuthContext } from "@/context/AuthContext";
import { Button } from "@mui/material";
import { RiLogoutBoxRFill } from "react-icons/ri";

export default function LogoutButton (){
    const { logout } = useAuthContext()

    return <Button onClick={logout} className="text-xs text-black"><RiLogoutBoxRFill /></Button>
}