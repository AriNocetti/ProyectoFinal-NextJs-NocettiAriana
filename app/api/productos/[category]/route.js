import { NextResponse } from "next/server"
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "@/configFirebase"

export async function GET(request, { params }) {
    const { category } = await params;

    let productsCollection = collection(db, "productosRopa");

    if (category !== "todos") {
        console.log("cat =! todos", category);
        productsCollection = query(productsCollection, where("category", "==", category));
    }

    const resp = await getDocs(productsCollection);
    const res = resp.docs.map((elemento) => ({
        ...elemento.data(),
        id: elemento.id,
    }));

    return NextResponse.json(res, { status: 200 });

}