import Link from "next/link";
import Image from "next/image";
import { MdOutlineEdit } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";

export default async function ProductsTable() {

    const response = await fetch(`${process.env.NEXT_PUBLIC_NETLIFY_URL}/api/productos`, { cache: "no-store" });
    const items = await response.json();

    return (
        <div className="overflow-x-auto">

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
                                    <Link
                                        href={`/admin/edit/${item.id}`}
                                        className="rounded text-lg p-2 text-black"
                                    >
                                        <MdOutlineEdit />
                                    </Link>

                                    <Link
                                        href={`/admin/delete/${item.id}`}
                                        className="rounded text-lg p-2 text-black"
                                    >
                                        <MdDeleteOutline />
                                    </Link>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}