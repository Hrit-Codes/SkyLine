import Header from "../component/Header.tsx";
import Footer1 from "../component/Footer1.tsx";
import { Outlet } from "react-router-dom";
import ScrollToTop from "@/component/ScrollToTop.tsx";

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col relative"> 

    <ScrollToTop/>
    
      <div className="absolute top-0 left-0 right-0 z-50">
        <Header />
      </div>
      
      {/* Main content - no padding needed now */}
      <main className="flex-grow w-full">
        <Outlet/>
      </main>
      
      <Footer1 />
    </div>
  );
};

export default MainLayout;