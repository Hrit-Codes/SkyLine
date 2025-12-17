
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import realestateSales from "@/assets/images/realestate_sales.png";
import realestateRent from "@/assets/images/realestate_rent.png";
import realestateBuying from "@/assets/images/realestate_buying.png"
export default function AboutUsSection(){
    const navigate=useNavigate();
    return(
        <div>

        <div className="w-full flex flex-col mt-10 lg:flex-row ">
            <div className="w-full flex flex-col justify-center items-center gap-5 lg:w-1/2 ">
                <h1 className="text-center">A little bit about <br /><span className="text-primary font-roboto font-extrabold text-6xl!">The Skyline</span></h1>
                <Button variant="default" className="transition-all duration-300 hover:translate-x-5" onClick={()=>navigate("/contact")}>
                    <p>Contact Us</p>
                    <ArrowRight/>
                </Button>
            </div>

            <div className="w-full lg:w-1/2 ">
                <div className="p-2 ">
                    <h3>Your Local & loyal agent</h3>
                    <p className="!leading-[180%]">At The Skyline, we're more than just your local real estate agency; we're your loyal partners in finding the perfect place to call home. Our commitment to you goes beyond buying or selling properties - it's about building lasting relationships within our vibrant community.

                    The Skyline is more than just a real estate agency; we're your trusted partners in making your real estate dreams a reality. Discover the difference of working with a team that's as passionate about your goals as you are. Welcome to The Skyline, where your local and loyal agent is always here to serve you</p>
                </div>
            </div>
        </div>


    <div className="w-full flex flex-col lg:flex-row ">

        <div className="p-2 flex flex-col justify-center items-start my-6 gap-5 lg:w-1/2 text-justify ">
            <h1 className="font-mono!">We <span className="text-primary font-extrabold ">specialize</span> in</h1>
            <p>
                At The Skyline, our expertise spans across a wide spectrum of real estate services to cater to your every need. Whether you're looking to buy your dream home, rent a cozy apartment, sell your property, or require a precise appraisal, we have you covered.

                With our commitment to excellence and a passion for real estate, we're dedicated to making your real estate journey a smooth and rewarding experience. The Skyline is your trusted partner in all things real estate.
            </p>
        </div>

        <div className="w-full lg:w-1/2 p-2 flex flex-col justify-center  space-y-4 text-justify">

            <div className="flex flex-row gap-5">
                <div className="w-4/6 flex flex-col items-center justify-center border-2 p-2 bg-card rounded-3xl text-center">
                    <img src={realestateSales} alt="Real Estate" className="w-10 h-13"/>
                    <h3>Realestate Sales</h3>

                </div>
                <div className="w-2/6 flex flex-col items-center justify-center border-2 p-2 bg-card rounded-3xl text-center">
                    <img src={realestateBuying} alt="Real Estate" className="w-10 h-13" />
                    <h3>Realestate Buying</h3>
                </div>
            </div>

            <div className="flex flex-row gap-5">
                <div className="w-2/6 flex flex-col items-center justify-center border-2 p-2 bg-card rounded-3xl text-center">
                    <img src={realestateRent} alt="Real Estate" className="w-10 h-13"/>
                    <h3>Realestate Rent</h3>
                </div>
                <div className="w-4/6 flex flex-col items-center justify-center border-2 p-2 bg-card rounded-3xl text-center">
                    <img src={realestateSales} alt="Real Estate" className="w-10 h-13" />
                    <h3>Realestate Appraisal</h3>

                </div>

            </div>
        </div>
    </div>
        </div>
    )
}