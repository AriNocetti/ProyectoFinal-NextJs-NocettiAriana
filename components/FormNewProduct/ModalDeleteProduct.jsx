import { Button } from "@mui/material";
import { db } from "@/configFirebase";
import { doc, deleteDoc } from "firebase/firestore";

export default function ModalDeleteProduct({ isOpen, productId, onClose }) {

    const handleDelete = async () => {
        try {
            if (!productId) {
                console.error("No hay ID de producto para eliminar");
                return;
            }
            await deleteDoc(doc(db, "productosRopa", productId));
            console.log("Producto eliminado correctamente");
            onClose(); // Cerrar el modal después de eliminar
            } catch (error) {
            console.error("Error al eliminar el producto:", error);
            }
    };

    if (!isOpen) return null;

    return (
        <>
            <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4">
                <div className="relative bg-white p-6 rounded shadow-lg">
                    <h2 className="text-lg font-bold mb-6">¿Desea eliminar el producto?</h2>
                    <div className="flex justify-evenly w-full gap-2">
                        <Button
                            type="button"
                            onClick={onClose}
                            className="px-4 py-2 border rounded-lg text-white  hover:bg-[#deb3ef]"
                        >
                            Cancelar
                        </Button>
                        <Button
                            type="button"
                            onClick={handleDelete}
                            className="px-4 py-2  text-white hover:bg-[#f0a3db] rounded-lg hover:bg-opacity-90"
                        >
                            Eliminar
                        </Button>
                    </div>
                </div>
            </div>
        </>
    )
}