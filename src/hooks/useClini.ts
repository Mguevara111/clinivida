import { useContext } from "react"
import { CliniContext } from "../context/context"

export const useClini=()=>{
    const context=useContext(CliniContext)

    if(!context) throw new Error('cant get context')
    
    return context
}