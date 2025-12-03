import { useMemo, useState } from "react";
import listings from "../api/LatestProjectApi.json"
import { ArrowLeft } from "lucide-react";
import { ArrowRight } from "lucide-react";
import ProjectCard from "./ProjectCard"
import {Select, SelectContent, SelectGroup, SelectItem, SelectTrigger,SelectValue} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import SelectedListings from "./SelectedListings";
export default function ListingsSection(){

    const [viewAllProductsStatus,setviewAllProductsStatus]=useState(false);
    const category="Residential";

    const [index,setIndex]=useState(0);

    const filteredListings=useMemo(()=> listings.filter(item=>item.Category===category)
    ,[category]);

    const getVisibleListings=()=>{
        const list=[];
        for(let i=0;i<3;i++){
            list.push(filteredListings[(index+i)%filteredListings.length]);
        }
        return list;
    }

    const next=()=>{
        setIndex((prev)=>(prev+1)%filteredListings.length);
    };
    const prev=()=>{
        setIndex((prev)=>prev===0? filteredListings.length-1:prev-1);
    }
    return(
        <div className="w-full min-h-screen">
            {/* HEADER */}
            <div>
                <h1>Discover your <span>Best match</span></h1>
                <p>We connect you with premium properties, tailored to your unique lifestyle and needs. Our curated selection ensures you find the perfect match, backed by expert guidance</p>
            </div>
            <hr className="border-2 border-primary"/>

            {/* FILTERS */}
            <div className="w-full bg-amber-500 mb-15 px-4 flex flex-col justify-center gap-10 md:flex-row md:px-16">

                <div>
                    <h3>City</h3>
                    <Select>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="London" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="Birmingham">Birmingham</SelectItem>
                        <SelectItem value="Liverpool">Liverpool</SelectItem>
                        <SelectItem value="Manchester">Manchester</SelectItem>
                    </SelectContent>
                    </Select>
                </div>

                <div>
                    <h3>Property Type</h3>
                  <Select>
  <SelectTrigger className="max-w-[180px]">
    <SelectValue placeholder="Residential" />
  </SelectTrigger>
  <SelectContent position="popper">
    <SelectItem value="Residential">Residential</SelectItem>
    <SelectItem value="Commercials">Commercials</SelectItem>
    <SelectItem value="Apartments">Apartments</SelectItem>
  </SelectContent>
</Select>

                </div>

                <div>
                    <h3>Bedroom</h3>
                    <Select>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="2BHK" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="3BHK">3BHK</SelectItem>
                        <SelectItem value="4BHK">4BHK</SelectItem>
                        <SelectItem value="5BHK">5BHK</SelectItem>
                    </SelectContent>
                    </Select>
                </div>

                <div>
                    <h3>By Price</h3>
                    <Select>
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Select Price Range" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="0-300000">Below £300,000</SelectItem>
                            <SelectItem value="300000-500000">£300,000 - £500,000</SelectItem>
                            <SelectItem value="500000-750000">£500,000 - £750,000</SelectItem>
                            
                            <SelectItem value="750000-1000000">£750,000 - £1 Million</SelectItem>
                            
                            <SelectItem value="1000000-max">Above £1 Million</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>

            {/* PROJECT CARDS */}
                {viewAllProductsStatus?
                <div>
                    <SelectedListings/>
                </div>
                    :
                (
                <div className="flex justify-center gap-8">
                {getVisibleListings().map((item,i)=>{
                    const isCenter=i===1;
                    return(
                        <div key={item.ProjectName + i} className={`w-200 shadow-sm transition-all ease-linear duration-500 ${isCenter?"scale-110 shadow-lg":"scale-95 opacity-80"}`}>
                        <ProjectCard key={item.ProjectName + i} item={item} i={i}/>
                        </div>
                    )
                })}
                </div>
                )
                }
            
            {/* ARROWS */}
            <div className="flex justify-center gap-6 my-10">
                <button className="p-3 rounded-full border shadow-sm hover:bg-gray-100 hover:cursor-pointer" onClick={prev}>
                    <ArrowLeft />
                </button>

                <button className="p-3 rounded-full border shadow-sm hover:bg-gray-100 hover:cursor-pointer" onClick={next}>
                    <ArrowRight />
                </button>
            </div>

            <div className="w-full flex justify-center my-6">
                <Button variant="default" className="" onClick={()=>setviewAllProductsStatus((prev)=>!prev)}>{viewAllProductsStatus?"View All Products":"View Less Products"}</Button>
            </div>
        </div>
    )
}