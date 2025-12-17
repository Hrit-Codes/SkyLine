import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button.tsx";
import MarketDetailCard from "./MarketDetailCard.tsx";
import MarketApi from "../api/MarketDetailCardApi.json";
import rightArrow from "../assets/images/right_arrow.png";

export default function MarketHistorySection(){
    const navigate=useNavigate();
    return(
        <div className="w-full flex justify-center items-center py-8 ">
            <div className="w-full flex flex-col md:flex-row">
                
                <div className="flex flex-col md:w-1/2"> 
                    <div className="flex flex-col gap-3 justify-center items-center">
                        <h1>We search the Best One</h1>

                        <div className="w-full grid grid-cols-2 grid-rows-2 gap-4 place-items-center max-w-full ">
                        {MarketApi.map((detail,index)=>(
                            <div className="w-40 h-40  flex justify-center items-center bg-primary text-primary-foreground rounded-xl border-2 border-primary" key={index}> 
                                <MarketDetailCard value={detail.value} context={detail.context}/>
                            </div>
                            ))}  
                        </div>
                    </div>
                </div>

                <div className="hidden md:w-1/2 md:flex items-center justify-center">

                    <div className="w-9/10 text-justify flex flex-col justify-center items-center lg:text-center">
                        <p>We connect you with premium properties thoughtfully, tailored to perfectly match your unique lifestyle, preferences, aspirations, desires, expectations, and specific individual needs</p>

                        <div className="mt-6 transition duration-300 hover:translate-x-4">
                            <Button onClick={()=>navigate("/contact")}>
                                <p>Contact Us</p>
                                <img src={rightArrow} alt="Right Arrow" className="w-6 h-6 ml-2 "/>
                            </Button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}