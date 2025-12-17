import BannerImage from "@/assets/images/BannerImage.jpg";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface Props {
    page:string
}

export default function HomeBannerSection({page}:Props) {
    const navigate= useNavigate();
    return (
        <div className="relative w-full h-[650px] overflow-hidden ">
            <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: `url(${BannerImage})`}}>
                <div className="absolute bottom-0 left-0 right-0 h-[60%] bg-gradient-to-t from-section-alternative via-section-alternative/70 to-transparent"></div>
            </div>
            <div className="relative z-10 h-full flex flex-col justify-center items-center px-4 text-center">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-lg [text-shadow:_1px_1px_2px_black]">
                    {page}
                </h1>
                <div className="text-3xl md:text-4xl font-bold text-white mb-6  drop-shadow-lg [text-shadow:_1px_1px_2px_black] backdrop-blur-xs ">
                    <div className="flex flex-row items-center justify-center gap-2"><span onClick={()=>navigate("/")} className="hover:text-primary hover:cursor-pointer">Home</span> <ArrowRight size={40} /> <span className="text-primary">{page}</span></div>
                </div>
            </div>
        </div>
    );
}