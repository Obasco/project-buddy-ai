import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    MoreVertical,
    Clock,
    ArrowRight,
    Code2,
    FileText,
    PieChart
} from 'lucide-react';

const ActiveProjects = () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState("All");

    // Mock Data
    const projects = [
        {
            id: 1,
            title: "E-Commerce Mobile App",
            category: "Dev",
            type: "Mobile App",
            icon: <Code2 size={20} className="text-purple-600" />,
            bg: "bg-purple-100",
            progress: 75,
            status: "Coding Backend",
            lastEdited: "2 mins ago",
            tags: ["React Native", "Node.js"]
        },
        {
            id: 2,
            title: "Q4 Marketing Strategy",
            category: "Business",
            type: "Business Plan",
            icon: <PieChart size={20} className="text-blue-600" />,
            bg: "bg-blue-100",
            progress: 30,
            status: "Generating Content",
            lastEdited: "1 hour ago",
            tags: ["Marketing", "PDF"]
        },
        {
            id: 3,
            title: "History Research Paper",
            category: "Academic",
            type: "Essay",
            icon: <FileText size={20} className="text-orange-600" />,
            bg: "bg-orange-100",
            progress: 100,
            status: "Ready for Download",
            lastEdited: "1 day ago",
            tags: ["Essay", "Word Doc"]
        }
    ];

    // Logic: Filter projects based on active Tab
    const filteredProjects = activeTab === "All"
        ? projects
        : projects.filter(p => p.category === activeTab);

    const tabs = [
        { id: "All", label: "All Projects" },
        { id: "Dev", label: "Apps & Code" },
        { id: "Business", label: "Business" },
        { id: "Academic", label: "Academic" }
    ];

    return (
        <div className="w-full">
            {/* Functional Filter Tabs */}
            <div className="flex gap-4 mb-8 overflow-x-auto pb-2">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap
                        ${activeTab === tab.id
                                ? "bg-gray-900 text-white"
                                : "bg-white text-gray-600 border border-gray-200 hover:bg-gray-50"}`}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* "Create New" Card - Navigates to Create Page */}
                <div
                    onClick={() => navigate('/new-project')}
                    className="h-full min-h-[240px] border-2 border-dashed border-gray-300 rounded-2xl flex flex-col items-center justify-center cursor-pointer hover:border-blue-500 hover:bg-blue-50 transition-all group"
                >
                    <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                        <span className="text-2xl text-gray-400 group-hover:text-blue-600">+</span>
                    </div>
                    <p className="mt-4 font-medium text-gray-500 group-hover:text-blue-600">Create New Project</p>
                </div>

                {/* Render Filtered Projects */}
                {filteredProjects.map((project) => (
                    <div key={project.id} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex flex-col">
                        <div className="flex justify-between items-start mb-4">
                            <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${project.bg}`}>
                                {project.icon}
                            </div>
                            <button className="text-gray-400 hover:text-gray-600">
                                <MoreVertical size={20} />
                            </button>
                        </div>

                        <div className="mb-6">
                            <h3 className="font-bold text-gray-900 text-lg leading-tight mb-1">{project.title}</h3>
                            <p className="text-sm text-gray-500">{project.type}</p>
                        </div>

                        <div className="flex gap-2 mb-6">
                            {project.tags.map((tag, i) => (
                                <span key={i} className="px-2 py-1 bg-gray-50 border border-gray-100 text-xs text-gray-600 rounded-md font-medium">
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <div className="mt-auto">
                            <div className="flex justify-between text-xs font-medium text-gray-500 mb-2">
                                <span>{project.status}</span>
                                <span>{project.progress}%</span>
                            </div>
                            <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden mb-4">
                                <div
                                    className={`h-full rounded-full ${project.progress === 100 ? 'bg-green-500' : 'bg-blue-600'}`}
                                    style={{ width: `${project.progress}%` }}
                                ></div>
                            </div>

                            <div className="flex items-center justify-between pt-4 border-t border-gray-50">
                                <div className="flex items-center gap-2 text-xs text-gray-400">
                                    <Clock size={14} />
                                    <span>{project.lastEdited}</span>
                                </div>

                                {/* Continue Button - Navigates to specific project */}
                                <button
                                    onClick={() => navigate(`/project/${project.id}`)}
                                    className="text-blue-600 text-sm font-bold flex items-center gap-1 hover:gap-2 transition-all"
                                >
                                    Continue <ArrowRight size={16} />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ActiveProjects;