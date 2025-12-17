import { Button } from "@/components/ui/button"
import rightArrow from "@/assets/images/right_arrow.png"
import error404 from "@/assets/images/error404.png";
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {

  const navigate= useNavigate();
  return (
    <div className="w-full min-h-screen bg-primary">
      <div className="min-h-screen mx-6 flex flex-col justify-center items-center">
        <div className="flex flex-col items-center justify-center gap-4 xl:flex-row">
          <h1 className="!text-9xl text-center">Page Not Found</h1>
          <img src={error404} alt="Error" className="w-50 h-60" />
        </div>
        <p className="my-10 md:mx-40 text-center !text-xl md:!text-2xl lg:!text-4xl">The page you are looking for was removed, moved, renamed, or might have never existed.</p>
          <div className="mt-6 transition duration-300 hover:translate-x-4">
            <Button onClick={()=>navigate("/")}>
              <h1>Return Home</h1>
                <img src={rightArrow} alt="Right Arrow" className="w-6 h-6 ml-2 "/>
            </Button>
          </div>
      </div>
      
    </div>
  )
}

export default NotFoundPage
