import { useNavigate } from "react-router-dom";
import { useClini } from "../hooks/useClini";
import { PDFDownloadLink } from "@react-pdf/renderer";
//import { PDFViewer } from "@react-pdf/renderer";
import { Pdftemplate } from "./Pdftemplate";
import { Schendule } from "./schendule";

export function Confirmation(){

    const navigate=useNavigate()
    const {state:contextstate,confirm_appointment}=useClini()
    
    if(contextstate.appointments.length === 0){
        return (
            <Schendule></Schendule>
        );
    }

    const handleconfirm=(id:string)=>{
        confirm_appointment(id)
        navigate('/record')
    }


    let currentappointment=contextstate.appointments[contextstate.appointments.length-1]

    const searchpatient=contextstate.patients.find(el=>el.id === currentappointment.patientid)
    const searchdoctor = contextstate.doctors.find(el=>el.id === currentappointment.doctorid)

    if(!searchdoctor || ! searchpatient){
        return
    }
    
    const discount=()=>{
        if(searchpatient?.insurancePlan === 'PLAN_BASIC'){
            return '50%'
        }else if(searchpatient?.insurancePlan === 'PLAN_PREMIUM'){
            return '80%'
        }else{
            return '0%'
        }
    }

    return(
        <section className="confirmation w-full h-[calc(100vh-50px)] flex flex-col justify-start items-center">
            <h2 className="font-bold text-3xl text-center">Appointment confirmation</h2>
            <article className="w-full h-auto flex flex-col justify-center items-center p-[0.3rem]">
                <div className="w-full h-auto flex flex-col justify-center items-start mb-[1rem] md:items-center">
                    <h3 className="font-bold text-2xl">Appointment:</h3>
                    <p>Patient: {searchpatient?.name}</p>
                    <p>Appointment Date: {currentappointment.appointmentDate}</p>
                    <p>Appointment Time: {currentappointment.appointmentTime}</p>
                </div>
                <div className="w-full h-auto flex flex-col justify-center items-start mb-[1rem] md:items-center">
                    <h3 className="font-bold text-2xl">Costs</h3>
                    <p>Appointment Value: ${searchdoctor?.consultationFee}</p>
                    <p>Discount: {discount()}</p>
                    <p className="font-bold">Total: ${currentappointment.cost}</p>
                </div>
                <div className="w-full h-auto flex flex-col justify-center items-start mb-[1rem] md:items-center">
                    <h3 className="font-bold text-2xl">Doctor</h3>
                    <p>Doctor: {searchdoctor?.name}</p>
                    <p>Speciality: {searchdoctor?.specialty}</p>
                </div>
                <div className="w-full h-auto flex justify-between items-center p-[1rem] md:w-[40%]">
                    
                    <PDFDownloadLink className="button" style={{width:'16ch'}} document={<Pdftemplate ca={{currentappointment,searchpatient,searchdoctor}}></Pdftemplate>}>Download PDF</PDFDownloadLink>
                    
                    <button className="button" onClick={()=>handleconfirm(currentappointment.id)}>Confirm</button>
                </div>
            </article>
        </section>
    );
}