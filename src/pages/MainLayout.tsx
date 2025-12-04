import Header from "../component/Header.tsx";
import Footer from "../component/Footer.tsx";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="w-screen bg-background">
      <Header />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;