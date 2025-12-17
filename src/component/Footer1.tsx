import { useNavigate } from "react-router-dom";
import companyLogo from "../assets/images/CompanyLogo.svg";
import { Instagram, Facebook, Twitter, Linkedin, ArrowRight, MapPin, Phone, Mail , Heart } from "lucide-react";
import pages from "./Pages";

export default function Footer() {

    const navigate=useNavigate();
    return(
        <div className="w-full border-t-2 border-primary bg-primary text-white">
            <div className="p-4 py-8 grid space-y-12 grid-cols-1 grid-rows-2 md:grid-cols-3 md:grid-rows-1">
                <div className="flex flex-col items-center gap-4">

                    <div className="flex flex-row items-center gap-3">
                        <img src={companyLogo} alt="Company Logo" />
                        <h1 className="text-xl font-bold ">Skyline</h1>
                    </div>

                    <p className="text-center text-white">
                        Join hands with skyline and turn your property goals into reality
                    </p>

                    <div className="flex flex-row justify-center items-center gap-5">
                        <div 
                                className="group w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center 
                                        hover:scale-110 hover:cursor-pointer transition-all duration-200 
                                        hover:-translate-y-1 hover:shadow-md hover:bg-primary"
                                title="Instagram"
                            >
                                <Instagram 
                                    className="w-7 h-7 text-gray-600 group-hover:text-white transition-colors duration-200"
                                />
                            </div>
                            
                            {/* Facebook */}
                            <div 
                                className="group w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center 
                                        hover:scale-110 hover:cursor-pointer transition-all duration-200 
                                        hover:-translate-y-1 hover:shadow-md hover:bg-primary"
                                title="Facebook"
                            >
                                <Facebook 
                                    className="w-7 h-7 text-gray-600 group-hover:text-white transition-colors duration-200"
                                />
                            </div>
                            
                            {/* Twitter/X */}
                            <div 
                                className="group w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center 
                                        hover:scale-110 hover:cursor-pointer transition-all duration-200 
                                        hover:-translate-y-1 hover:shadow-md hover:bg-primary"
                                title="Twitter"
                            >
                                <Twitter 
                                    className="w-7 h-7 text-gray-600 group-hover:text-white transition-colors duration-200"
                                />
                            </div>
                            
                            {/* LinkedIn */}
                            <div 
                                className="group w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center 
                                        hover:scale-110 hover:cursor-pointer transition-all duration-200 
                                        hover:-translate-y-1 hover:shadow-md hover:bg-primary"
                                title="LinkedIn"
                            >
                                <Linkedin 
                                    className="w-7 h-7 text-gray-600 group-hover:text-white transition-colors duration-200"
                                />
                            </div>

                    </div>

                </div>

                <div className="hidden  md:flex flex-col items-center justify-center">
                    <div className="w-30 flex flex-col gap-6">
                    <h1>Pages</h1>

                    {pages.map((page) => (
                    <div key={page.Label} className="flex items-center gap-3 cursor-pointer" onClick={() => navigate(page.Value)}>
                        <span className="w-5 flex justify-center">
                        <ArrowRight size={18} className="shrink-0" />
                        </span>
                        <div className="leading-none text-xl hover:text-white">{page.Label}</div>
                    </div>
                    ))}
                    </div>

                </div>

                <div className="flex flex-col items-center gap-4">
                    <h1>Have a Questions?</h1>

                    <div className="flex flex-row items-center gap-2">
                        <MapPin/><p>Skyline, Putalisadak, Kathmandu</p>
                    </div>

                    <div className="flex flex-row items-center gap-2">
                        <Phone/><p>+2 392 3929 210</p>
                    </div>

                    <div className="flex flex-row items-center gap-2">
                        <Mail/><p>skyline@yourdomain.com</p>
                    </div>
                </div>

            </div>

            <div className="w-full flex justify-center items-center pb-5 px-5">
                <p className="flex flex-wrap justify-center items-center gap-1 text-center">
                    <span>Copyright © 2025 All rights reserved | This template is made with
                    <Heart className="inline-block w-4 h-4 mx-2" />
                    by Hrit Amatya</span>
                </p>

            </div>
        </div>
    )
}
