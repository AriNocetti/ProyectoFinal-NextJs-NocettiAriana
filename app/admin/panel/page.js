import AdminGuard from "@/components/Admin/AdminGuard";
import ProductsTable from "@/components/Admin/ProductsTable";


export default async function Admin () {

    const response = await fetch(`${process.env.NEXT_PUBLIC_NETLIFY_URL}/api/productos`, { cache: "no-store" });
    const items = await response.json();

    return (
        <AdminGuard>
            <div className="container m-auto mt-6">
                <ProductsTable items={items} />
            </div>
        </AdminGuard>
    )
}