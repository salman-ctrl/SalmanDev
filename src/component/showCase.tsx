import { useState, useEffect } from "react";
import { ChevronRight, Calendar, Building, ExternalLink, Github, Eye, ArrowRight, Grid3X3, List } from 'lucide-react';

// Mock data - replace with your actual data import
const mockData = [
    {
        "Sertifikat": [
            {
                "img": "/assets/showcase/Sevigo.png",
                "title": "Sevigo",
                "date": "2024-10-15",
                "company": "Community GovTech RW 05",
                "description": "A citizen complaint web platform that enables residents to report issues related to public services, infrastructure, and neighborhood safety.",
                "technologies": ["React", "Node.js", "MongoDB", "Express", "TypeScript"],
                "link": "https://frontend-delta-two-46.vercel.app/"
            },
            {
                "img": "/assets/showcase/firstoffice.png",
                "title": "Find Office",
                "date": "2025-06-20",
                "company": "Portfolio",
                "description": "Office rental platform with global locations, integrated payments, and WhatsApp invoicing",
                "technologies": ["React", "Tailwind", "Framer Motion", "Laravel", "Filament", "TypeScript"],
                "link": "#"
            },
            {
                "img": "/assets/showcase/webcrafters.png",
                "title": "WebCrafters",
                "date": "2025-03-10",
                "company": "Portfolio",
                "description": "Landing page for a service that offers custom website development and design solutions.",
                "technologies": ["Html", "Tailwind", "Node"],
                "link": "https://webcrafters2-94vg2jz38-salmans-projects-df3b3e2f.vercel.app/"
            },
            {
                "img": "/assets/showcase/griya.png",
                "title": "Griya Senandika",
                "date": "2024-04-05",
                "company": "Griya Digital",
                "description": "A landing page portfolio for a digital company that showcases their services and featured projects",
                "technologies": ["HTML", "Bootstrap", "JavaScript"],
                "link": "https://salman-ctrl.github.io/Company_Profile_Griya_Senandika/"
            },
            {
                "img": "/assets/showcase/fanta.png",
                "title": "Ale Ale Company Site",
                "date": "2024-04-05",
                "company": "Ale Ale",
                "description": "A landing page portfolio for Ale Ale, a company presenting its profile, services, and featured projects to potential clients and partners.",
                "technologies": ["HTML", "Bootstrap", "JavaScript"],
                "link": "https://firstofficedev-fe-a4op.vercel.app/"
            },
            {
                "img": "/assets/showcase/webnagari.png",
                "title": "Learning Management System",
                "date": "2024-06-18",
                "company": "EduTech",
                "description": "Online learning platform with video streaming",
                "technologies": ["Bootstrap", "Html", "Javascript"],
                "link": "https://salman-ctrl.github.io/Website-Nagari-Kuamang-Alai-Ujung-Gading/"
            }
        ]
    }
];

interface Project {
    img: string;
    title: string;
    date: string;
    company: string;
    description?: string;
    technologies?: string[];
    link?: string;
}

const Showcase = () => {
    const [projects, setProjects] = useState<Project[]>([]);
    const [showAll, setShowAll] = useState(false);
    const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
    const [hoveredProject, setHoveredProject] = useState<number | null>(null);

    const displayedProjects = showAll ? projects : projects.slice(0, 4);

    useEffect(() => {
        // Initialize AOS
        if (typeof window !== 'undefined') {
            import('aos').then(AOS => {
                AOS.init({
                    duration: 1000,
                    easing: 'ease-in-out',
                    once: false,
                    offset: 50,
                    delay: 0,
                    anchorPlacement: 'top-bottom'
                });
            });
        }

        // Replace this with your actual data import
        const dataProjects = mockData[0]?.Sertifikat || [];
        setProjects(dataProjects);
    }, []);

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short'
        });
    };

    return (
        <section id="showcase-section" className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 py-20 overflow-hidden">
            {/* Animated background */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 left-20 w-72 h-72 bg-gradient-to-br from-green-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header Section */}
                <div className="text-center mb-16" data-aos="fade-up" data-aos-duration="1000">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-6 border border-white/20" data-aos="fade-up" data-aos-delay="200">
                        <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                        Featured Work
                    </div>

                    <h2 className="text-5xl md:text-6xl font-bold mb-6" data-aos="fade-up" data-aos-delay="400">
                        <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
                            My Projects
                        </span>
                    </h2>

                    <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed" data-aos="fade-up" data-aos-delay="600">
                        Explore my latest work and creative solutions that bring ideas to life
                    </p>

                    {/* View Mode Toggle */}
                    <div className="flex items-center justify-center gap-4 mt-8" data-aos="fade-up" data-aos-delay="800">
                        <div className="flex bg-white/10 backdrop-blur-sm rounded-xl p-1 border border-white/20">
                            <button
                                onClick={() => setViewMode('grid')}
                                className={`p-3 rounded-lg transition-all duration-300 ${viewMode === 'grid'
                                    ? 'bg-blue-500 text-white shadow-lg'
                                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                                    }`}
                            >
                                <Grid3X3 className="w-5 h-5" />
                            </button>
                            <button
                                onClick={() => setViewMode('list')}
                                className={`p-3 rounded-lg transition-all duration-300 ${viewMode === 'list'
                                    ? 'bg-blue-500 text-white shadow-lg'
                                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                                    }`}
                            >
                                <List className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Projects Grid/List */}
                <div className={`${viewMode === 'grid'
                    ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-24'
                    : 'flex flex-col gap-6'
                    } transition-all duration-500`}>
                    {displayedProjects.map((project, index) => (
                        <div
                            key={index}
                            className={`group relative bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 ${viewMode === 'list' ? 'flex items-center' : ''}`}
                            data-aos="fade-up"
                            data-aos-delay={index * 200}
                            data-aos-duration="1000"
                            onMouseEnter={() => setHoveredProject(index)}
                            onMouseLeave={() => setHoveredProject(null)}
                        >
                            {/* Project Image */}
                            <div className={`relative overflow-hidden ${viewMode === 'list' ? 'w-64 h-48 flex-shrink-0' : 'aspect-video'}`}>
                                <img
                                    src={project.img}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                {/* Floating Action Buttons */}
                                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                                    <button className="p-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-colors duration-300">
                                        <ExternalLink className="w-4 h-4 text-white" />
                                    </button>
                                    <button className="p-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-colors duration-300">
                                        <Github className="w-4 h-4 text-white" />
                                    </button>
                                </div>

                                {/* Gradient Border Effect */}
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>

                            {/* Project Content */}
                            <div className={`p-6 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                                <div className="flex items-center gap-2 mb-3">
                                    <div className="flex items-center gap-2 text-sm text-gray-400">
                                        <Calendar className="w-4 h-4" />
                                        {formatDate(project.date)}
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-gray-400">
                                        <Building className="w-4 h-4" />
                                        {project.company}
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">
                                    {project.title}
                                </h3>

                                {project.description && (
                                    <p className="text-gray-300 mb-4 line-clamp-2">
                                        {project.description}
                                    </p>
                                )}

                                {/* Technologies */}
                                {project.technologies && (
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.technologies.map((tech, techIndex) => (
                                            <span
                                                key={techIndex}
                                                className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs font-medium border border-blue-500/30"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                )}

                                {/* Action Button */}
                                <button className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors duration-300 group/btn">
                                    <a href={project.link}><span className="text-sm font-medium">View Project</span></a>
                                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                                </button>
                            </div>

                            {/* Hover Effect Border */}
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/50 to-purple-500/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl"></div>
                        </div>
                    ))}
                </div>

                {/* Show More Button */}
                {projects.length > 4 && (
                    <div className="text-center mt-12" data-aos="fade-up" data-aos-delay="400">
                        <button
                            onClick={() => setShowAll(!showAll)}
                            className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-2xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 flex items-center gap-3 mx-auto overflow-hidden"
                        >
                            <span className="relative z-10">
                                {showAll ? 'Show Less' : `Show More (${projects.length - 4} more)`}
                            </span>
                            <ChevronRight className={`w-5 h-5 transition-transform duration-300 ${showAll ? 'rotate-90' : 'group-hover:translate-x-1'}`} />
                            <div className="absolute inset-0 bg-gradient-to-r from-white/0 to-white/20 transform translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                        </button>
                    </div>
                )}

                {/* Stats Section */}
                <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { number: projects.length, label: 'Projects Completed' },
                        { number: '2+', label: 'Years Experience' },
                        { number: '10+', label: 'Technologies Used' }
                    ].map((stat, index) => (
                        <div
                            key={index}
                            className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10"
                            data-aos="fade-up"
                            data-aos-delay={index * 200}
                            data-aos-duration="1000"
                        >
                            <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                                {stat.number}
                            </div>
                            <div className="text-gray-300">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* AOS CSS */}
            <style>{`
                @import url('https://unpkg.com/aos@2.3.1/dist/aos.css');
            `}</style>
        </section>
    );
};

export default Showcase;