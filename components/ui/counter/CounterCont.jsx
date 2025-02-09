import { Button } from "@mui/material";

export default function CounterComp({ contador, sumar, restar, onAdd }){
    return (
        <div className="flex items-center gap-2 ml-10 mt-8"> 
            <Button variant="contained" onClick={sumar}>
                Sumar
            </Button>
            <h1>{contador}</h1>
            <Button variant="contained" onClick={restar}>
                Restar
            </Button>

            <Button variant="outlined" onClick={() => onAdd(contador)}>
                Agregar al carrito
            </Button>
        </div>
    );
}