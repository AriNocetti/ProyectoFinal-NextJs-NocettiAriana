"use client";
import Image from "next/image";
import ProductForm from "./ProductForm";

export default function ModalEditProduct({ initialValues, isOpen, onClose }) {
    
    console.log('initials', initialValues)
    function onSubmit() {
        //fetch edit productos
    } 

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4">
            <div className="relative bg-white p-6 rounded shadow-lg">
                <button
                    onClick={onClose}
                    className="absolute right-3 top-3 z-1500 text-gray-500 hover:text-gray-700"
                >
                    <Image
                        src="/close-white-icon.svg"
                        alt="Close"
                        width={32}
                        height={32}
                    />
                </button>
                <h2 className="text-2xl font-semibold mb-6 text-[#9b59b6]">Editar producto</h2>
                <ProductForm initialValues={initialValues} isEdit={true} onClose={onClose} />
            </div>
        </div>
    );
}