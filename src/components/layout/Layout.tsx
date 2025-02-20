import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../navbar/Navbar";
import { Footer } from "../footer/Footer";

const Layout = () => {
    return (
        <>
            <Navbar />
            <main>
                <Outlet /> {/* Affiche la page sélectionnée */}
            </main>
            <Footer />
        </>
    );
};

export default Layout;
