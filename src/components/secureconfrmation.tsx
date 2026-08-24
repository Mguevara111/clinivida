import { Confirmation } from "./confirmation"
//import { useLocation } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { useClini } from "../hooks/useClini";

export const Secureconfirmation=()=>{

    
    const {state}=useClini()

    if(state.appointments.length === 0){
        return <Navigate to="/schendule" replace />;
    }

    return(
        <Confirmation></Confirmation>
    );
}