import TestimonialsSection from "../component/TestimonialsSection";
import FAQSection from "@/component/FAQSection";
import PageBanner from "@/component/PageBanner";
import AboutUsSection from "@/component/AboutUsSection";
export default function AboutPage() {
  return (
    <div className="w-full min-h-screen">
      <div className="bg-section">
        <PageBanner page="About"/>
      </div>

      <div className="bg-section-alternative">
        <div className="mx-2 md:mx-8 pt-8 ">
          <AboutUsSection/>
        </div>
      </div>

      <div className="bg-section">
        <div className="py-4 mx-4 md:mx-8">
        <FAQSection/>
        </div>
      </div>

      <div className="bg-section-alternative">
        <div className="py-8 px-4">
            <TestimonialsSection/>
        </div>
      </div>

    </div>
  );
}
