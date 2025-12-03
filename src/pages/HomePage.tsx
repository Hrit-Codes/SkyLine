import { useRef } from "react"
import CompanyIntroSection from "@/component/CompanyIntroSection.tsx"
import MarketHistorySection from "@/component/MarketHistorySection.tsx"
import LatestProjectSection from "@/component/LatestProjectSection.tsx"
import FAQSection from "../component/FAQSection.tsx"
import TestimonialsSection from "@/component/TestimonialsSection.tsx"


export default function HomePage(){
    const latestProductsSectionRef= useRef<HTMLDivElement>(null);
    console.log("latestProductsSectionRef",latestProductsSectionRef);

    const scrollToLatestProducts=()=>{
        latestProductsSectionRef.current?.scrollIntoView({
            behavior:"smooth",
        });
    };

    return(
        <div className="w-full min-h-screen flex flex-col ">

            <CompanyIntroSection onScrollDown={scrollToLatestProducts}/>

            <MarketHistorySection/>

            <div ref={latestProductsSectionRef}>
            <LatestProjectSection/>
            </div>

            <FAQSection/>

            <TestimonialsSection/>
            



        </div>
    )
}