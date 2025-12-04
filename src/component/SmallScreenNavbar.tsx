import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger} from "@/components/ui/dropdown-menu"
import companyLogo from "../assets/images/CompanyLogo.svg";
import { useNavigate } from "react-router-dom";
export default function SmallScreenNavbar(){

    const navigate=useNavigate();
    return(
        <div className="w-full min-h-fit bg-gray-300">
            <div className="mx-2  flex justify-between">
            <div className="flex flex-row justify-center items-center">
                <img src={companyLogo} alt="Company Logo" />
                <h1>Skyline</h1>
            </div>
            <div className="flex flex-row justify-center bg-primary rounded-2xl p-4 ">
            <DropdownMenu>
            <DropdownMenuTrigger>Menu</DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuItem onClick={()=>navigate("/home")}>Home</DropdownMenuItem>
                <DropdownMenuItem onClick={()=>navigate("/about")}>About Us</DropdownMenuItem>
                <DropdownMenuItem onClick={()=>navigate("/listings")}>Listing</DropdownMenuItem>
                <DropdownMenuItem onClick={()=>navigate("/agent")}>Agent</DropdownMenuItem>
            </DropdownMenuContent>
            </DropdownMenu>
            </div>
            </div>
        </div>

    )
}