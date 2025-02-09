"use client";

import { useAuthContext } from "@/context/AuthContext";

export default function AdminLayout ({ children, login }) {
    const { user } = useAuthContext()

    return (
        <>
            {
                user.logged
                    ? children
                    : login
            }
        </>
    )
}