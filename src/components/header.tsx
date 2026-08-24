
import logo from '../assets/logoipsum-custom-logo.svg'


interface Prop{
    setShowmm:React.Dispatch<React.SetStateAction<boolean>>,
    showmm:boolean
}

export function Header({setShowmm,showmm}:Prop){
   

    const clikcburger=()=>{
        
        setShowmm(prev=>!prev)
    }

    return(
        <section className="header w-full h-[50px] bg-gray-300 flex justify-between items-center p-[1rem] sticky top-0">
            <img className="w-[80px] h-auto object-contain object-center" src={logo} alt="logo" />
            <div className='md:hidden'>
                <button className={`hamburger hamburger--vortex ${showmm?'is-active':''}`} type="button" onClick={clikcburger}>
                        <span className="hamburger-box">
                        <span className="hamburger-inner"></span>
                    </span>
                </button>
            </div>
        </section>
    );
}