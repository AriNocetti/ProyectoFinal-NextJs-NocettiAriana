
import ItemDetail from "@/components/ItemDetail/ItemDetail";

export default async function DetailProduct({ params }){

    const { id } = await params;
    console.log(id, 'en detailll producy')
    const response = await fetch(`${process.env.NEXT_PUBLIC_NETLIFY_URL}/api/detail/${id}`, { cache: "no-store" });
    const item = await response.json();
    
    return <ItemDetail item={item} />;
}