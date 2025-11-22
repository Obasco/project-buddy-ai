import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Plus, Bell } from 'lucide-react';

const Navbar = () => {
    const navigate = useNavigate();

    return (
        <nav className="h-20 px-8 flex items-center justify-between bg-transparent">
            <div>
                <h1 className="text-2xl font-bold text-gray-900">Active Projects</h1>
                <p className="text-sm text-gray-400">Manage your AI generations</p>
            </div>

            <div className="flex items-center gap-6">
                {/* Search Bar (Visual only for now) */}
                <div className="relative flex items-center">
                    <span className="absolute left-4 text-gray-500 z-10">
                        <Search size={18} />
                    </span>
                    <input
                        type="text"
                        placeholder="Search..."
                        className="pl-12 pr-6 py-2.5 rounded-full font-medium shadow-lg shadow-blue-100 border-none outline-none text-gray-600 w-64 bg-white transition-all focus:shadow-blue-200"
                    />
                </div>


                {/* Functional New Project Button */}
                <button
                    onClick={() => navigate('/new-project')}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-full font-medium shadow-lg shadow-blue-200 transition-all flex items-center gap-2"
                >
                    <Plus size={20} strokeWidth={3} />
                    <span>New Project</span>
                </button>
                <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-400 border border-gray-100 shadow-sm hover:text-blue-600 hover:border-blue-100 transition-all relative">
                    <Bell size={20} />
                    <span className="absolute top-3 right-3 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
                </button>
            </div>
        </nav>
    );
};

export default Navbar;