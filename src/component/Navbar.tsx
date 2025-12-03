import { Button } from "@/components/ui/button"
import companyLogo from "../assets/images/CompanyLogo.svg"
import { useNavigate } from "react-router-dom"

export default function Navbar(){

    const navigate= useNavigate();

    return(
        <div className="w-full min-h-fit flex justify-center items-center border-4">
            <div className="w-full min-h-fit m-2 flex flex-row justify-between items-center font-bold ">

                <div className=" hover:cursor-pointer hover:text-primary"
                onClick={()=>navigate(`/`)}>
                    <p>Home</p>
                </div>

                <div className=" hover:cursor-pointer hover:text-primary"
                onClick={()=>navigate(`/about`)}>
                    <p>About Us</p>
                </div>

                <div className="hover:cursor-pointer hover:text-primary"
                onClick={()=>navigate(`/listings`)}>
                    <p>Listing</p> 
                </div>

                <div className="hover:cursor-pointer hover:text-primary"
                onClick={()=>navigate(`/agents`)}>
                    <p>Agents</p>
                </div>

                <div className="flex flex-row justify-center items-center space-x-2">
                    <img src={companyLogo} alt="Company Logo" />
                    <p>SkyLine</p>
                </div>

                <Button onClick={()=>navigate(`/contact`)}>
                    <p>Contact Us</p>
                </Button>

            </div>
        </div>
    )
}