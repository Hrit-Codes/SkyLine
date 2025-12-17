import { useState, useEffect } from "react";
import ListingSection2 from "@/component/ListingSection2.tsx";
import { type filterSelection, type projectCardData } from "@/interfaces/project";
import SelectionFiltersSection from "@/component/SelectionFiltersSection";
import { getAllFilteredProjects } from "@/services/projectServices";
import AllListings from "@/component/AllListings";
import PageBanner from "@/component/PageBanner";

export default function ListingsPage() {
    const [selectedFilters, setSelectedFilters] = useState<filterSelection>({
        propertyType: "Residential",
        priceRange: null,
        city: null,
    });
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [totalPages, setTotalPages] = useState<number>(0);
    const [filteredProjectData, setFilteredProjectData] = useState<projectCardData[]>([]);
    const [viewAllProductsStatus, setViewAllProductsStatus] = useState<boolean>(false);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [perPage, setPerPage] = useState<number>(5);
    const [totalMatchedProjects,setTotalMatchedProjects]=useState<number>(0);

    // --- Filter Change Handler ---
    const handleSelectChange = (key: string, value: string) => {
        setSelectedFilters(prev => ({
            ...prev,
            [key]: value === "All" ? null : value,
        }));
    };

    console.log("Selected Filters:",selectedFilters);

    const handleViewStatus = () => {
        setViewAllProductsStatus(!viewAllProductsStatus);
        setPerPage(viewAllProductsStatus ? 5 : 6);
        setCurrentPage(1); 
    };

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const params = { ...selectedFilters, page: currentPage, perPage };
                const result = await getAllFilteredProjects(params);

                const total = result.data.totalMatchedProjects;
                setTotalPages(Math.ceil(total / Number(perPage)));
                setTotalMatchedProjects(result.data.totalMatchedProjects);

                const newData = result.data.data || [];
                setFilteredProjectData(newData);
            } catch (error) {
                console.error("Fetch failed:", error);
                setFilteredProjectData([]);
            } finally {
                setIsLoading(false);
            }
        };
        fetchData();
    }, [selectedFilters, currentPage, perPage]);

    const nextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(prev => prev + 1);
        }
    };

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(prev => prev - 1);
        }
    };

    return (
        <div className="w-full bg-section-alternative">
            <PageBanner page="Listings"/>
            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-16 px-4 md:px-8 lg:px-16 py-8 md:py-12">
                <div className="lg:w-2/5">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 lg:mb-6">
                        Discover your <span className="italic text-primary">Best match</span>
                    </h1>
                </div>
                <div className="lg:w-3/5">
                    <p className="text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed">
                        We connect you with premium properties, tailored to your unique lifestyle and needs.
                        Our curated selection ensures you find the perfect match, backed by expert guidance.
                    </p>
                </div>
            </div>

            <SelectionFiltersSection handleSelectChange={handleSelectChange} selectedFilters={selectedFilters} />

            {viewAllProductsStatus ? (
                <AllListings 
                    isLoading={isLoading} 
                    filteredProjectData={filteredProjectData} 
                    prevPage={prevPage} 
                    nextPage={nextPage} 
                    currentPage={currentPage}
                    totalPages={totalPages}
                    handleViewStatus={handleViewStatus}
                    totalMatchedProjects={totalMatchedProjects}
                />
            ) : (
                <ListingSection2 
                    isLoading={isLoading} 
                    filteredProjectData={filteredProjectData} 
                    handleViewStatus={handleViewStatus} 
                />
            )}
        </div>
    );
}