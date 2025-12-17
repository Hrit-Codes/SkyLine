import { useRef } from "react"
import MarketHistorySection from "@/component/MarketHistorySection1.tsx"
import LatestProjectSection from "@/component/LatestProjectSection.tsx"
import FAQSection from "../component/FAQSection.tsx"
import TestimonialsSection from "@/component/TestimonialsSection.tsx"
import HomeBannerSection from "@/component/HomeBannerSection.tsx"

export default function HomePage() {
    const latestProductsSectionRef = useRef<HTMLDivElement>(null);

    const scrollToLatestProducts = () => {
        latestProductsSectionRef.current?.scrollIntoView({
            behavior: "smooth",
        });
    };

    return (
        <div className="w-full min-h-screen flex flex-col relative">
            <div> 
                <HomeBannerSection onScrollDown={scrollToLatestProducts}/>
            </div>

            <div className="bg-section-alternative pt-24">
                <MarketHistorySection/>
            </div>

            <div ref={latestProductsSectionRef} className="bg-section">
                <div className="px-6">
                    <LatestProjectSection/>
                </div>
            </div>

            <div className="bg-section-alternative">
                <div className="px-6 xl:px-14">
                    <FAQSection/>
                </div>
            </div>

            <div className="py-8 bg-section">
                <div className="px-6 xl:px-14">
                    <TestimonialsSection />
                </div>
            </div>
        </div>
    )
}