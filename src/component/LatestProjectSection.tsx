import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import { fetchFilteredProjects } from "@/services/projectServices";
import { useQuery } from "@tanstack/react-query";
import { type projectResponse, type projectCardData} from "@/interfaces/project";
import ProjectCardSkeleton from "./ProjectCardSkeleton";

export default function LatestProjectSection() {
    const [propertyType, setPropertyType] = useState("Residential");
    const [visibleCount, setVisibleCount] = useState(3);
    const page = 1;

    useEffect(() => {
        const updateCount = () => {
            const width = window.innerWidth;
            if (width < 640) setVisibleCount(1);
            else if (width < 1024) setVisibleCount(2);
            else setVisibleCount(3);
        };

        updateCount();
        window.addEventListener("resize", updateCount);
        return () => window.removeEventListener("resize", updateCount);
    }, []);

    const handlePropertyTypeChange = (value: string) => {
        setPropertyType(value);
    };

    const { data: postsResponse, isLoading } = useQuery<projectResponse>({
        queryKey: ["projects", propertyType, page, visibleCount],
        queryFn: () =>
            fetchFilteredProjects({
                propertyType:propertyType,
                page: page,
                perPage: visibleCount
            })
    });

    console.log("After query:",postsResponse);

    const filteredProjectData: projectCardData[] =
        postsResponse?.data?.data ?? [];

    console.log(`Property Type : ${propertyType}, page: ${page} perPage:${visibleCount}`);
    console.log("Filtered Project Data", filteredProjectData);

    return (
        <div className="w-full py-6">
            <div className="w-full flex flex-col justify-center items-center p-3">
                <h1 className="text-2xl font-semibold">Latest Project</h1>
            </div>

            <div className="flex flex-row justify-center gap-4 mb-10">
                <Button
                    variant={propertyType === "Residential" ? "default" : "outline"}
                    onClick={() => handlePropertyTypeChange("Residential")}
                    className="rounded-full px-6 text-sm sm:text-lg md:text-xl"
                >
                    Residential
                </Button>

                <Button
                    variant={propertyType === "Commercial" ? "default" : "outline"}
                    onClick={() => handlePropertyTypeChange("Commercial")}
                    className="rounded-full px-6 text-sm sm:text-lg md:text-xl"
                >
                    Commercial
                </Button>

                <Button
                    variant={propertyType === "Apartment" ? "default" : "outline"}
                    onClick={() => handlePropertyTypeChange("Apartment")}
                    className="rounded-full px-6 text-sm sm:text-lg md:text-xl"
                >
                    Apartments
                </Button>
            </div>

            <div className="flex justify-center">
                {isLoading ? (
                    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {Array(visibleCount)
                            .fill(0)
                            .map((_, index) => (
                                <ProjectCardSkeleton
                                    key={`skeleton-${index}`}
                                />
                            ))}
                    </div>
                ) : filteredProjectData.length > 0 ? (
                    <div className="w-full px-5 mx-auto">
                        <div className="grid gap-5 grid-cols-[repeat(auto-fit,minmax(250px,1fr))]">
                            {filteredProjectData.map(
                                (item: projectCardData) => (
                                    <ProjectCard item={item}/>
                                )
                            )}
                        </div>
                    </div>
                ) : (
                    <div className="text-center text-lg text-gray-500">
                        No projects found for this category.
                    </div>
                )}
            </div>
        </div>
    );
}
