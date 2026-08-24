import { Outlet } from "react-router-dom";
import { Message } from "./message";
import { Header } from "./header";
import { Menumovil } from "./menumovil";
import { useState } from "react";

export function Layout(){
    const [showmm,setShowmm]=useState(false)

    return(
        <>
            <Menumovil showmm={showmm} setShowmm={setShowmm} ></Menumovil>
            <Message></Message>
            <Header setShowmm={setShowmm} showmm={showmm}></Header>
            <main>
                <Outlet></Outlet>
            </main>
        </>
    );
}