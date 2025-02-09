// import { useAuthContext } from "@/context/AuthContext";
// import { redirect } from "next/navigation";
// import { useEffect } from "react";

export default function AdminLayout ({ children }) { //, login
    // const { user } = useAuthContext()

    // useEffect(() => {
    //     if (user.logged == true){
    //         redirect("/admin/panel")
    //     }else{
    //         redirect("/admin/login")
    //     }
    // }, [user.logged])


    return (
        <>
            {/* {
                user.logged
                    ? children
                    : <p>no logueado</p>// : login 
            } */}{children}
        </>
    )
}