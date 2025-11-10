import { useState, useEffect } from "react";
import { ChevronRight, Calendar, Building, ExternalLink, Github, Eye, ArrowRight, Grid3X3, List } from 'lucide-react';
import data from "../data.json";
import AOS from 'aos';
import 'aos/dist/aos.css';

interface Sertifikat {
    img: string;
    title: string;
    date: string;
    company: string;
}



const Achievement = () => {
    const [projects, setProjects] = useState<Sertifikat[]>([]);
    const [showAll, setShowAll] = useState(false);
    const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
    const [isVisible, setIsVisible] = useState(false);
    const [hoveredProject, setHoveredProject] = useState<number | null>(null);

    const displayedProjects = showAll ? projects : projects.slice(0, 4);

    useEffect(() => {
        // Initialize AOS
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true,
            mirror: false,
            offset: 100,
        });

        const dataGambar = data[0]?.Sertifikat || [];
        setProjects(dataGambar);

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        const showcaseElement = document.getElementById('showcase-section');
        if (showcaseElement) {
            observer.observe(showcaseElement);
        }

        return () => {
            if (showcaseElement) {
                observer.unobserve(showcaseElement);
            }
        };
    }, []);

    // Refresh AOS when viewMode changes
    useEffect(() => {
        AOS.refresh();
    }, [viewMode, showAll]);

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
                <div
                    className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse"
                    data-aos="fade-left"
                    data-aos-delay="400"
                ></div>
                <div
                    className="absolute bottom-20 left-20 w-72 h-72 bg-gradient-to-br from-green-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"
                    data-aos="fade-right"
                    data-aos-delay="500"
                ></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <div
                        className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-6 border border-white/20"
                        data-aos="fade-up"
                        data-aos-delay="100"
                    >
                        <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                        Featured Work
                    </div>

                    <h2
                        className="text-5xl md:text-6xl font-bold mb-6"
                        data-aos="fade-up"
                        data-aos-delay="200"
                    >
                        <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
                            My Certificates
                        </span>
                    </h2>

                    <p
                        className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed"
                        data-aos="fade-up"
                        data-aos-delay="300"
                    >
                        Professional certifications and achievements that validate my skills and expertise
                    </p>

                    {/* View Mode Toggle */}
                    <div
                        className="flex items-center justify-center gap-4 mt-8"
                        data-aos="fade-up"
                        data-aos-delay="400"
                    >
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
                    ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8'
                    : 'flex flex-col gap-6'
                    } transition-all duration-500`}>
                    {displayedProjects.map((project, index) => (
                        <div
                            key={index}
                            className={`group relative bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 ${viewMode === 'list' ? 'flex items-center' : ''}`}
                            data-aos={viewMode === 'grid' ? (index % 2 === 0 ? 'fade-right' : 'fade-left') : 'fade-up'}
                            data-aos-delay={index * 100}
                            data-aos-duration="600"
                            onMouseEnter={() => setHoveredProject(index)}
                            onMouseLeave={() => setHoveredProject(null)}
                        >
                            {/* Project Image */}
                            <div className={`relative overflow-hidden ${viewMode === 'list' ? 'w-64 h-48 flex-shrink-0' : 'aspect-video'
                                }`}>
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

                                <p className="text-gray-300 mb-4">
                                    Certificate from {project.company}
                                </p>

                                {/* Date Badge */}
                                <div className="flex items-center gap-2 mb-4">
                                    <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs font-medium border border-blue-500/30">
                                        {formatDate(project.date)}
                                    </span>
                                </div>

                                {/* Action Button */}
                                <button className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors duration-300 group/btn">
                                    <span className="text-sm font-medium">View Certificate</span>
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
                    <div
                        className="text-center mt-12"
                        data-aos="fade-up"
                        data-aos-delay="200"
                    >
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
                        { number: projects.length, label: 'Certificates Earned' },
                        { number: '5+', label: 'Different Institutions' },
                        { number: '100%', label: 'Success Rate' }
                    ].map((stat, index) => (
                        <div
                            key={index}
                            className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10"
                            data-aos="zoom-in"
                            data-aos-delay={index * 150}
                            data-aos-duration="600"
                        >
                            <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                                {stat.number}
                            </div>
                            <div className="text-gray-300">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Achievement;