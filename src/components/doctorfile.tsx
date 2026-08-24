import { useClini } from "../hooks/useClini"

interface Prop{
    doctorid:string
}

export function Doctorfile({doctorid}:Prop){

    const {state}=useClini()

    if(!doctorid || doctorid === ''){
        return
    }

    const searchdoctorfile=state.doctors.find(el=> el.id === doctorid)

    if(!searchdoctorfile){
        return
    }

    return(
        <section className="doctorfile w-full h-auto flex flex-col justify-center items-center
            lg:h-[calc[100vh-50px]]
        ">
            <article className="w-full h-auto flex flex-col justify-center items-center">
                <h2 className="font-black text-3xl text-center">{searchdoctorfile?.name}</h2>
                <p>Specialty: {searchdoctorfile?.specialty}</p>
                <img className="w-[250px] h-[250px] object-cover object-center rounded-[50%]" src={searchdoctorfile?.imageUrl} alt={searchdoctorfile?.name} />
            </article>
        </section>
    );
}