import teamPhoto from "../assets/images/team_photo.jpg"
export default function AboutUsBannerSection(){
    return(
        <div className="relative w-full flex justify-center ">
      
            {/* Background Image */}
            <div className="w-full  overflow-hidden ">
                <img src={teamPhoto} alt="Campus" className="w-full h-[260px] md:h-[360px] object-cover"/>
            </div>

            {/* Floating Overlay */}
            <div className="absolute bottom-[-20px] bg-white px-8 py-3 rounded-2xl shadow-lg flex items-center justify-center">
                <p className="text-xl md:text-2xl font-semibold text-gray-700">
                Get to Know <span className="text-blue-500">Us</span>
                </p>
            </div>
        </div>
    )
}