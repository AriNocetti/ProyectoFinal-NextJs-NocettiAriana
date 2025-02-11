import ProductsFilter from "@/components/productsFilter/ProductsFilter";

export default async function Productos({params}) {
  const { categoryName } = await params;
  const response = await fetch(`${process.env.NEXT_PUBLIC_NETLIFY_URL}/api/productos/${categoryName}`, { cache: "no-store" });
  const items = await response.json();

  return(
    <ProductsFilter products={items}></ProductsFilter>
  )
}