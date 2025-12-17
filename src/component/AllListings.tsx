import { useEffect, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectCardSkeleton from "./ProjectCardSkeleton";
import { ArrowLeft, ArrowRight, Grid } from "lucide-react";
import { Button } from "@/components/ui/button";
import { type AllListingsProps } from "@/interfaces/project";


export default function AllListings({ 
    isLoading, 
    filteredProjectData, 
    prevPage, 
    nextPage, 
    currentPage, 
    totalPages,
    totalMatchedProjects,
    handleViewStatus
}: AllListingsProps) {
    
    const visibleCount = 6;

    const headerRef= useRef<HTMLDivElement>(null);

        const latestProductsSectionRef= useRef<HTMLDivElement>(null);
        console.log("latestProductsSectionRef",latestProductsSectionRef);
    
        const scrollToHeader=()=>{
            headerRef.current?.scrollIntoView({
                behavior:"smooth",
                block:"start"
            });
        };

    const handlePrevPage=()=>{
        prevPage();
        setTimeout(scrollToHeader,50);
    }

    const handleNextPage=()=>{
        nextPage();
        setTimeout(scrollToHeader,50);
    }

    useEffect(()=>{
        scrollToHeader();
    },[currentPage]);
    

    return (
        <div className="w-full px-4 md:px-8 lg:px-16">
            {/* Header with back button */}
            <div ref={headerRef} className="flex justify-between items-center mb-8">
                <h2 className="text-2xl md:text-3xl font-bold">All Listings</h2>
                <Button 
                    variant="outline" 
                    onClick={handleViewStatus}
                    className="flex items-center gap-2"
                >
                    <Grid className="w-4 h-4" />
                    View Featured
                </Button>
            </div>
            
            {/* Responsive Grid */}
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {isLoading ? (
                    Array(visibleCount).fill(0).map((_, index) => (
                        <ProjectCardSkeleton key={index} />
                    ))
                ) : filteredProjectData.length > 0 ? (
                    filteredProjectData.map((item, i) => (
                        <div key={i} className="h-full">
                            <ProjectCard item={item}  />
                        </div>
                    ))
                ) : (
                    <div className="col-span-full text-center py-12">
                        <p className="text-gray-500 text-lg">No properties found with the selected filters.</p>
                    </div>
                )}
            </div>

            {/* Pagination Controls - Only show if we have multiple pages */}
            {totalPages > 1 && (
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-12">
                    <div className="text-sm text-gray-600">
                        Showing page {currentPage} of {totalPages}
                    </div>
                    
                    <div className="flex items-center gap-4">
                        <button 
                            className={`p-3 rounded-full border-primary shadow-sm shadow-primary transition-all duration-200 flex items-center gap-2 hover:cursor-pointer ${currentPage === 1 ? 'opacity-50 cursor-not-allowed bg-gray-100' : 'hover:bg-primary hover:shadow-md'}`}
                            onClick={handlePrevPage}
                            disabled={currentPage === 1}
                        >
                            <ArrowLeft className="w-4 h-4" />
                            <span className="hidden sm:inline">Previous</span>
                        </button>

                        <div>{currentPage}</div>
                        
                        
                        <button 
                            className={`p-3 rounded-full border-primary shadow-sm shadow-primary transition-all duration-200 flex items-center gap-2 hover:cursor-pointer ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed bg-gray-100' : 'hover:bg-primary hover:shadow-md'}`}
                            onClick={handleNextPage}
                            disabled={currentPage === totalPages}
                        >
                            <span className="hidden sm:inline">Next</span>
                            <ArrowRight className="w-4 h-4" />
                        </button>
                    </div>
                    
                    <div className="text-sm text-gray-600">
                        {totalMatchedProjects} properties
                    </div>
                </div>
            )}
        </div>
    );
}