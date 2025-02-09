import ProductsFilter from "@/components/productsFilter/ProductsFilter";

export default async function Productos({params}) {
  const { categoryName } = params;
  const response = await fetch(`http://localhost:3000/api/productos/${categoryName}`, { cache: "no-store" });
  const items = await response.json();

  return(
    <ProductsFilter products={items}></ProductsFilter>
  )
}