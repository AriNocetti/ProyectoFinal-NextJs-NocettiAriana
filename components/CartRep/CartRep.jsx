import {Button} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Swal from "sweetalert2";

export default function CartRep ({cart, clearCart, deleteProductById, total}) {
        
    const limpiarConAlert = () => {
        Swal.fire({
            title: "Seguro quieres limpiar el carrito?",
            showConfirmButton: true,
            showDenyButton: true,
            confirmButtonText: `Si`,
        }).then((result) => {
            if (result.isConfirmed) {
                clearCart();
                Swal.fire({
                    position:"center",
                    icon: "success",
                    title: "Se limpió el carrito",
                });
            } else if (result.isDenied) {
                Swal.fire({
                    position: "center",
                    icon: "info",
                    title: "El carrito queda como estaba",
                });
            }
        });
    };
        
    return (
        <div className="px-4">
            <h1 className="text-2xl font-bold py-6">Carrito</h1>
            <div className="flex flex-wrap gap-6">
                {cart.map((products) => {
                    return (
                        <div key={products.id} className="">
                            <h2 className="text-lg font-medium mb-2">{products.title}</h2>
                            <Image
                                src={products.imageUrl}
                                alt={products.title}
                                width={70}
                                height={70}
                            />
                            <h3 className="text-base font-light mb-2">Cantidad: {products.quantity}</h3>
                            <h3 className="text-xl font-medium">Precio: $ {products.price}</h3>
                            <h3 className="my-2">Subtotal: {products.price * products.quantity}</h3>
                            <Button
                                variant="contained"
                                type="button"
                                aria-label="Botón para eliminar producto del carrito"
                                onClick={() => deleteProductById(products.id)}
                                className="mt-4"
                            >
                                Eliminar
                            </Button>
                        </div>
                    );
                })}
            </div>
        
            {total > 0 && (
                <>
                <div className="flex gap-5 mb-3">
                    <Button
                        sx={{marginTop: 20}}
                        variant="contained"
                        onClick={limpiarConAlert}
                        type="button"
                        aria-label="Botón limpiar carrito"
                    >
                        Limpiar carrito
                    </Button>
                    <Link href="/checkout">
                        <Button 
                            sx={{marginTop: 20}} 
                            variant="contained"
                            type="button"
                            aria-label="Botón Finalizar compra"
                        >
                            Finalizar compra
                        </Button>
                    </Link>
                </div>
                </>
            )}
        
            {total > 0 ? (
                <h2 className="font-semibold">El total a pagar es : $ {total}</h2>
            ) : (
                <h2 className="font-semibold">No tienes productos todavía</h2>
            )}
        </div>
    );
};