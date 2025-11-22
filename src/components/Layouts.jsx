import React from 'react';
import { Outlet } from 'react-router-dom'; // Import Outlet
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Layouts = () => {
    return (
        <div className="flex h-screen bg-gray-50">
            {/* 1. Sidebar (Always visible) */}
            <Sidebar />

            <div className="flex-1 flex flex-col overflow-hidden relative">
                {/* 2. Navbar (Always visible) */}
                <Navbar />

                {/* 3. The "Hole" - Content fills the remaining space */}
                <main className="flex-1 overflow-y-auto p-8">
                    {/* This Outlet is where your page content is injected */}
                    <Outlet /> 
                </main>
            </div>
        </div>
    );
};

export default Layouts;