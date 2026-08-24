import type { Appointment, Formappointment } from "../context/context"
import type { Doctor } from "../context/context"
import type { Patient } from "../context/context"



export const validate=(myform:Formappointment,patients:Patient[],doctors:Doctor[])=>{
    const {patientid,doctorid,appointmentTime}=myform
   
    const searchpatient=patients.find(el=>el.id === patientid)
    const searchdoctor=doctors.find(el=>el.id === doctorid)

    if(appointmentTime === '---'){
        return {success:false,message:'You must choose a valid Time'}
    }

    if(patientid === '' || !searchpatient){
        return {success:false,message:'You must choose a valid patient'}
    }

    if(doctorid === '' || !searchdoctor){
        return {success:false,message:'You must choose a valid doctor'}
    }

    return {success:true,message:''}
}


export const validatedates=(appointments:Appointment[],patient:Patient,doctor:Doctor,at:string)=>{

    const getTodayString = (): string => {
        const today = new Date();
        const year = today.getFullYear();
        // String().padStart(2, '0') asegura que el mes 8 sea '08'
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const day = String(today.getDate()).padStart(2, '0');
        
        return `${year}-${month}-${day}`; // Retorna p. ej. '2026-08-13'
    };

    
    

    const appointmentsforpatient=appointments.filter(el=>el.patientid === patient.id)
    const searchpatientdate=appointmentsforpatient.filter(el=>Date.parse(el.appointmentDate) === Date.parse(getTodayString()))
    //console.log(searchpatientdate)
    if(searchpatientdate.length >= patient.maxDailyAppointments){
        return {success:false,message:'Patient has search maximun limit of appointments'}
    }


    //validacion en 1 hora no permite 2 citas
    const searchdoctorappointments=appointments.filter(el=>{
        if(el.doctorid === doctor.id && el.appointmentTime === at){
            return el
        }
    })
    //console.log(searchdoctorappointments)
    if(searchdoctorappointments.length !== 0){
        return {success:false,message:`The doctor ${doctor.name} already has an appointment at ${at}`}
    }

    return {success:true,message:''}
}