import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import googleIcon from "../assets/images/google_icon.png"
export default function LoginPage(){
    return(
        <div className="w-full min-h-screen flex justify-center items-center bg-red-200">

            <div className="w-10/12 max-w-5xl h-9/12 min-h-fit rounded-3xl shadow-[0_25px_30px_var(--color-primary)] bg-amber-300 ">
                <div className="w-full h-full flex flex-col space-y-8">
                <h1 className="self-center text-3xl md:text-3xl ">Sign In</h1>

                <label htmlFor="userEmail" className="text-xl space-y-2 md:text-2xl">
                    <p>Email</p>
                    <Input placeholder="Enter Your Email" className="text-lg md:text-2xl"></Input>
                </label>

                <label htmlFor="userPassword" className="text-xl space-y-3 md:text-2xl">
                    <p>Password</p>
                    <Input placeholder="Enter Your Password" className="text-lg md:text-2xl"></Input>
                </label>

                <Button variant="default" className="text-lg md:text-xl">Sign In</Button>

                <Button className="text-lg md:text-xl">
                    <img src={googleIcon} alt="Google Icon" className="w-6 h-6" />
                    <p>SignIn With Google</p>
                </Button>

                <p>Don't have an account yet? Sign Up</p>
                </div>
            </div>
            
        </div>
    )
}