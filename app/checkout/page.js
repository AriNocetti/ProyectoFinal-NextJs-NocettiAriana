"use client";

import { db } from "@/configFirebase";
import { CartContext } from "@/context/CartContext";
import { collection, addDoc, updateDoc, doc } from "firebase/firestore";
import { useContext, useState, useEffect } from "react";
import Swal from "sweetalert2";

export default function Checkout () {
    const [user, setUser] = useState({
        name: "",
        phone: "",
        email: "",
    });

    const {cart, getTotalAmount, clearCart} = useContext(CartContext);
    const [orderId, setOrderId] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const [errors, setErrors] = useState({
        name: "",
        phone: "",
        email: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        setErrors({
            name: "",
            phone: "",
            email: "",
        });

        if (user.name.length < 20) {
            setErrors({ ...errors, name: "La longitud no cumple"});
        };

        setIsLoading(true);

        let total = getTotalAmount();

        const order = {
            buyer: user,
            items: cart,
            total,
        };

        let refCollection = collection(db, "orders");
        addDoc(refCollection, order)
            .then((res) => {
                setOrderId(res.id);
                clearCart();
            })
            .catch((error) => {})
            .finally(() => {
                setIsLoading(false);
            });

        order.items.forEach((elemento) => {
            updateDoc(doc(db, "productosRopa", elemento.id), {
                stock: elemento.stock - elemento.quantity,
            });
        });
    };

    const handleChange = (e) => {
        const {value, name} = e.target;
        setUser({ ...user, [name]: value});
    };

    useEffect(() => {
        if (orderId) {
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Tu compra ha sido realizada con éxito!",
                text: `Gracias por tu compra, el número de orden es: ${orderId}`,
                confirmButtonText: "Aceptar",
            });
        }
    }, [orderId]);

    if (isLoading) {
        return <h2>cargando...</h2>;
    }

    return (
        <div className="flex flex-col items-center m-5 mt-12">
            {orderId ? (
                <>
                    <h1 className="text-black drop-shadow-md">Gracias por tu compra!</h1>
                    <h1 className="text-black drop-shadow-md">El número de orden es: {orderId}</h1>
                    <img 
                        src="https://res.cloudinary.com/dejb7jzsz/image/upload/v1730426908/7587165_meyx3a.jpg" 
                        alt="Compra realizada" 
                        className="w-[300px] h-[300px] mt-9 rounded-2xl"
                    />
                </>
            ) : (
                <form onSubmit={handleSubmit} className="flex flex-col w-60 p-5 border-[#c39bd3] border-2 rounded-lg shadow-md shadow-black">
                    <input 
                        type="text"
                        placeholder="Nombre"
                        onChange={handleChange}
                        name="name"
                        required
                        className="mb-4 p-3 border-[#c39bd3] border-1 rounded-sm"
                    />
                    <span className="text-sm">{errors.name}</span>
                    <input 
                        type="number"
                        placeholder="Teléfono"
                        onChange={handleChange}
                        name="phone"
                        required
                        className="mb-4 p-3 border-[#c39bd3] border-1 rounded-sm"
                    />
                    <input 
                        type="text" 
                        placeholder="Email"
                        onChange={handleChange}
                        name="email"
                        required
                        className="mb-4 p-3 border-[#c39bd3] border-1 rounded-sm"
                    />
                    <button 
                        type="submit"
                        aria-label="Botón para comprar"
                        className="p-2 border-none rounded-sm bg-[#a569bd] text-white cursor-pointer hover:bg-[#a3e4d7]"
                    >
                        Comprar
                    </button>
                </form>
            )}
        </div>
    );
}