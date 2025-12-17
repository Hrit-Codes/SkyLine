import { useEffect, useState } from "react";
import LargeScreenNavbar1 from "./LargeScreenNavbar1.tsx";
import SmallScreenNavbar from "./SmallScreenNavbar.tsx";

export default function Header() {
    const [navbarSelect, setNavbarSelect] = useState(0);

    useEffect(() => {
        const updateNavbarSelect = () => {
            const newSelect = window.innerWidth < 768 ? 0 : 1;
            setNavbarSelect(newSelect);
        };
        updateNavbarSelect();

        window.addEventListener('resize', updateNavbarSelect);
        return () => window.removeEventListener('resize', updateNavbarSelect);
    }, []);

    // REMOVED the positioning wrapper div
    return navbarSelect === 0 ? (
        <SmallScreenNavbar />
    ) : (
        <LargeScreenNavbar1 />
    );
}