import ContactSection from "../component/ContactSection.tsx"
import mainFounder from "../assets/images/main_founder.jpg";
import { Button } from "@/components/ui/button.tsx";
import { useNavigate } from "react-router-dom";

export default function ContactPage(){
    const navigate = useNavigate();

    return(
        <div className="w-full bg-section-alternative py-20">
            
            {/* Main Contact Section */}
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12 max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12 lg:py-16 ">
                
                {/* Left Side: Contact Form */}
                <div className="w-full lg:w-1/2 ">
                    <ContactSection/>
                </div>

                {/* Right Side: Founder Image with Testimonial */}
                <div className="hidden lg:w-1/2 lg:block ">
                    <div className="relative h-[400px] md:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-xl">
                        <img
                            src={mainFounder}
                            alt="Skyline Founder Testimonial"
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                        
                        {/* Text Overlay */}
                        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent p-6 md:p-8 flex flex-col justify-end text-white">
                            <blockquote className="text-lg md:text-xl italic mb-4 leading-relaxed">
                                "Not sure what you need? The team at Skyline will be happy to listen to you and fulfill your project ideas even you haven't considered"
                            </blockquote>
                            <p className="text-sm md:text-base font-semibold">- Alliah Lane, Founder, Skyline.co</p>
                        </div>
                    </div>
                </div>

            </div>
            
            {/* Bottom CTA Section */}
                <div className="w-full text-center py-4 ">
                    {/* Headline */}
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
                        Find Your Next Home Today
                    </h1>
    
                    {/* Subtitle */}
                    <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto mb-6 md:mb-8">
                        Browse thousands of verified properties, from cozy apartments to luxurious estates, all tailored to your needs.
                    </p>
                    
                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row justify-center items-center">
                        
                        <Button 
                            variant="default" 
                            size="lg"
                            className="w-auto px-6 py-6 md:px-8 md:py-6 text-white bg-cyan-500 hover:bg-cyan-600 text-base md:text-lg"
                            onClick={() => navigate('/listings')} 
                        >
                            View All Listings
                        </Button>
                    </div>
            </div>

            
        </div>
    );
}