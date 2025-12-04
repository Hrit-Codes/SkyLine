import { useEffect, useState } from "react";
import LargeScreenNavbar from "./LargeScreenNavbar.tsx";
import SmallScreenNavbar from "./SmallScreenNavbar.tsx";


export default function Header(){

    const[navbarSelect, setNavbarSelect]=useState(0);

    useEffect(()=>{
        const updateNavbarSelect=()=>{
            const newSelect=window.innerWidth<768?0:1;
            setNavbarSelect(newSelect);
        }
        updateNavbarSelect();

        window.addEventListener(`resize`,updateNavbarSelect);
        return ()=> window.removeEventListener(`resize`,updateNavbarSelect);
    })
    return(
        <div>
            {navbarSelect===0?(
            <SmallScreenNavbar/>
            ):(
            <LargeScreenNavbar/>
            )}
        </div>
    )
}