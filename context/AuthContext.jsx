"use client";

import { auth, db, provider } from "@/configFirebase";
import { doc, getDoc } from "firebase/firestore";
import { signInWithPopup, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"
import { useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext()

export const useAuthContext = () => useContext(AuthContext)


export const AuthProvider = ({children}) => {
    const [user, setUser] = useState({
        logged: false,
        email: null,
        uid: null
    })

    const router = useRouter()

    const registerUser = async (values) => {
        try {
            await createUserWithEmailAndPassword(auth, values.email, values.password);
        } catch (error) {
            console.error("Error al registrar usuario:", error.message);
        }
    }

    const loginUser = async (values) => {
        try {
            const userCredential= await signInWithEmailAndPassword(auth, values.email, values.password);
            const loggedUser = userCredential.user;

            if (!loggedUser) {
                console.log("No se pudo autenticar el usuario");
                return;
            }
            // router.push("/admin/panel")
            const userRef = doc(db, "roles",loggedUser.uid);
            const userSnap = await getDoc(userRef);

            if (!userSnap.exists()) {
                console.error("El documento del usuario no existe en Firestore.");
                return;
            }

            const userData = userSnap.data();

            if (userData.rol === "admin") {
                router.push("/admin/panel");
            } else {
                router.push("/productos/todos");
            }

        } catch (error) {
            console.error("Error al iniciar sesión:", error.message);
        }
    }

    const logout = async () => {
        try {
            await signOut(auth);
            router.push("/productos/todos")
        } catch (error) {
            console.error("Error al desloguearse:", error.message);
        }
    }

    const googleLogin = async () => {
        try {
            await signInWithPopup(auth, provider);
            router.push("/admin/panel")
        } catch (error) {
            console.error("Error en inicio de sesión con Google:", error.message);
        }
    }

    useEffect(() => {
        onAuthStateChanged(auth, async (user) => {

            if (user) {
                const docRef = doc(db, "roles", user.uid)
                const userDoc = await getDoc(docRef)

                if (userDoc.data()?.rol === "admin") {
                    setUser({
                        logged: true,
                        email: user.email,
                        uid: user.uid
                    }) 
                    // creo que no es necesario o si es un user tambien deberia setearse el user
                    // router.push("/admin/panel")
                } else {
                    // router.push("/productos/todos")
                    // logout()
                }

            } else {
                setUser({
                    logged: false,
                    emaiL: null,
                    uid: null
                })
            }
        })
    }, [router])

    return (
        <AuthContext.Provider value={{
            user,
            registerUser,
            loginUser,
            logout,
            googleLogin
        }}>
            {children}
        </AuthContext.Provider>
    )
}