import { CliniContext } from "./context";
import { useReducer } from "react";
import type { ReactNode } from "react";
import type { Appointment, State,Formappointment } from "./context";
import { INITIAL_DOCTORS } from "../data/doctors";
import { INITIAL_PATIENTS } from "../data/patients";
import { AVAILABLE_SLOTS } from "./schendules";
import { cliReducer } from "./reducer";
import type { Message } from "./context";
import { useEffect } from "react";
import { validatedates } from "../helpers/helper";


interface Childrenprop{
    children:ReactNode
}

const initialstate:State={
    doctors:INITIAL_DOCTORS,
    patients:INITIAL_PATIENTS,
    appointments:[],
    schendules:AVAILABLE_SLOTS,
    messageinfo:null
}

export const CliniContextProvider=({children}:Childrenprop)=>{
    const [state,dispatch]=useReducer(cliReducer,initialstate)

    useEffect(()=>{
        if(state.messageinfo?.textmessage){
            let tu=setTimeout(() => {
                dispatch({type:'set_message',payload:null})
            }, 3000);

            return ()=>clearTimeout(tu)
        }
    },[state.messageinfo?.textmessage])

    const create_appointment=(appointment:Formappointment)=>{
        let insurancecover;
        const searchpatient=state.patients.find(el=>el.id === appointment.patientid)
        const searchdoctor=state.doctors.find(el=>el.id === appointment.doctorid)
        
        if(!searchpatient){
            
            dispatch({ type: 'set_message', payload: { textmessage: 'Cant find patient', colormessage: 'bg-red-400' } });
            return;
        }
        

        if(!searchdoctor){
            dispatch({ type: 'set_message', payload: { textmessage: 'Cant find doctor', colormessage: 'bg-red-400' } });
            return;
        }

        let validatedate=validatedates(state.appointments,searchpatient,searchdoctor,appointment.appointmentTime)

        if(!validatedate.success){
            throw dispatch({type:'set_message',payload:{textmessage:validatedate.message,colormessage:'bg-red-400'}})
        }
        

        if(searchpatient.insurancePlan === 'PLAN_BASIC'){
            insurancecover=searchdoctor.consultationFee-(searchdoctor.consultationFee*0.5)
        }else if(searchpatient.insurancePlan === 'PLAN_PREMIUM'){
            insurancecover=searchdoctor.consultationFee-(searchdoctor.consultationFee*0.8)
        }else{
            insurancecover=searchdoctor.consultationFee
        }


        let newappointment:Appointment={
            id:crypto.randomUUID(),
            patientid:appointment.patientid,
            doctorid:appointment.doctorid,
            appointmentTime:appointment.appointmentTime,
            appointmentDate:new Date().toISOString().slice(0, 10),
            cost:insurancecover,
            status:'PENDING'
        }

        dispatch({type:'create_a',payload:newappointment})
    }

    const confirm_appointment=(appointmentid:string)=>{
        dispatch({type:'confirm_a',payload:appointmentid})
    }

    const set_message=(message:Message)=>{
        dispatch({type:'set_message',payload:message})
    }

    return(
         <CliniContext.Provider value={{state,create_appointment,confirm_appointment,set_message}}>
            {children}
         </CliniContext.Provider>
    );
}