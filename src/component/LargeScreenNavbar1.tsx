import { Button } from "@/components/ui/button"
import companyLogo from "../assets/images/CompanyLogo.svg"
import { useNavigate } from "react-router-dom"

export default function LargeScreenNavbar() {
    const navigate = useNavigate();

    return (
        <div className="w-full flex justify-center items-center bg-transparent ">
            <div className="w-full my-2 mx-6 flex justify-between items-center font-extrabold p-2 text-black
                bg-white/60 backdrop-blur-md backdrop-saturate-150">

                <div className="flex flex-row justify-center items-center space-x-2">
                    <img src={companyLogo} alt="Company Logo" />
                    <h1 className="!font-bold">SkyLine</h1>
                </div>

                <div className="flex flex-row w-2/5 justify-between p-2 rounded-3xl bg-section-alternative text-black">
                
                    {/* Home */}
                    <div className="hover:cursor-pointer hover:text-primary ml-2 group relative"
                        onClick={() => navigate(`/`)}>
                        <p className="group">Home</p>
                        <span className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></span>
                    </div>
                

                    {/* About Us */}
                    <div className="hover:cursor-pointer hover:text-primary group relative"
                        onClick={() => navigate(`/about`)}>
                        <p className="group">About Us</p>
                        <span className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></span>
                    </div>

                    {/* Listing */}
                    <div className="hover:cursor-pointer hover:text-primary group relative"
                        onClick={() => navigate(`/listings`)}>
                        <p className="group">Listing</p>
                        <span className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></span>
                    </div>

                    {/* Agents */}
                    <div className="hover:cursor-pointer hover:text-primary mr-2 group relative"
                        onClick={() => navigate(`/agents`)}>
                        <p className="group">Agents</p>
                        <span className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></span>
                    </div>

                </div>

                <Button onClick={() => navigate(`/contact`)} className="bg-primary-faint text-black hover:text-background border-2">
                    <p>Contact Us</p>
                </Button>

            </div>
        </div>
    )
}