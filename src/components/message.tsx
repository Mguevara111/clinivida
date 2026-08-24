import { useClini } from "../hooks/useClini";
import type { Message } from "../context/context";


export function Message(){


    const {state}=useClini()

    if(!state.messageinfo){
        return
    }

    return(
        <section className={`message w-full h-[50px] flex justify-center items-center font-black fixed top-0 z-100 ${state.messageinfo.colormessage}`}>
            <h2>{state.messageinfo.textmessage}</h2>
        </section>
    );
}