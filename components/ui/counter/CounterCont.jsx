import { Button } from "@mui/material";

export default function CounterComp({ contador, sumar, restar, onAdd }){
    return (
        <div className="flex items-center gap-2 ml-10 mt-8"> 
            <Button variant="contained" onClick={sumar} type="button" aria-label="Sumar un producto">
                Sumar
            </Button>
            <h1>{contador}</h1>
            <Button variant="contained" onClick={restar} type="button" aria-label="Restar un producto">
                Restar
            </Button>

            <Button variant="outlined" onClick={() => onAdd(contador)} type="button" aria-label="Botón agregar producto al carrito">
                Agregar al carrito
            </Button>
        </div>
    );
}