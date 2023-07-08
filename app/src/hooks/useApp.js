import { useContext } from "react";
import { AppContext } from "../context/AppContext";


export const useApp = () => {
    const constext = useContext(AppContext)

    if(constext === undefined){
        throw new Error("useApp must be used within a AppProvider")
    }

    return constext
}
