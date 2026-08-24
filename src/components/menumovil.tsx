import logo from '../assets/logoipsum-custom-logo.svg'
import { Link } from 'react-router-dom';

interface Prop{
    showmm?:boolean,
    setShowmm?: React.Dispatch<React.SetStateAction<boolean>>
}

export const Menumovil=({showmm,setShowmm}:Prop)=>{



    return(
        <section className={`${showmm?'block':'hidden'} menumovil w-[254px] h-screen bg-linear-to-r from-cyan-500 to-blue-400 fixed top-0 left-0 z-50 flex flex-col justify-center items-center p-[1rem]
            md:flex md:h-[calc(100vh-50px)] md:top-[50px] md:bg-linear-to-r md:from-gray-300 md:to-gray-500
        `}>

            <ul className="w-full h-auto flex flex-col justify-center items-center mb-[3rem]">
                <Link to="/schendule">
                <li className='w-full font-bold text-white text-2xl mb-[2rem] border-b-4 border-b-solid text-center' onClick={()=>setShowmm&&setShowmm(false)}>Create Appointment</li>
                </Link>
                <Link to="/record">
                <li className='w-full font-bold text-white text-2xl mb-[2rem] border-b-4 border-b-solid text-center' onClick={()=>setShowmm&&setShowmm(false)}>See Records</li>
                </Link>
            </ul>
            <img className='w-[90%] h-auto object-contain object-center' src={logo} alt="logo" />
        </section>
    );
}