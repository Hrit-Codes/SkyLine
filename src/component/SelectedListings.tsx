import { useEffect, useState } from "react";
import AllSelectings from "../api/AllListingsApi.json"
import ProjectCard from "./ProjectCard";
export default function SelectedListings(){
    const category="Residential";
    const [filteredListings,setFilteredListings]=useState([]);

    useEffect(()=>{
        const filteredList=AllSelectings.filter(item=>item.Category===category);
        setFilteredListings(filteredList);

    },[category])
    return(
        <div className="w-full">
            <div className="m-4 grid grid-cols-3">
                {filteredListings.map((item,i)=>(
                    <ProjectCard key={item.ProjectName} item={item} i={i}/>
                ))}

            </div>
            
        </div>
    )
}