import { useClini } from "../hooks/useClini";
import { useNavigate } from "react-router-dom";
//import { Link } from "react-router-dom";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { Pdftemplate } from "./Pdftemplate";
import type { Appointment } from "../context/context";
import type { Patient } from "../context/context";
import type { Doctor } from "../context/context";

export function Record(){

    const navigate=useNavigate()
    const {state}=useClini()

    if(state.appointments.length === 0){
        return(
            <>
                    <article className="w-full h-[calc(100vh-50px)] flex justify-center items-center">
                        <section className="w-[250px] h-[calc(100vh-50px)] hidden md:block"></section>
                        <section className="w-full h-[calc(100vh-50px)] flex flex-col justify-center items-center">
                        <h2 className="text-2xl font-black">Records</h2>
                        <h2 className="text-2xl font-black">No data to show</h2>
                        </section>
                    </article>
                
            </>
            
        );
    }
    
    const searchdata=(doctorid:string,patientid:string)=>{
        const searchdoctor=state.doctors.find(el=>el.id === doctorid)
        const searchpatient=state.patients.find(el=>el.id === patientid)
        if(!searchdoctor || !searchpatient){
            return {doctor:'',patient:''}
        }
        return {doctor:searchdoctor.name,patient:searchpatient.name}
    }
    
    const currentappointment=(ida:string):Appointment=>{
        const appoint=state.appointments.find(el=>el.id === ida)
        if(!appoint){
            return {
                id:'',
                patientid:'',
                doctorid:'',
                appointmentTime:'',
                appointmentDate:'',
                status:'PENDING',
                cost:0
            }
        }
        return appoint
    }

    const spatient=(idpa:string):Patient=>{
        const search=state.patients.find(el=>el.id === idpa)
        if(!search){
            return {
                id:'',
                name:'',
                insurancePlan:'UNINSURED',
                maxDailyAppointments:0
            }
        }

        return search
    }
    
    const sdoctor=(iddo:string):Doctor=>{
        const search=state.doctors.find(el=>el.id === iddo)
        if(!search){
            return {
                id:'',
                name:'',
                consultationFee:0,
                specialty:'Cardiology',
                imageUrl:''
            }
        }

        return search
    }
    

    return(
        <section className="record w-full min-h-[calc(100vh-50px)] flex flex-col justify-start items-center">
            
            <h2 className="text-2xl font-black mb-[2rem] mt-[1rem]">Records</h2>
            <div className="w-full h-auto md:grid md:grid-cols-[250px_1fr] md:grid-rows-1">
                <article className="w-[250px] h-screen hidden md:block"></article>
                <article className="w-full h-auto flex flex-wrap justify-center items-start">
                    
                    {state.appointments.map(el=>
                        <div className="w-[250px] h-[250px] flex flex-col justify-center items-center border-4 border-solid rounded-2xl m-[1rem]" key={el.id}>
                            <p>Doctor: {searchdata(el.doctorid,el.patientid).doctor}</p>
                            <p>Patient: {searchdata(el.doctorid,el.patientid).patient}</p>
                            <p>Appointment Date:{el.appointmentDate}</p>
                            <p>Appointment Time:{el.appointmentTime}</p>
                            <p>Cost: ${el.cost}</p>
                            <p>Status: {el.status}</p>
                            <PDFDownloadLink className="button" style={{width:'16ch'}} document={<Pdftemplate ca={{currentappointment:currentappointment(el.id),searchpatient:spatient(el.patientid),searchdoctor:sdoctor(el.doctorid)}}></Pdftemplate>}>Download PDF</PDFDownloadLink>
                        </div>
                    )}
                </article>
            </div>
            <div className="w-[90%] h-[50px] flex justify-center items-center bg-gray-300 p-[1rem] rounded-2xl fixed bottom-2
                md:right-10 md:w-[calc(100vw-350px)]
            ">
                {/* <button className="button" onClick={()=>navigate(-1)}>Return</button> */}
                <button className="button" style={{width:'19ch'}} onClick={()=>navigate('/schendule')}>New Appointment</button>
            </div>
        </section>
    );
}