import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
import Skill from './Skill';



const Footer = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [hoveredSocial, setHoveredSocial] = useState<number | null>(null);
    const [hoveredLink, setHoveredLink] = useState<string | null>(null);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 100);

        return () => clearTimeout(timer);
    }, []);

    const socialLinks = [
        {
            name: 'GitHub',
            icon: <FaGithub size={20} />,
            url: 'https://github.com/salman-ctrl',
            color: 'hover:text-purple-400',
            bgColor: 'hover:bg-purple-500/20'
        },
        {
            name: 'LinkedIn',
            icon: <FaLinkedin size={20} />,
            url: 'https://www.linkedin.com/in/salman-rizky-763253265/',
            color: 'hover:text-blue-400',
            bgColor: 'hover:bg-blue-500/20'
        },
        {
            name: 'Twitter',
            icon: <FaTwitter size={20} />,
            url: '#',
            color: 'hover:text-sky-400',
            bgColor: 'hover:bg-sky-500/20'
        },
        {
            name: 'Instagram',
            icon: <FaInstagram size={20} />,
            url: 'https://www.instagram.com/rakyat_semesta/',
            color: 'hover:text-pink-400',
            bgColor: 'hover:bg-pink-500/20'
        },
    ];

    const quickLinks = [
        { name: 'About', url: '#about' },
        { name: 'Projects', url: '#showcase-section' },
        { name: 'Skills', url: '#skill' },
        { name: 'Contact', url: '#heroś' }
    ];

    const services = [
        { name: 'Web Development', url: '' },
        { name: 'Mobile Apps', url: '#' },
        { name: 'UI/UX Design', url: '#' },
        { name: 'Consulting', url: '#' }
    ];

    return (
        <footer className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-sky-500 opacity-10 blur-3xl animate-pulse"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-cyan-500 opacity-10 blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-sky-400 opacity-5 blur-3xl animate-pulse delay-500"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
                {/* Main Footer Content */}
                <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

                    {/* Brand Section */}
                    <div className={`lg:col-span-2 transition-all duration-1000 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <div className="group">
                            <h3 className="text-3xl font-bold bg-gradient-to-r from-sky-400 via-cyan-400 to-sky-300 bg-clip-text text-transparent mb-4 group-hover:animate-pulse transition-all duration-300">
                                Salman Rizky
                            </h3>
                            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
                                Passionate developer crafting digital experiences with modern technologies.
                                Let's build something amazing together!
                            </p>

                            {/* Social Links */}
                            <div className="flex flex-wrap gap-3">
                                {socialLinks.map((social, index) => (
                                    <a
                                        key={index}
                                        href={social.url}
                                        className={`group relative w-12 h-12 rounded-xl bg-slate-800/40 backdrop-blur-lg border border-sky-300/20 flex items-center justify-center transform transition-all duration-300 hover:scale-110 hover:-translate-y-1 ${social.bgColor} ${social.color}`}
                                        onMouseEnter={() => setHoveredSocial(index)}
                                        onMouseLeave={() => setHoveredSocial(null)}
                                    >
                                        {/* Glow Effect */}
                                        <div className={`absolute inset-0 rounded-xl bg-gradient-to-r from-sky-500 to-cyan-500 opacity-0 group-hover:opacity-20 blur-xl transition-all duration-300`}></div>

                                        <span className="text-xl relative z-10">{social.icon}</span>

                                        {/* Floating particles effect */}
                                        {hoveredSocial === index && (
                                            <>
                                                <div className="absolute -top-1 -right-1 w-2 h-2 bg-sky-400 rounded-full animate-ping"></div>
                                                <div className="absolute -bottom-1 -left-1 w-1 h-1 bg-cyan-400 rounded-full animate-ping delay-100"></div>
                                            </>
                                        )}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <h4 className="text-xl font-semibold text-sky-300 mb-6 relative">
                            Quick Links
                            <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-sky-400 to-cyan-400 rounded-full"></div>
                        </h4>
                        <ul className="space-y-3">
                            {quickLinks.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link.url}
                                        className={`group flex items-center text-gray-300 hover:text-sky-300 transition-all duration-300 transform hover:translate-x-2 ${hoveredLink === `quick-${index}` ? 'text-sky-300' : ''}`}
                                        onMouseEnter={() => setHoveredLink(`quick-${index}`)}
                                        onMouseLeave={() => setHoveredLink(null)}
                                    >
                                        <span className={`w-2 h-2 rounded-full bg-sky-400 mr-3 transition-all duration-300 ${hoveredLink === `quick-${index}` ? 'animate-pulse scale-125' : 'opacity-50'}`}></span>
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <h4 className="text-xl font-semibold text-sky-300 mb-6 relative">
                            Services
                            <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-sky-400 to-cyan-400 rounded-full"></div>
                        </h4>
                        <ul className="space-y-3">
                            {services.map((service, index) => (
                                <li key={index}>
                                    <a
                                        href={service.url}
                                        className={`group flex items-center text-gray-300 hover:text-sky-300 transition-all duration-300 transform hover:translate-x-2 ${hoveredLink === `service-${index}` ? 'text-sky-300' : ''}`}
                                        onMouseEnter={() => setHoveredLink(`service-${index}`)}
                                        onMouseLeave={() => setHoveredLink(null)}
                                    >
                                        <span className={`w-2 h-2 rounded-full bg-cyan-400 mr-3 transition-all duration-300 ${hoveredLink === `service-${index}` ? 'animate-pulse scale-125' : 'opacity-50'}`}></span>
                                        {service.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Newsletter Section */}
                <div className={`bg-slate-800/40 backdrop-blur-lg border border-sky-300/20 rounded-2xl p-6 mb-8 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div>
                            <h4 className="text-xl font-semibold text-sky-300 mb-2">Stay Updated</h4>
                            <p className="text-gray-300">Get the latest updates on my projects and tech insights.</p>
                        </div>
                        <div className="flex flex-col gap-2 min-w-0 md:min-w-80 ">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 px-4 py-3 bg-slate-700/40 border border-sky-300/20 rounded-xl text-gray-300 placeholder-gray-400 focus:outline-none focus:border-sky-400/50 focus:bg-slate-700/60 transition-all duration-300"
                            />
                            <button className="px-6 py-3 bg-gradient-to-r from-sky-500 to-cyan-500 text-white rounded-xl hover:from-sky-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-sky-500/25 whitespace-nowrap">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className={`border-t border-sky-300/20 pt-8 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div className="flex items-center gap-4">
                            <p className="text-gray-300 text-sm">
                                © 2025 Salman Rizky. All rights reserved.
                            </p>
                            <div className="flex gap-2">
                                {[...Array(3)].map((_, i) => (
                                    <div
                                        key={i}
                                        className="w-1 h-1 rounded-full bg-gradient-to-r from-sky-500 to-cyan-500 animate-pulse"
                                        style={{ animationDelay: `${i * 200}ms` }}
                                    ></div>
                                ))}
                            </div>
                        </div>

                        <div className="flex items-center gap-6 text-sm text-gray-400">
                            <a href="#" className="hover:text-sky-300 transition-colors duration-300">Privacy Policy</a>
                            <a href="#" className="hover:text-sky-300 transition-colors duration-300">Terms of Service</a>
                            <a href="#" className="hover:text-sky-300 transition-colors duration-300">Cookies</a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Floating Animation CSS */}
            <style>
                {`
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
          }
          .animate-float {
            animation: float 3s ease-in-out infinite;
          }
          .animate-float-delayed {
            animation: float 3s ease-in-out infinite;
            animation-delay: 1s;
          }
        `}
            </style>
        </footer>
    );
};

export default Footer;