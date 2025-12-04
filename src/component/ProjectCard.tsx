import { useState } from "react";
import { Card,CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { type projectCardData } from "@/interfaces/project.tsx";

interface props{
    item:projectCardData,
    i:number
}

export default function ProjectCard(props:props){
    const {item,i}=props;
    const [isLiked,setIsLiked]=useState(false);

    const toggleLike=()=>{
        console.log("Heart Clicked");
        setIsLiked(!isLiked);
    }

    console.log(`Item ${i}:`,item);

    return(
        <Card key={i} className="w-full h-full rounded-3xl shadow-md flex flex-grow flex-shrink-0 flex-col justify-between self-center overflow-hidden">
            <div className="relative h-1/2 ">
                <img src={item.image} alt={item.projectName} className="w-full h-80 object-cover"/>
                <Badge className="absolute top-3 left-3 bg-white text-black px-3 py-1 rounded-full shadow">
                    Featured
                </Badge>
                <button className="absolute top-3 right-3 bg-white size-10 rounded-full flex items-center justify-center shadow">
                    <Heart className={`w-5 h-5 transition-colors hover:cursor-pointer ${isLiked ? "text-red-500 fill-red-500":"text-gray-400 fill-transparent"}`} onClick={toggleLike}/>
                </button>
            </div>

            <CardContent className="p-5 flex flex-col justify-between h-1/2 ">
                <h3 className="font-medium">{item.projectName}-{item.bhkno}</h3>
                <p className="text-gray-500 text-sm">{item.street},<br/>{item.city}</p>
                <div className="flex justify-between items-center mt-2 static bottom-2 left-2">
                    <h3 className="text-orange-500 !font-semibold  text-lg">${item.price}</h3>
                    <Button variant="outline" className="rounded-full">
                        View Details
                    </Button>
                </div>
            </CardContent>

        </Card>
    )
    
}