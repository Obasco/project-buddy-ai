import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Plus, Bell, Menu } from 'lucide-react';

const Navbar = ({ onMenuClick }) => {
    const navigate = useNavigate();

    return (
        <nav className="h-16 md:h-20 px-4 md:px-8 flex items-center justify-between bg-white md:bg-transparent border-b md:border-none border-gray-100 sticky top-0 z-30">
            
            {/* Mobile Menu & Title */}
            <div className="flex items-center gap-3">
                <button onClick={onMenuClick} className="md:hidden text-gray-600 p-1">
                    <Menu size={24} />
                </button>
                <div>
                    <h1 className="text-xl md:text-2xl font-bold text-gray-900">Active Projects</h1>
                    <p className="text-xs md:text-sm text-gray-400 hidden md:block">Manage your AI generations</p>
                </div>
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center gap-3 md:gap-6">
                
                {/* Search Bar (Hidden on small mobile, visible on large) */}
                <div className="relative hidden sm:flex items-center">
                    <span className="absolute left-4 text-gray-500 z-10">
                        <Search size={18} />
                    </span>
                    <input
                        type="text"
                        placeholder="Search..."
                        className="pl-12 pr-6 py-2 rounded-full font-medium shadow-sm border border-gray-100 md:border-none md:shadow-lg md:shadow-blue-100 outline-none text-gray-600 w-48 lg:w-64 bg-white transition-all focus:shadow-blue-200 text-sm"
                    />
                </div>

                {/* Functional New Project Button */}
                <button
                    onClick={() => navigate('/new-project')}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 md:px-6 py-2 md:py-2.5 rounded-full font-medium shadow-lg shadow-blue-200 transition-all flex items-center gap-2 text-sm md:text-base"
                >
                    <Plus size={18} strokeWidth={3} />
                    <span className="hidden md:inline">New Project</span>
                    <span className="md:hidden">New</span>
                </button>

                <button className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center text-gray-400 border border-gray-100 shadow-sm hover:text-blue-600 hover:border-blue-100 transition-all relative">
                    <Bell size={20} />
                    <span className="absolute top-2 right-3 md:top-3 md:right-3 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
                </button>
            </div>
        </nav>
    );
};

export default Navbar;