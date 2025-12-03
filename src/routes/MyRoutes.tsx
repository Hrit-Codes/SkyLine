import {Routes, Route } from "react-router-dom"
import MainLayout from "../pages/MainLayout.tsx";
import HomePage from "../pages/HomePage.tsx";
import AboutPage from "../pages/AboutPage.tsx";
import ContactPage from "../pages/ContactPage.tsx";
import ListingsPage from "@/pages/LisitingsPage.tsx";

const MyRoutes=() =>{
    return(
      <>
        <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/listings" element={<ListingsPage/>}/>
        </Route>
        </Routes>
      </>
    )
}

export default MyRoutes;