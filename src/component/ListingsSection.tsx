import { useEffect, useState } from "react";
import { ArrowLeft } from "lucide-react";
import { ArrowRight } from "lucide-react";
import ProjectCard from "./ProjectCard"
import {Select, SelectContent, SelectGroup, SelectItem, SelectTrigger,SelectValue} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import SelectedListings from "./SelectedListings";
import { fetchFilteredProjects } from "@/services/projectServices";
import { type projectResponse, type IProject, type projectCardData } from "@/interfaces/project.tsx"; 

export default function ListingsSection(){

    const page=1;
    const perPage=6;

    const [viewAllProductsStatus,setviewAllProductsStatus]=useState(false);
    const [visibleCount, setVisibleCount]=useState(3); 
    const [selectedFilters,setSelectedFilters]=useState({
        category:"Residential",
        bhkno:null,
        price:null,
        city:null
    })
    const [filteredProjectData, setFilteredProjectData] = useState<IProject[]>([]);
    const [isLoading,setIsLoading]=useState(true);

    const handleSelectChange=(key:string,value:string)=>{
        setSelectedFilters(prevFilters=>({...prevFilters,[key]:value==="All"? null : value}));
    }

    useEffect(() => {
        const updateCount = () => {
            const newCount = window.innerWidth < 420 ? 1 : 3;
            setVisibleCount(newCount);
        };
        updateCount();

        window.addEventListener('resize', updateCount);
        return () => window.removeEventListener('resize', updateCount);
    }, []);
    
    useEffect(()=>{
        const fetchData=async()=>{
            setIsLoading(true);
            try{
                const params = {
                    ...selectedFilters,
                    page,
                    perPage
                };

                
                const result = await fetchFilteredProjects(params);
                setFilteredProjectData(result?.data?.data || []);
            }catch(error){
                console.error("Error while retrieving filtered project data::",error);
                setFilteredProjectData([]);
            }finally{
                setIsLoading(false);
            }
        };
        fetchData();
    },[selectedFilters,page,perPage]);

    const [index,setIndex]=useState(0);

    const getVisibleListings=()=>{
        if (!filteredProjectData.length) return [];
        let list = [];

        for(let i = 0; i < visibleCount; i++){ 
 
            list.push(filteredProjectData[(index + i) % filteredProjectData.length]);
        }
        return list;
    }

    const next=()=>{
        if (!filteredProjectData.length) return;
        setIndex((prev)=>(prev+1)%filteredProjectData.length);
    };
    const prev=()=>{
        if (!filteredProjectData.length) return;
        setIndex((prev)=>prev===0? filteredProjectData.length-1:prev-1);
    }

    console.log("Filtered Project Data::",filteredProjectData);
    
    return(
        <div className="w-full ">


            <div className="flex flex-col m-4 gap-4">
                <h1 className="font-libertinus">Discover your <span className="italic">Best match</span></h1>
                <p className="font-inter w-30 sm:w-60 md:w-250">We connect you with premium properties, tailored to your unique lifestyle and needs. Our curated selection ensures you find the perfect match, backed by expert guidance.</p>
            </div>

            {/* FILTERS */}
            <div className="w-full  mb-15 px-4 flex flex-col justify-center gap-10 md:flex-row md:px-16">
                <div className="font-roboto">
                    <h3 >City</h3>
                    <Select onValueChange={(value)=>handleSelectChange("city",value)}>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="City" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="All">All</SelectItem>
                        <SelectItem value="London">London</SelectItem>
                        <SelectItem value="Birmingham">Birmingham</SelectItem>
                        <SelectItem value="Liverpool">Liverpool</SelectItem>
                        <SelectItem value="Manchester">Manchester</SelectItem>
                    </SelectContent>
                    </Select>
                </div>
                
                <div className="font-roboto">
                    <h3 >Property Type</h3>
                    <Select onValueChange={(value)=>handleSelectChange("category",value)} defaultValue={selectedFilters.category}>
                    <SelectTrigger className="max-w-[180px]">
                        <SelectValue placeholder="PropertY Type" />
                    </SelectTrigger>
                    <SelectContent position="popper">
                        <SelectItem value="All">All</SelectItem>
                        <SelectItem value="Residential">Residential</SelectItem>
                        <SelectItem value="Commercials">Commercials</SelectItem>
                        <SelectItem value="Apartments">Apartments</SelectItem>
                    </SelectContent>
                    </Select>
                </div>

                <div className="font-roboto">
                    <h3>Bedroom</h3>
                    <Select onValueChange={(value)=>handleSelectChange("bhkno",value)}>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Bedroom" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="All">All</SelectItem>
                        <SelectItem value="2BHK">2BHK</SelectItem>
                        <SelectItem value="3BHK">3BHK</SelectItem>
                        <SelectItem value="4BHK">4BHK</SelectItem>
                        <SelectItem value="5BHK">5BHK</SelectItem>
                    </SelectContent>
                    </Select>
                </div>

                <div className="font-roboto ">
                    <h3>By Price</h3>
                    <Select onValueChange={(value)=>handleSelectChange("price",value)}>
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Price Range" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="All">All</SelectItem>
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
            {viewAllProductsStatus ? (
                <div>
                    <SelectedListings data={filteredProjectData}/>
                </div>
            ) : isLoading ? (
                <div className="text-center py-10">Loading projects...</div>
            ) : (
                <div className={`flex justify-center gap-10 ${visibleCount === 1 ? 'flex-col items-center' : 'flex-row'}`}>
                    {getVisibleListings().map((item: projectCardData, i: number)=>{ 
                        if(!item) return null
                        const isCenter = visibleCount === 3 && i === 1; 

                        return(
                            <div 
                                key={i} 
                                className={`w-90 sm:w-120 shrink-0 transition-all ease-linear duration-500 ${isCenter ? "scale-110 " : "scale-95"} ${visibleCount === 1 ? 'w-full max-w-sm' : ''}`}
                            >

                                <ProjectCard item={item as projectCardData} i={i}/>
                            </div>
                        )
                    })}
                </div>
            )}
            
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
                <Button variant="default" className="" onClick={()=>setviewAllProductsStatus((prev)=>!prev)}>
                    {viewAllProductsStatus?"View Less Products":"View All Products"}
                </Button>
            </div>
        </div>
    )
}