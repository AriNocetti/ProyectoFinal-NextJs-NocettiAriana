"use client";

import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { auth, db } from "@/configFirebase";



export default function useAdminCheck() {
    const [isAdmin, setIsAdmin] = useState(false);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            if (user) {
                const userRef = doc(db, "roles", user.uid);
                const userSnap = await getDoc(userRef);
                
                if (userSnap.exists()) {
                    if(userSnap.data().rol =="admin"){
                        setIsAdmin(true);
                    } else {
                        router.push("/productos/todos")
                    }
                }
            } else {
                router.push("/productos/Remeras")
            }
            setLoading(false);
        });

        return () => unsubscribe();
    }, [router]);

    return { isAdmin, loading };
};