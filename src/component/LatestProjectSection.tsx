
import { Button } from "@/components/ui/button";
import projects from "../api/LatestProjectApi.json";
import { useState } from "react";
import ProjectCard from "./ProjectCard";
export default function LatestProjectSection(){
    const [category, setCategory]=useState("Residential");

    const handleCategoryChange=(value:string)=>{
        console.log("Category selected",value);
        setCategory(value)
    }

    return(
        <div className="w-full">
            <div className="m-4">
                <div className="w-full flex flex-col justify-center items-center">
                    <h1>Latest Project</h1>
                </div>
                <hr className="border-2 border-primary m-4"/>

                {/*Category Buttons*/}
                <div className="flex flex-row justify-center gap-4 mb-10">
                    <Button variant={category==="Residential"?"default":"outline"} onClick={()=>handleCategoryChange("Residential")} className="rounded-full px-6 text-sm sm:text-lg md:text-xl">
                        Residential
                    </Button>
                    <Button variant={category==="Commercial"?"default":"outline"} onClick={()=>handleCategoryChange("Commercial")} className="rounded-full px-6 text-sm sm:text-lg md:text-xl">
                        Commercial
                    </Button>
                    <Button variant={category==="Apartments"?"default":"outline"} onClick={()=>handleCategoryChange("Apartments")} className="rounded-full px-6 text-sm sm:text-lg md:text-xl">
                        Apartments
                    </Button>
                </div>

                <div className="w-full grid grid-cols-1 grid-rows-3 md:grid-cols-3 md:grid-rows-1 ">
                    {projects.filter(item=>item.Category===category).map((item,i)=>(
                        <ProjectCard item={item} i={i}/>
                    ))}




                </div>


                

            </div>

        </div>
    )
}