import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from "@/components/ui/dropdown-menu"
import companyLogo from "../assets/images/CompanyLogo.svg";
import { useNavigate } from "react-router-dom";
import Pages from "../component/Pages";
export default function SmallScreenNavbar(){

    const navigate=useNavigate();
    return(
        <div className="w-full min-h-fit p-2 absolute items-center z-20 top-0 left-0 right-0">
            <div className="mx-2  flex justify-between">
            <div className="flex flex-row justify-center items-center">
                <img src={companyLogo} alt="Company Logo" />
                <h1>Skyline</h1>
            </div>
            <div className="flex flex-row justify-center bg-primary-faint rounded-2xl p-4 border-white border-2">
            <DropdownMenu>
            <DropdownMenuTrigger>Menu</DropdownMenuTrigger>
            <DropdownMenuContent className="bg-primary-faint text-foregorund">
                {Pages.map((page)=>(
                    <DropdownMenuItem onClick={()=>navigate(page.Value)}>{page.Label}</DropdownMenuItem>
                ))}
            </DropdownMenuContent>
            </DropdownMenu>
            </div>
            </div>
        </div>

    )
}