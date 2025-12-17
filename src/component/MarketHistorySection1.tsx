import teamPhoto from "@/assets/images/team_photo.jpg"
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import MarketApi from "../api/MarketDetailCardApi.json"
export default function MarketHistorySection(){
    const navigate= useNavigate();
    return(
        <div className="w-full pt-14 ">
            <div className="px-8 flex-col">
                <div className="grid gird-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-1 pt-10">
                    <div>
                        <img src={teamPhoto} alt="Team Photo" className="rounded-xl" />
                    </div>
                    <div className="flex flex-col justify-center items-center text-justify lg:text-center">
                        <p>We connect you with premium properties thoughtfully, tailored to perfectly match your unique lifestyle, preferences, aspirations, desires, expectations, and specific individual needs.</p>

                        <div className="mt-6 transition duration-300 hover:translate-x-4">
                            <Button onClick={()=>navigate("/contact")}>
                                <p>Contact Us</p>
                                <ArrowRight/>
                            </Button>
                        </div>
                    </div>
                </div>

                <div className="w-full mt-6 grid grid-cols-2 md:grid-cols-4 gap-5 place-items-center">
                {MarketApi.map((detail) => (
                    <div
                    key={detail.context}
                    className="w-full max-w-[220px] h-[100px] rounded-xl flex flex-col items-center justify-center text-black">
                    <div className="text-4xl font-bold text-primary">{detail.value}</div>
                    <p className="text-center text-sm">{detail.context}</p>
                    </div>
                ))}
                </div>

            </div>

        </div>
    )
}