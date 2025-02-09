import {Button} from "@mui/material";
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
        <div style={{ padding: "50px"}}>
            <h2>Carrito</h2>
            {cart.map((products) => {
                return (
                    <div key={products.id}>
                        <h2>{products.title}</h2>
                        <h3>Precio: $ {products.price}</h3>
                        <h3>Cantidad: {products.quantity}</h3>
                        <h3>Subtotal: {products.price * products.quantity}</h3>
                        <Button
                            variant="contained"
                            onClick={() => deleteProductById(products.id)}
                        >
                            Eliminar
                        </Button>
                    </div>
                );
            })}
        
            {total > 0 && (
                <>
                    <Button
                        sx={{marginTop: 20}}
                        variant="contained"
                        onClick={limpiarConAlert}
                    >
                        Limpiar carrito
                    </Button>
                    <Link href="/checkout">
                        <Button 
                            sx={{marginTop: 20}} 
                            variant="contained"
                        >
                            Finalizar compra
                        </Button>
                    </Link>
                </>
            )}
        
            {total > 0 ? (
                <h2>El total a pagar es : $ {total}</h2>
            ) : (
                <h2>No tienes productos todavía</h2>
            )}
        </div>
    );
};