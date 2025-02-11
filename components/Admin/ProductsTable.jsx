'use client';
import Link from "next/link";
import Image from "next/image";
import { MdOutlineEdit } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";
import { useState } from "react";
import ModalNewProduct from "../FormNewProduct/ModalNewProduct";
import ProductForm from "../FormNewProduct/ProductForm";
import ModalEditProduct from "../FormNewProduct/ModalEditProduct";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import ModalDeleteProduct from "../FormNewProduct/ModalDeleteProduct";

export default function ProductsTable({items}) {

    const [modalCreateIsOpen, setModalCreateIsOpen] = useState(false)
    const [modalDeleteIsOpen, setModalDeleteIsOpen] = useState(false)
    const [productToDelete, setProductToDelete] = useState(null);
    const [modalEditIsOpen, setModalEditIsOpen] = useState(false)
    const [productSelected, setProductSelected] = useState({})

    const handleOpenCreate = () => setModalCreateIsOpen(true)
    const handleOpenEdit = (producto) => {
        setProductSelected(producto);
        setModalEditIsOpen(true); 
    }

    const handleOpenDelete = (producto) => {
        setProductToDelete(producto);
        setModalDeleteIsOpen(true);
        console.log(productToDelete, modalDeleteIsOpen)
    };

    return (
        <div className="overflow-x-auto">
            <div className="flex flex-row items-center gap-6 mb-6 ml-3">
                <h2 className="text-2xl border-b pb-4">Administración de productos</h2>
                <div className="flex pb-4">
                    <button 
                        onClick={() => handleOpenCreate()} 
                        type="button" 
                        aria-label="Botón de crear nuevo producto" 
                    >
                        <AddCircleOutlineIcon />
                    </button>
                </div>
            </div>
            <table className="w-auto mx-auto border-collapse border text-xs text-left text-black mb-40">
                <thead className="text-sm text-[#9b59b6] bg-white uppercase ">
                    <tr>
                        <th scope="col" className="  px-4 py-2">Nombre</th>
                        <th scope="col" className="  px-4 py-2">Precio</th>
                        <th scope="col" className="  px-4 py-2">Stock</th>
                        <th scope="col" className="  px-4 py-2">Imagen</th>
                        <th scope="col" className="  px-4 py-2">Descripción</th>
                        <th scope="col" className="  px-4 py-2">Acciones</th>
                    </tr>
                </thead>
                <tbody className="bg-[#f7f3f8]">
                    {
                        items.map((item, index) => (
                            <tr key={item.id} className={index % 2 == 0 ? "bg-[#f5e7fc]" : undefined}>
                                <td className="border-b px-4 py-2">{item.title}</td>
                                <td className="border-b px-4 py-2">{item.price}</td>
                                <td className="border-b px-4 py-2">{item.stock}</td>
                                <td className="border-b px-4 py-2 max-w-14">
                                    <Image
                                        src={item.imageUrl}
                                        alt={item.title}
                                        width={80}
                                        height={80}
                                    />
                                </td>
                                <td className="border-b px-4 py-2 truncate w-32">{item.description}</td>
                                <td className="flex flex-row gap-2 items-center px-4 py-5">
                                    <div
                                        className="rounded text-lg p-2 text-black"
                                    >
                                        <MdOutlineEdit onClick={() => handleOpenEdit(item)}/>
                                    </div>

                                    <div 
                                        className="rounded text-lg p-2 text-black"
                                    >
                                        <MdDeleteOutline onClick={() => handleOpenDelete(item)} />
                                    </div>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <ModalNewProduct isOpen={modalCreateIsOpen} onClose={()=>setModalCreateIsOpen(false)}></ModalNewProduct>
            <ModalEditProduct initialValues={productSelected} isOpen={modalEditIsOpen} onClose={()=>setModalEditIsOpen(false)}></ModalEditProduct>
            <ModalDeleteProduct productId={productToDelete?.id} isOpen={modalDeleteIsOpen} onClose={() => setModalDeleteIsOpen(false)} />
        </div>
    )
}