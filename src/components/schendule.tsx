import { useClini } from "../hooks/useClini";
import { useNavigate } from "react-router-dom";
import type { Formappointment } from "../context/context";
import { useState } from "react";
import { validate } from "../helpers/helper";
import { useEffect } from "react";
import { Doctorfile } from "./doctorfile";
import { Menumovil } from "./menumovil";


// import { PDFViewer } from "@react-pdf/renderer";
// import { Pdfdiseno } from "./Pdfdiseno";

const initialform:Formappointment={
    patientid:'',
    doctorid:'',
    appointmentTime:'---',
    status:'PENDING'
}

const recoverlocal=()=>{
    let ls=window.localStorage
    let data=ls.getItem('appo')
    if(data === null){
        //console.log(data)
        return initialform
    }
    return JSON.parse(data)

}

export function Schendule(){
    const [form,setForm]=useState<Formappointment>(()=>recoverlocal())
    const [showdoctor,setShowdoctor]=useState(false)

    const {state,create_appointment,set_message}=useClini()

    const navigate=useNavigate()

    useEffect(()=>{
        if(form.doctorid !== ''){
            setShowdoctor(true)
        }
    },[form.doctorid])

    const changeforminput=(e:React.ChangeEvent<HTMLInputElement>)=>{
        let newinfo={...form,[e.target.name]:e.target.value}
        savestorage(newinfo)
        setForm(newinfo)
        
    }

    const changeformselect=(e:React.ChangeEvent<HTMLSelectElement>)=>{
        let newinfo={...form,[e.target.name]:e.target.value}
        
        setForm(newinfo)
        savestorage(newinfo)
    }

    const savestorage=(info:Formappointment)=>{
        window.localStorage.setItem('appo',JSON.stringify(info))
            
    }
    

    const handlesubmit=(e:React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
        e.preventDefault()
        
        let validation=validate(form,state.patients,state.doctors)

        if(validation.success === false){
            set_message({textmessage:validation.message,colormessage:'bg-yellow-400'})
            return
        }
        
        
        create_appointment(form)
        
        window.localStorage.removeItem('appo')
        set_message({textmessage:'Appointment create successfully',colormessage:'bg-green-400'})
        setForm(initialform)
        navigate('/confirmation',{state:true})
    }

    

    const searchpatient=state.patients.find(el=>el.id === form.patientid)

    const searchdoctor=state.doctors.find(el=>el.id === form.doctorid)

    return(
        <section className="schendule w-full min-h-[calc(100vh-50px)] flex flex-wrap justify-center items-start mt-[1rem]
            md:grid md:grid-cols-[250px_1fr] md:grid-rows-1 md:place-items-center
            lg:h-[calc(100vh-50px)] lg:mt-0 lg:overflow-hidden lg:place-content-center
            
        ">
            <Menumovil></Menumovil>
            <section className="w-[250px] h-screen hidden md:block"></section>

            <div className="shcendule__container w-full min-h-[calc(100vh-50px)] flex flex-col justify-center items-center
                lg:grid lg:grid-cols-2 lg:grid-rows-1 lg:place-items-center
            ">
            <article className="w-[320px] h-[350px] mb-[1rem] flex flex-col justify-center items-center rounded-2xl border-2 border-solid">
                <h2 className="text-2xl font-black mb-[0.5rem] text-center">Schendule Appointment</h2>
                <form className="w-full h-auto flex flex-col justify-center items-center" action="">
                    <p className="font-black mb-[0.5rem]">Patient</p>
                    <input type="text" list="datapatient" name="patientid" autoComplete="off" onChange={changeforminput} value={searchpatient?searchpatient.name:form.patientid}/>
                        <datalist id="datapatient">
                        {state.patients.map(el=>
                            <option key={el.id} value={el.id}>{el.name}</option>
                        )}
                        </datalist>
                    <p className="font-black mb-[0.5rem]">Doctor</p>
                    <input type="text" list="datadoctor" name="doctorid" autoComplete="off" onChange={changeforminput} value={searchdoctor?searchdoctor.name:form.doctorid}/>
                        <datalist id="datadoctor">
                            {state.doctors.map(el=>
                                <option key={el.id} value={el.id}>{el.name}</option>
                            )}
                        </datalist>
                    <p className="font-black mb-[0.5rem]">Appointment Time</p>
                    <select name="appointmentTime" id="" onChange={changeformselect} value={form.appointmentTime}>
                        <option value="---">---</option>
                        {state.schendules.map((el,i)=>
                            <option value={el} key={i}>{el}</option>
                        )}
                    </select>
                    <br />
                    <button className="button" type="submit" onClick={handlesubmit}>Create</button>
                </form>
                
            </article>
            {showdoctor&&<Doctorfile doctorid={form.doctorid}></Doctorfile>}
            {/* <PDFViewer width="100%" height="100%" showToolbar={true}><Pdfdiseno></Pdfdiseno></PDFViewer> */}
            </div>
        </section>
    );
}