"use client";
import { MenuItem, Select } from "@mui/material";
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

            <h2 className="text-2xl font-semibold mb-6 text-[#9b59b6]">Agregar nuevo producto</h2>

            <form onSubmit={()=>{}} className="grid grid-cols-2 gap-4">
            <div className="col-span-2 md:col-span-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                    Categoría
                </label>
                <Select
                    labelId="demo-select-small-label"
                    id="demo-select-small"
                    // value={} 
                    label="Categoría"
                    // onChange={handleChange}
                    className="min-w-[300px] h-10"
                >
                    <MenuItem value={"Abrigos"}>Abrigos</MenuItem>
                    <MenuItem value={"Pantalones"}>Pantalones</MenuItem>
                    <MenuItem value={"Remeras"}>Remeras</MenuItem>
                    <MenuItem value={"lenceria"}>Lencería</MenuItem>
                </Select>
            </div>
            <div className="col-span-2 md:col-span-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                    Nombre del producto
                </label>
                <input
                type="text"
                required
                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-[#9b59b6] focus:border-[#9b59b6]"
                value={""}
                onChange={(e) =>
                    {}
                }
                />
            </div>
            <div className="col-span-2 md:col-span-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                    Descripción del producto
                </label>
                <input
                type="text"
                required
                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-[#9b59b6] focus:border-[#9b59b6]"
                value={""}
                onChange={(e) =>
                    {}
                }
                />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                    Tela
                </label>
                <Select
                    labelId="demo-select-small-label"
                    id="demo-select-small"
                    // value={fabric}
                    label="Tela"
                    // onChange={handleChange}
                    className="min-w-[300px] h-10"
                >
                    <MenuItem value={"lana"}>Lana</MenuItem>
                    <MenuItem value={"jean"}>Jean</MenuItem>
                    <MenuItem value={"seda"}>Seda</MenuItem>
                    <MenuItem value={"encaje"}>Encaje</MenuItem>
                    <MenuItem value={"algodón"}>Algodón</MenuItem>
                </Select>
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                    Precio
                </label>
                <input
                type="number"
                required
                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-[#9b59b6] focus:border-[#9b59b6]"
                value={""}
                onChange={(e) =>
                    {}
                }
                />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                    Stock
                </label>
                <input
                type="number"
                required
                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-[#9b59b6] focus:border-[#9b59b6]"
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
                        width={100}
                        height={100}
                        className="max-h-full"
                        />
                    </div>
                    <span className="mt-2 text-sm text-gray-500">
                    Click para subir imagen
                    </span>
                </label>
                </div>
            </div>
            <div className="col-span-2 flex justify-center mt-6">
                <button
                type="submit"
                className="bg-[#9b59b6]  px-8 py-2 rounded-lg hover:bg-[#c692db] transition-colors text-[#FFFCFC] font-sans text-[20px] font-bold leading-normal
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