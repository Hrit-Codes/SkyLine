import { Card,CardContent } from "@/components/ui/card";
import testimonials from "../api/Testimonials.json";
import { ArrowLeft , ArrowRight, Quote } from "lucide-react";
import { useState } from "react";

export default function TestimonialsSection(){

    const [index,setIndex]=useState(0);
    
    const getVisibleTestimonials=()=>{
        const list=[];
        for (let i=0;i<3;i++){
            list.push(testimonials[(index+i)% testimonials.length]);
        }
        return list;
    }

    const next=()=>{
        setIndex((prev)=>(prev+1)% testimonials.length);
    };

    const prev=()=>{
        setIndex((prev)=>prev===0? testimonials.length-1:prev-1);
    }
    return(
        <div className="w-full py-14 px-4 md:px-16">
            <div className="m-4 flex flex-col space-y-10">
                <div className="w-full flex flex-col space-y-5 md:flex-row md:justify-between">
                    <h1>Our <span className="italic">Testimonials</span></h1>
                    <p>See how we've turned clients' real estate dreams into reality with exceptional service</p>
                </div>

                <div className="flex justify-center gap-15 ">
                    {getVisibleTestimonials().map((t,i)=>{
                        const isCenter=i===1;
                        return(
                        <Card key={i} className={`rounded-2xl w-100 h-90 md:h-70 shadow-sm border transition-all ease-linear duration-500 ${isCenter ? "scale-110 bg-white shadow-lg" : "scale-95 opacity-80"}`}>
                            <CardContent className="space-y-4 h-full flex flex-col justify-between">
                                <div className="w-full h-1/4 flex items-center gap-4">
                                    <img src={t.img} alt={t.name} className="w-14 h-14 rounded-full object-cover"/>
                                    <div>
                                    <h3 className="font-semibold ">{t.name}</h3>
                                    <p className=" text-gray-500">{t.date}</p>
                                    </div>
                                    <Quote className="text-gray-300 ml-auto"/>
                                </div>
                                <div className="w-full h-3/4 flex justify-center items-center">
                                <p className="text-gray-700leading-relaxed text-wrap **break-words**">{t.message}</p>
                                </div>
                            </CardContent>
                        </Card>
                    )})}
                </div>

                <div className="flex justify-center gap-6 mt-10">
                    <button className="p-3 rounded-full border shadow-sm hover:bg-gray-100 hover:cursor-pointer" onClick={prev}>
                    <ArrowLeft />
                    </button>

                    <button className="p-3 rounded-full border shadow-sm hover:bg-gray-100 hover:cursor-pointer" onClick={next}>
                    <ArrowRight />
                    </button>
                </div>


            </div>


        </div>
    )
}