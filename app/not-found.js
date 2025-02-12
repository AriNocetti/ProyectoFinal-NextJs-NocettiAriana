"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function notFoundPage() {
    const router = useRouter();

    return(

        <>
        <main className="flex flex-col justify-center items-center mt-20 bg-white ">
            <Image
                src="/not-found.webp"
                alt="Not found"
                width={300}
                height={300}
            />
            <p className="text-lg font-semibold text-[#ff76a8] -mt-4 mb-4 text-center">Página no encontrada</p>

            <button
                onClick={() => router.back()}
                type="button"
                className="border rounded-3xl px-8 py-1 text-lg font-semibold border-[#ff76a8] text-[#ff76a8] hover:bg-[#ff76a8] hover:text-[white]"
            >
                Volver
            </button> 
        </main>
        </>
    )
}