import downArrow from "../assets/images/down-arrow.png";
import ModernHouse from "@/assets/images/ModernHouse.jpg";

interface Props {
    onScrollDown: () => void
}

export default function HomeBannerSection({ onScrollDown }: Props) {
    return (
        <div className="relative w-full h-[650px] overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: `url(${ModernHouse})`}}>
                {/* Seamless white gradient - IMPORTANT: reduced z-index */}
                <div className="absolute bottom-0 left-0 right-0 h-[60%] bg-gradient-to-t from-section-alternative via-section-alternative/70 to-transparent z-10"></div>
            </div>
            
            {/* Main Text Overlay - increased z-index */}
            <div className="relative z-20 h-full flex flex-col justify-center items-center px-4 text-center">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4 font-montserrat drop-shadow-lg">
                    Find Properties
                </h1>
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-6 font-montserrat drop-shadow-lg">
                    That Make You Money
                </div>
            </div>
            
            {/* Down Arrow Button - increased z-index */}
            <div className="absolute bottom-8 right-8 z-30">
                <button onClick={() => onScrollDown()} className="mt-6 p-2 rounded-full border-b border-primary ease-in-out hover:cursor-pointer hover:bg-section-alternative animate-bounce [animation-duration-2s] repeat-infinite">
                    <img 
                        src={downArrow} 
                        alt="Down Arrow" 
                        className="w-10 h-10" 
                    />
                </button>
            </div>
        </div>
    );
}