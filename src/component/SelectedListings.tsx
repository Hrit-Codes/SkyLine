import ProjectCard from "./ProjectCard";
import type { projectCardData } from "@/interfaces/project";

interface Props{
    data:[projectCardData]
}
export default function SelectedListings({data}:Props){

    return(
        <div className="w-full">
            <div className="m-4 grid grid-cols-1 place-items-center md:grid-cols-2 xl:grid-cols-3 ">
                {data.map((item:projectCardData)=>(
                    <div className="w-90 md:w-80 lg:w-110 xl:w-100 2xl:w-120 h-150 shrink-0 ">
                        <ProjectCard  item={item} />
                    </div>
                ))}
            </div>
            
        </div>
    )
}