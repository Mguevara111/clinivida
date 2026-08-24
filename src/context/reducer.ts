import type { State } from "./context"
import type { Appointment } from "./context"
import type { Message } from "./context"

type Action = 
| {type:'create_a',payload:Appointment} 
| {type:'confirm_a',payload:string} 
| {type:'set_message',payload:Message | null}

export const cliReducer=(state:State,action:Action)=>{
    switch(action.type){
        case 'create_a':

        return {
            ...state,
            appointments:[...state.appointments,action.payload]
        }

        case 'confirm_a':
            const confirmp=state.appointments.map(el=>{
                if(el.id === action.payload){
                    return {
                        ...el,
                        status:'CONFIRMED'
                    }
                }else{
                    return el
                }
            })

        return {
            ...state,
            appointments:confirmp
        }

        case 'set_message':

        return {
            ...state,
            messageinfo:action.payload
        }

        default:

        return state
    }
}