import Slider from "react-slick";
import ProjectCard from "./ProjectCard";
import ProjectCardSkeleton from "./ProjectCardSkeleton";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Button } from "@/components/ui/button";
import type { ListingSection2Props, projectCardData } from "@/interfaces/project";

export default function ListingSection2({isLoading ,filteredProjectData, handleViewStatus}:ListingSection2Props) {
const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    arrows: false,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                dots: true,
            }
        }
    ]
};

    const visibleCount = 3;

    return (
        <div className="w-full">

            {/* Slider Container - Added overflow-hidden */}
            <div className="slider-container my-14 px-4 md:px-8 lg:px-16 overflow-hidden">
                {isLoading ? (
                    <div className="flex justify-center items-center h-84 gap-6">
                        {Array(visibleCount).fill(0).map((_, index) => (
                            <ProjectCardSkeleton key={`skeleton-${index}`} />
                        ))}
                    </div>
                ) : filteredProjectData.length > 0 ? (
                    <>
                        <Slider {...settings}>
                            {filteredProjectData.map((item: projectCardData, i: number) => (
                                <div key={i} className="px-2 md:px-2 py-4">
                                    <ProjectCard item={item} />
                                </div>
                            ))}
                        </Slider>
                    </>
                ) : (
                    <div className="text-center py-12">
                        <p className="text-gray-500 text-lg">No properties found with the selected filters.</p>
                    </div>
                )}
            </div>
            
            <div className="w-full flex justify-center py-10">
                <Button variant="default" onClick={handleViewStatus}>
                    View All Projects
                </Button>
            </div>
        </div>
    );
}