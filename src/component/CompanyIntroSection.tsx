import modernHouse from "../assets/images/ModernHouse.jpg"
import downArrow from "../assets/images/down-arrow.png";

interface Props{
    onScrollDown:()=>void

}
export default function CompanyIntroSection({onScrollDown}:Props){
    return(
        <div className="w-full bg-section">
            <div className="flex flex-col md:flex-row ">

                {/* Left Image */}
                <div className="w-full min-h-fit flex justify-center items-center md:w-1/2">
                    <img src={modernHouse} alt="Modern House" className="w-full" />
                </div>

                {/* Right Section */}
                {/* The 'relative' class is no longer needed since we removed absolute positioning on the arrow */}
                <div className="w-full md:w-1/2 flex flex-col justify-center items-center py-6">

                    {/* Text Content */}
                    <div className="m-4 flex flex-col justify-center items-center space-y-2">
                        <h1>We Redefine Real Estate</h1>
                        <h3>Innovation & Trust</h3>

                        <p className="w-10/12 text-center">
                            At skyline, we are dedicated to transforming real estate 
                            with innovation, integrity and excellence
                        </p>
                    </div>

                    {/* Arrow at Bottom - Now centered using parent flexbox */}
                    <button 
                        onClick={() => onScrollDown()}
                        className="mt-6 p-2 rounded-full ease-in-out hover:cursor-pointer 
                                   animate-bounce [animation-duration-2s] repeat-infinite"
                    >
                        <img 
                            src={downArrow} 
                            alt="Down Arrow" 
                            // Removed absolute and fixed width/height
                            className="w-10 h-10" 
                        />
                    </button>

                </div>

            </div>
        </div>
    )
}