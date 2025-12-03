import companyLogo from "../assets/images/CompanyLogo.svg"
import instagramIcon from "../assets/images/instagram_icon.png";
import facebookIcon from "../assets/images/facebook_icon.png";
import twitterIcon from "../assets/images/twitter_icon.png";
import linkedinIcon from "../assets/images/linkedin_icon.png";
import { Avatar,AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

export default function Footer(){
    return(
        <div className="w-full border-t-2 border-primary bg-primary">
            <div className="m-4 grid grid-cols-1 grid-rows-3 md:grid-cols-3 md:grid-rows-1">
                <div className="flex flex-col justify-center items-center">
                    <div className="flex flex-row">
                        <img src={companyLogo} alt="Company Logo" />
                        <h1>Skyline</h1>
                    </div>
                    <p className="text-center">Join hands with skyline and turn your property goals into reality</p>
                </div>


                <div className="flex flex-col justify-center items-center">
                    <h3>Support</h3>
                    <p>Contact Us</p>
                    <p>Help</p>
                </div>

                <div className="flex flex-col justify-center items-center">
                    <div className="w-1/2 flex flex-col  items-center">
                    <h3>Social</h3>
                    <div className="flex flex-row gap-3">
                    <Avatar className="w-6 h-6 hover:scale-110 hover:cursor-pointer">
                        <AvatarImage src={instagramIcon}/>
                        <AvatarFallback>Instagram</AvatarFallback>
                    </Avatar>

                    <Avatar className="w-6 h-6 hover:scale-110 hover:cursor-pointer">
                        <AvatarImage src={facebookIcon}/>
                        <AvatarFallback>Facebook</AvatarFallback>
                    </Avatar>

                    <Avatar className="w-6 h-6 hover:scale-110 hover:cursor-pointer">
                        <AvatarImage src={twitterIcon}/>
                        <AvatarFallback>Twitter</AvatarFallback>
                    </Avatar>

                    <Avatar className="w-6 h-6 hover:scale-110 hover:cursor-pointer">
                        <AvatarImage src={linkedinIcon}/>
                        <AvatarFallback>LinkedIn</AvatarFallback>
                    </Avatar>
                    </div>
                    </div>
                </div>

            </div>
            
        </div>
    )
}