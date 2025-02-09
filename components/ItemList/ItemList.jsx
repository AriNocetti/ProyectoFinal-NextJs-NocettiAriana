import ProductCard from "../ProductCard/ProductCard";
import { Skeleton } from "@mui/material";

export default function ItemList({ items }){

    if (items.length === 0) {
        return (
            <div className="flex flex-wrap justify-center items-center gap-5 mt-11">
                <div className="max-w-[250px] max-h-[430px] mt-10">
                    <Skeleton variant="rectangular" width={"220px"} height={"240px"}/>
                    <Skeleton variant="text" sx={{ fontSize: "2rem" }} width={"220px"}/>
                    <Skeleton variant="text" sx={{ fontSize: "1rem" }} width={"220px"}/>
                    <Skeleton variant="text" sx={{ fontSize: "2rem" }} width={"150px"}/>
                    <Skeleton variant="rounded" sx={{fontSize: "2rem", borderRadius: "50px"}} width={"120px"}/>
                </div>
                <div className="max-w-[250px] max-h-[430px] mt-10">
                    <Skeleton variant="rectangular" width={"220px"} height={"240px"}/>
                    <Skeleton variant="text" sx={{ fontSize: "2rem" }} width={"220px"}/>
                    <Skeleton variant="text" sx={{ fontSize: "1rem" }} width={"220px"}/>
                    <Skeleton variant="text" sx={{ fontSize: "2rem" }} width={"150px"}/>
                    <Skeleton variant="rounded" sx={{fontSize: "2rem", borderRadius: "50px"}} width={"120px"}/>
                </div>
                <div className="max-w-[250px] max-h-[430px] mt-10">
                    <Skeleton variant="rectangular" width={"220px"} height={"240px"}/>
                    <Skeleton variant="text" sx={{ fontSize: "2rem" }} width={"220px"}/>
                    <Skeleton variant="text" sx={{ fontSize: "1rem" }} width={"220px"}/>
                    <Skeleton variant="text" sx={{ fontSize: "2rem" }} width={"150px"}/>
                    <Skeleton variant="rounded" sx={{fontSize: "2rem", borderRadius: "50px"}} width={"120px"}/>
                </div>
            </div>
        );
    }

    return (
        <div className="flex justify-center items-center gap-5 flex-wrap mt-11">
            {items.map((item) => {
                return <ProductCard key={item.id} {...item} />;
            })}
        </div>
    );
};

