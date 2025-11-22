import React from 'react';
import { Link, useLocation } from 'react-router-dom'; // Import Router hooks
import {
    LayoutGrid,
    BrainCircuit,
    FileText,
    ShoppingBag,
    User,
    LogOut
} from 'lucide-react';

const Sidebar = () => {
    const location = useLocation(); // Get current URL path

    // Added 'path' to each item to link to the correct page
    const menuItems = [
        { name: "Projects", icon: <LayoutGrid size={20} />, path: "/" },
        { name: "Memory", icon: <BrainCircuit size={20} />, path: "/memory" },
        { name: "Templates", icon: <FileText size={20} />, path: "/templates" },
        { name: "Marketplace", icon: <ShoppingBag size={20} />, path: "/marketplace" },
        { name: "Profile", icon: <User size={20} />, path: "/profile" },
    ];

    return (
        <aside className="w-64 h-full bg-white border-r border-gray-100 flex flex-col p-6">
            {/* Logo Section - Blue Circle PB */}
            <div className="flex items-center gap-3 mb-10">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-md">
                    PB
                </div>
                <span className="font-bold text-gray-800 text-lg tracking-tight">ProjectBuddy</span>
            </div>

            {/* Menu Items */}
            <div className="flex flex-col gap-2">
                {menuItems.map((item, index) => {
                    // Dynamic check: Is this the current page?
                    const isActive = location.pathname === item.path;

                    return (
                        <Link
                            key={index}
                            to={item.path} // Use Link instead of div
                            className={`flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer transition-all font-medium group
                            ${isActive
                                ? "bg-blue-50 text-blue-600"
                                : "text-gray-500 hover:bg-gray-50 hover:text-gray-900"}`}
                        >
                            {/* Icon Rendering */}
                            <span className={isActive ? "text-blue-600" : "text-gray-400 group-hover:text-gray-600"}>
                                {item.icon}
                            </span>

                            {item.name}
                        </Link>
                    );
                })}
            </div>

            {/* Bottom User Section */}
            <div className="mt-auto pt-6 border-t border-gray-100">
                <div className="flex items-center gap-3 hover:bg-gray-50 p-2 rounded-lg cursor-pointer transition-colors">
                    <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden">
                        <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="User" />
                    </div>
                    <div className="text-sm font-medium text-gray-700">My Account</div>
                    <LogOut size={16} className="ml-auto text-gray-400 hover:text-red-500" />
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;