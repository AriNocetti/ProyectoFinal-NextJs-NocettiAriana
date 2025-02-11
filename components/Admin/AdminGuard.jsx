"use client";

import useAdminCheck from "@/hooks/useAdminCheck";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function AdminGuard ({ children }) {
    
    const { isAdmin, loading } = useAdminCheck();
    const router = useRouter();
    const [checked, setChecked] = useState(false);
    
    useEffect(() => {
        if (!loading) {
            if (!isAdmin) {
                router.replace("/productos/todos"); // Redirige si no es admin
            }
            setChecked(true);
        }
    }, [isAdmin, loading, router]);
    
    if (loading || !checked) return <p className="text-center mt-10">Verificando permisos...</p>;
    
    return isAdmin ? <>{children}</> : null;
};
