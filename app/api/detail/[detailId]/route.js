import { NextResponse } from "next/server"
import { collection, getDoc, doc } from "firebase/firestore"
import { db } from "@/configFirebase"

export async function GET(request, { params }) {
    const { detailId } = await params;
    let productsCollection = collection(db, "productosRopa");
    let refDoc = doc(productsCollection, detailId);
    let res = await getDoc(refDoc)
    return NextResponse.json({ ...res.data(), id: res.id}, { status: 200 });


}