import modernHouse from "../assets/images/ModernHouse.jpg"
import downArrow from "../assets/images/down-arrow.png";

export default function CompanyIntroSection(props){
    return(
        <div className="w-full">
            <div className="m-2 flex flex-col md:flex-row">

                {/* Left Image */}
                <div className="w-full min-h-fit flex justify-center items-center md:w-1/2">
                    <img src={modernHouse} alt="Modern House" className="w-full" />
                </div>

                {/* Right Section */}
                <div className="w-full md:w-1/2 relative flex flex-col justify-center items-center py-6">

                    <div className="m-4 flex flex-col justify-center items-center">
                        <h1>We Redefine Real Estate</h1>
                        <h3>Innovation & Trust</h3>

                        <p className="w-10/12 text-center">
                            At skyline, we are dedicated to transforming real estate 
                            with innovation, integrity and excellence
                        </p>
                    </div>

                    {/* Arrow at Bottom */}
                    <button onClick={()=>props.onScrollDown()}>
                        <img src={downArrow} alt="Down Arrow" className="w-12 h-12 absolute bottom-4 hidden md:block ease-in-out hover:cursor-pointer animate-bounce [animation-duration-2s] [animation-iteration-count:infinite] " />
                    </button>

                </div>

            </div>
        </div>
    )
}
