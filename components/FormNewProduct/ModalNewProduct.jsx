"use client";
import Image from "next/image";
import ProductForm from "./ProductForm";

export default function ModalNewProduct({ isOpen, onClose }) {
    if (!isOpen) return null;

    function onSubmit() {
        // fetch new productos
    } 

    return (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4">
            <div className="relative bg-white p-6 rounded shadow-lg">
                {/* Botón de cierre */}
                <button onClick={onClose} className="absolute right-4 top-4 text-gray-500 hover:text-gray-700">
                    <Image src="/close-white-icon.svg" alt="Close" width={32} height={32} />
                </button>

                {/* Formulario */}
                <h2 className="text-2xl font-semibold mb-6 text-[#9b59b6]">Agregar nuevo producto</h2>
                <ProductForm initialValues={{}} isEdit={false} onClose={onClose} />
            </div>
        </div>
    );
}