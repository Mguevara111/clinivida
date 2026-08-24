import { createContext } from "react";

export type Insurance='PLAN_PREMIUM' | 'PLAN_BASIC' | 'UNINSURED'


export type Specialty='Cardiology' | 'Neurology' | 'Pediatrics' | 'Gastroenterology' | 'General Medicine'

export type Status='CONFIRMED' | 'PENDING'

export type Formappointment=Omit<Appointment,'id' | 'cost' | 'appointmentDate'>

export interface Patient{
    id:string,
    name:string,
    insurancePlan:Insurance,
    maxDailyAppointments:number
}

export interface Doctor{
    id:string,
    name:string,
    specialty:Specialty
    consultationFee:number,
    imageUrl:string 
}

export interface Appointment{
    id:string,
    patientid:string,
    doctorid:string,
    appointmentTime:string,
    appointmentDate:string,
    cost:number,
    status:string
}

export interface Message{
    textmessage:string,
    colormessage:string
}

export interface State{
    doctors:Doctor[],
    patients:Patient[],
    appointments:Appointment[],
    schendules:string[],
    messageinfo:Message | null
}

export interface Context{
    state:State,
    create_appointment:(appointment:Formappointment)=>void
    confirm_appointment:(appointmentid:string)=>void
    set_message:(message:Message)=>void
}

export const CliniContext=createContext<Context | null>(null)