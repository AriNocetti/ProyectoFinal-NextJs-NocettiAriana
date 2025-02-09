import { NextResponse } from "next/server"
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "@/configFirebase"

export async function GET(_, { params }) {
    console.log('cp params', params)
    const { categoria } = params
    // const productosRef = collection(db, "productosRopa")
    // const q = categoria === 'todos' 
    //             ? productosRef
    //             : query(productosRef, where('type', '==', categoria))
    // const querySnapshot = await getDocs(q)

    // const docs = querySnapshot.docs.map(doc => doc.data())
    //nueva consulta

    let productsCollection = collection(db, "productosRopa");

    if (categoria != 'todos') {
        console.log('cat =! todos', categoria)
        let productsCollectionFiltered = query(
            productsCollection,
            where("category", "==", categoria)
        );
        console.log('productsCollectionFiltered', productsCollectionFiltered)
        productsCollection = productsCollectionFiltered;
    }

    // const querySnapshot2 = await getDocs(productsCollection)

    // const docs2 = querySnapshot2.docs.map(doc => {return {...doc.data(), id: doc.id}})
    //nueva consulta

    // let productsCollection = collection(db, "productosRopa");

    getDocs(productsCollection).then((res) => {
        let res = res.docs.map((elemento) => {
            return {...elemento.data(), id: elemento.id};
            })
        return NextResponse.json(res)
    });

    // return NextResponse.json(docs2)
}