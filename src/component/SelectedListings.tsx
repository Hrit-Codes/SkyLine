import ProjectCard from "./ProjectCard";
import type { projectCardData } from "@/interfaces/project";
export default function SelectedListings(props){
    const {data}=props;

    return(
        <div className="w-full">
            <div className="m-4 grid grid-cols-3">
                {data.map((item:projectCardData,i:number)=>(
                    <div className="w-90 h-150 sm:w-120 shrink-0 ">
                        <ProjectCard key={i} item={item} i={i}/>
                    </div>
                ))}
            </div>
            
        </div>
    )
}