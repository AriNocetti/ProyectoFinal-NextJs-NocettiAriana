import { NextResponse } from "next/server"
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "@/configFirebase"

export async function GET(request, { params }) {
    try {
        console.log("cp params", params);
        const { category } = params;

        let productsCollection = collection(db, "productosRopa");

        if (category !== "todos") {
            console.log("cat =! todos", category);
            productsCollection = query(productsCollection, where("category", "==", category));
        }

        // 🔹 Esperamos la respuesta de Firestore antes de devolver el resultado
        const resp = await getDocs(productsCollection);
        const res = resp.docs.map((elemento) => ({
            ...elemento.data(),
            id: elemento.id,
        }));

        return NextResponse.json(res, { status: 200 });
    } catch (error) {
        console.error("Error en la API:", error);
        return NextResponse.json({ error: "Error interno del servidor" }, { status: 500 });
    }
}