import { Button } from "@/components/ui/button";
import {  useState } from "react";
import ProjectCard from "./ProjectCard";
import { fetchFilteredProjects } from "@/services/projectServices";
import { useQuery } from "@tanstack/react-query";
import { type projectResponse, type IProject, type projectCardData } from "@/interfaces/project.tsx";

export default function LatestProjectSection() {
    const [category, setCategory] = useState("Residential");

    const page = 1;
    const perPage = 3;

    const handleCategoryChange = (value: string) => {
        console.log("Category selected", value);
        setCategory(value);
    };

    const{
        data:postsResponse,
        isLoading,
        error,
    }=useQuery<projectResponse , any>({
        queryKey:["projects",category,page,perPage],
        queryFn:()=>fetchFilteredProjects({category:category,page:page,perPage:perPage}),
    });

    console.log("postResponse::",postsResponse);

    const filteredProjectData:IProject[]=postsResponse?.data.data || [];


    console.log("Retrieved Project Data are:",filteredProjectData);

    return (
        <div className="w-full">
            <div className="m-4">
                <div className="w-full flex flex-col justify-center items-center">
                    <h1>Latest Project</h1>
                </div>
                <hr className="border-2 border-primary m-4" />

                <div className="flex flex-row justify-center gap-4 mb-10">
                    <Button 
                        variant={category === "Residential" ? "default" : "outline"} 
                        onClick={() => handleCategoryChange("Residential")} 
                        className="rounded-full px-6 text-sm sm:text-lg md:text-xl"
                    >
                        Residential
                    </Button>
                    <Button 
                        variant={category === "Commercial" ? "default" : "outline"} 
                        onClick={() => handleCategoryChange("Commercial")} 
                        className="rounded-full px-6 text-sm sm:text-lg md:text-xl"
                    >
                        Commercials
                    </Button>
                    <Button 
                        variant={category === "Apartment" ? "default" : "outline"} 
                        onClick={() => handleCategoryChange("Apartment")} 
                        className="rounded-full px-6 text-sm sm:text-lg md:text-xl"
                    >
                        Apartments
                    </Button>
                </div>

                {/* Conditional Rendering */}
                {isLoading ? (
                    <div className="text-center text-lg font-semibold">Loading projects...</div>
                ) : filteredProjectData.length > 0 ? (
                    <div className="w-full grid grid-cols-1 grid-rows-3  place-items-center sm:grid-cols-3 sm:grid-rows-1 ">
                        {filteredProjectData.map((item:projectCardData, i:number) => (
                            <ProjectCard key={i} item={item} i={i} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center text-lg text-gray-500">No projects found for this category.</div>
                )}
            </div>
        </div>
    );
}