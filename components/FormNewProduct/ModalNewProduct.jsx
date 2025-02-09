"use client";
import Image from "next/image";

export default function ModalNewProduct({ isOpen, onClose, fetchEmployees }) {

    return (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl w-full max-w-2xl p-6 relative">
            <button
            onClick={onClose}
            className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
            >
            <Image
                src="/close-white-icon.svg"
                alt="Close"
                width={32}
                height={32}
            />
            </button>

            <h2 className="text-2xl font-semibold mb-6">Agregar nuevo producto</h2>

            <form onSubmit={()=>{}} className="grid grid-cols-2 gap-4">
            <div className="col-span-2 md:col-span-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                Correo electrónico
                </label>
                <input
                type="email"
                required
                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-teal-300 focus:border-teal-300"
                value={""}
                onChange={(e) =>
                    {}
                }
                />
            </div>

            <div className="col-span-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                Imagen
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
                <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => {}}
                    className="hidden"
                    id="profile-image"
                />
                <label
                    htmlFor="profile-image"
                    className="cursor-pointer flex flex-col items-center justify-center"
                >
                    <div className="w-full h-32 flex items-center justify-center">
                        <Image
                        src="/file.svg"
                        alt="Profile preview"
                        width={200}
                        height={200}
                        className="max-h-full"
                        />
                    </div>
                    <span className="mt-2 text-sm text-gray-500">
                    Click para subir imagen
                    </span>
                </label>
                </div>
            </div>

            <div className="col-span-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                Sexo
                </label>
                <div className="grid grid-cols-2 gap-4">
                <button
                    type="button"
                    className="p-2 rounded-lg border"
                    onClick={() => {}}
                >
                    Femenino
                </button>
                <button
                    type="button"
                    className="p-2 rounded-lg border"
                    onClick={() => {}}
                >
                    Masculino
                </button>
                </div>
            </div>

            <div className="col-span-2 flex justify-center mt-6">
                <button
                type="submit"
                className="bg-[#6ADADA]  px-8 py-2 rounded-lg hover:bg-teal-500 transition-colors text-[#FFFCFC] font-sans text-[20px] font-bold leading-normal
    "
                >
                Agregar
                </button>
            </div>
            </form>
        </div>
        </div>
    );
    }