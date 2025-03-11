import React from "react";
/* import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react"; */
import "./Layout.scss";
import { Outlet } from "react-router-dom";
import { Navbar } from "../navbar/Navbar";
import { Footer } from "../footer/Footer";
/* import { Preloader } from "../preloader/Preloader"; */

const Layout = () => {

    /* const location = useLocation();
    const [isLoading, setIsLoading] = useState(false); */

    /* useEffect(() => {
        setIsLoading(true);

        const timeout = setTimeout(() => {
            setIsLoading(false);
        }, 1000); // Durée du préloader (1 seconde)

        return () => clearTimeout(timeout);
    }, [location.pathname]); */

    return (

        <div className="view">
            <div className='grid-template'>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            {/* <Preloader isLoading={isLoading} /> */}
            <Navbar />
            <main className="content">
                <Outlet /> {/* Affiche la page sélectionnée */}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
