import Slider from "react-slick"
import testimonials from "../api/Testimonials.json";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function TestimonialsSection() {
const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000, // Slower for better UX
        autoplaySpeed: 4000, // Longer delay
        cssEase: "ease-in-out", // Smoother animation
        arrows:false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    centerPadding: "40px",
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1, // ✅ Should show 1 card at 430px
                    centerPadding: "60px", // Add space on sides
                    arrows: false, // Hide arrows on mobile
                }
            },
            {
                breakpoint: 480, // Specifically for mobile
                settings: {
                    slidesToShow: 1,
                    centerPadding: "30px", // Less padding for very small screens
                    arrows: false,
                    dots: true,
                }
            }
        ]
    };


    return (
        <div className="slider-container py-4">
            <Slider {...settings} className="py-4">
                {testimonials.map((t, i) => {
                    return (
                        <div key={i} className="px-2 md:px-4 py-4"> 
                            <Card className="rounded-2xl h-100 mx-auto transition-shadow duration-300 border border-gray-100">
                                <CardContent className="space-y-4 h-full flex flex-col justify-between p-6">
                                    <div className="w-full flex items-center gap-4">
                                        <img 
                                            src={t.img} 
                                            alt={t.name} 
                                            className="w-14 h-14 rounded-full object-cover border-2 border-cyan-100"
                                        />
                                        <div className="flex-1">
                                            <h3 className="font-semibold text-lg">{t.name}</h3>
                                            <p className="text-gray-500 text-sm">{t.date}</p>
                                        </div>
                                        <Quote className="text-gray-300 ml-auto w-8 h-8" />
                                    </div>
                                    <div className="w-full flex-1 flex items-center">
                                        <p className="text-gray-700 leading-relaxed text-wrap break-words italic">
                                            "{t.message}"
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    )
                })}
            </Slider>
        </div>
    )
}