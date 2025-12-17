import Slider from "react-slick";
import testimonials from "../api/Testimonials.json";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";
import { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function TestimonialsSection() {
    const [windowWidth, setWindowWidth] = useState(
        typeof window !== "undefined" ? window.innerWidth : 1200
    );

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const getSlidesToShow = () => {
        if (windowWidth <= 640) return 1;
        if (windowWidth <= 1024) return 2;
        return 3;
    };

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: getSlidesToShow(),
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 4000,
        cssEase: "ease-in-out",
        arrows: false,
    };

    return (
        <div className="slider-container py-4 overflow-hidden">
            <Slider {...settings} className="py-4">
                {testimonials.map((t, i) => (
                    <div
                        key={i}
                        className="px-2 md:px-4 py-4 h-full flex"
                    >
                        {/* CARD */}
                        <Card className="rounded-2xl mx-auto border border-gray-100 h-full w-full flex flex-col min-h-[300px] md:min-h-[320px] shadow-sm hover:shadow-md transition-shadow duration-300">
    <CardContent className="p-6 h-full flex flex-col gap-4 flex-1">
        
        {/* Header - Fixed height */}
        <div className="w-full flex items-center gap-4 min-h-[56px]">
            <img
                src={t.img}
                alt={t.name}
                className="w-14 h-14 rounded-full object-cover border-2 border-cyan-100 flex-shrink-0"
            />
            <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-lg truncate">{t.name}</h3>
                <p className="text-gray-500 text-sm">{t.date}</p>
            </div>
            <Quote className="text-gray-300 w-8 h-8 flex-shrink-0" />
        </div>

        {/* Message - Flexible height */}
        <div className="flex-1 flex flex-col justify-center min-h-[120px]">
            <p className="text-gray-700 italic break-words line-clamp-5 leading-relaxed">
                "{t.message}"
            </p>
        </div>
    </CardContent>
</Card>
                    </div>
                ))}
            </Slider>
        </div>
    );
}
